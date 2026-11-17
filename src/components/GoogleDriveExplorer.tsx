import React, { useState, useEffect } from 'react';
import { User } from 'firebase/auth';
import {
  googleSignIn,
  logout,
  initAuth,
} from '../services/firebaseAuth';
import {
  DriveFile,
  DriveQuota,
  listDriveFiles,
  createDriveFolder,
  uploadDriveFile,
  deleteDriveFile,
  getDriveStorageQuota,
} from '../services/googleDriveService';
import {
  Folder,
  FileSpreadsheet,
  FileText,
  FileCode,
  Image as ImageIcon,
  File,
  UploadCloud,
  FolderPlus,
  RefreshCw,
  Search,
  Trash2,
  ExternalLink,
  ChevronRight,
  LogOut,
  AlertTriangle,
  HardDrive,
  X,
  CheckCircle2,
} from 'lucide-react';

interface GoogleDriveExplorerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GoogleDriveExplorer: React.FC<GoogleDriveExplorerProps> = ({
  isOpen,
  onClose,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isLoadingFiles, setIsLoadingFiles] = useState(false);
  const [files, setFiles] = useState<DriveFile[]>([]);
  const [quota, setQuota] = useState<DriveQuota | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [mimeFilter, setMimeFilter] = useState<
    'all' | 'spreadsheet' | 'document' | 'presentation' | 'folder'
  >('all');
  const [currentFolderId, setCurrentFolderId] = useState<string>('root');
  const [folderHistory, setFolderHistory] = useState<Array<{ id: string; name: string }>>([
    { id: 'root', name: 'Mi Unidad' },
  ]);
  const [error, setError] = useState<string | null>(null);

  // New Folder Modal State
  const [isNewFolderOpen, setIsNewFolderOpen] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');
  const [isCreatingFolder, setIsCreatingFolder] = useState(false);

  // Delete Confirmation Modal State (MANDATORY for destructive operations)
  const [fileToDelete, setFileToDelete] = useState<DriveFile | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Upload State
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccessMessage, setUploadSuccessMessage] = useState<string | null>(null);

  // Initialize Auth state listener
  useEffect(() => {
    const unsubscribe = initAuth(
      (currentUser, accessToken) => {
        setUser(currentUser);
        setToken(accessToken);
      },
      () => {
        setUser(null);
        setToken(null);
      }
    );
    return () => unsubscribe();
  }, []);

  // Fetch files when token or folder or filter changes
  useEffect(() => {
    if (token && isOpen) {
      loadFiles();
      loadQuota();
    }
  }, [token, currentFolderId, mimeFilter, isOpen]);

  const loadFiles = async () => {
    if (!token) return;
    setIsLoadingFiles(true);
    setError(null);
    try {
      const data = await listDriveFiles(token, {
        folderId: currentFolderId,
        searchTerm: searchTerm.trim() || undefined,
        mimeTypeFilter: mimeFilter,
      });
      setFiles(data.files || []);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'No fue posible cargar los archivos de Google Drive.');
    } finally {
      setIsLoadingFiles(false);
    }
  };

  const loadQuota = async () => {
    if (!token) return;
    const q = await getDriveStorageQuota(token);
    setQuota(q);
  };

  const handleLogin = async () => {
    setIsLoggingIn(true);
    setError(null);
    try {
      const res = await googleSignIn();
      if (res) {
        setUser(res.user);
        setToken(res.accessToken);
      }
    } catch (err: any) {
      console.error('Login error:', err);
      setError(err.message || 'Error al iniciar sesión con Google.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
    setToken(null);
    setFiles([]);
    setFolderHistory([{ id: 'root', name: 'Mi Unidad' }]);
    setCurrentFolderId('root');
  };

  const handleOpenFolder = (folder: DriveFile) => {
    setCurrentFolderId(folder.id);
    setFolderHistory((prev) => [...prev, { id: folder.id, name: folder.name }]);
  };

  const handleNavigateBreadcrumb = (index: number) => {
    const target = folderHistory[index];
    const newHistory = folderHistory.slice(0, index + 1);
    setFolderHistory(newHistory);
    setCurrentFolderId(target.id);
  };

  const handleCreateFolder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token || !newFolderName.trim()) return;
    setIsCreatingFolder(true);
    try {
      await createDriveFolder(token, newFolderName.trim(), currentFolderId);
      setNewFolderName('');
      setIsNewFolderOpen(false);
      await loadFiles();
    } catch (err: any) {
      setError(err.message || 'Error al crear la carpeta');
    } finally {
      setIsCreatingFolder(false);
    }
  };

  const handleFileSelectAndUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !token) return;

    setIsUploading(true);
    setError(null);
    try {
      const uploaded = await uploadDriveFile(token, file, currentFolderId);
      setUploadSuccessMessage(`"${uploaded.name}" subido exitosamente a Google Drive.`);
      setTimeout(() => setUploadSuccessMessage(null), 4000);
      await loadFiles();
    } catch (err: any) {
      setError(err.message || 'Error al subir el archivo.');
    } finally {
      setIsUploading(false);
      e.target.value = '';
    }
  };

  // Explicit confirmation before deleting as required by Workspace integration guidelines
  const handleConfirmDelete = async () => {
    if (!token || !fileToDelete) return;
    setIsDeleting(true);
    try {
      await deleteDriveFile(token, fileToDelete.id);
      setFileToDelete(null);
      await loadFiles();
    } catch (err: any) {
      setError(err.message || 'Error al eliminar el archivo');
    } finally {
      setIsDeleting(false);
    }
  };

  const formatFileSize = (bytesStr?: string) => {
    if (!bytesStr) return '—';
    const bytes = parseInt(bytesStr, 10);
    if (isNaN(bytes)) return '—';
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const getFileIcon = (mimeType: string) => {
    if (mimeType === 'application/vnd.google-apps.folder') {
      return <Folder className="w-5 h-5 text-[#84AF25] fill-[#84AF25]/20" />;
    }
    if (
      mimeType.includes('spreadsheet') ||
      mimeType.includes('sheet') ||
      mimeType.includes('csv')
    ) {
      return <FileSpreadsheet className="w-5 h-5 text-[#84AF25]" />;
    }
    if (mimeType.includes('document') || mimeType.includes('pdf')) {
      return <FileText className="w-5 h-5 text-[#374556]" />;
    }
    if (mimeType.includes('presentation')) {
      return <FileCode className="w-5 h-5 text-[#434349]" />;
    }
    if (mimeType.includes('image')) {
      return <ImageIcon className="w-5 h-5 text-[#374556]" />;
    }
    return <File className="w-5 h-5 text-[#434349]/60" />;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#374556]/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-[#374556]/20 overflow-hidden text-left flex flex-col h-[90vh] max-h-[860px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#374556] text-white px-6 py-5 flex items-center justify-between border-b border-[#434349] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/15">
              {/* Google Drive Tri-color Icon */}
              <svg className="w-6 h-6" viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg">
                <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.9 2.5 3.2 3.3l12.3-21.3H6.6c0 1.6.4 3.1 1.2 4.5z" fill="#0066da"/>
                <path d="M43.65 25 29.5 0c-1.3.8-2.4 1.9-3.2 3.3L1.2 46.1c-.8 1.4-1.2 2.9-1.2 4.5h25.95z" fill="#00ac47"/>
                <path d="M73.55 76.8c1.3-.8 2.4-1.9 3.2-3.3l1.6-2.75 7.75-13.4c.8-1.4 1.2-2.9 1.2-4.5H61.35l5.3 9.15z" fill="#ea4335"/>
                <path d="M43.65 25 57.8 0H29.5z" fill="#00832d"/>
                <path d="m57.8 0-14.15 25H87.3c0-1.6-.4-3.1-1.2-4.5L72.45 3.3C71.65 1.9 70.55.8 69.25 0z" fill="#ffba00"/>
                <path d="m25.95 55.45-12.3 21.35c1.3.8 2.8 1.2 4.35 1.2h51.3c1.55 0 3.05-.4 4.35-1.2l-12.3-21.35z" fill="#2684fc"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Google Drive Workspace
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-[#84AF25]/25 text-[#84AF25] text-[11px] font-bold">
                  API v3 Conectado
                </span>
              </div>
              <p className="text-xs text-white/75">
                Accede a informes, modelos de analítica, planes de medios y archivos corporativos de tu cuenta Google.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {user && (
              <div className="hidden sm:flex items-center gap-2.5 bg-[#434349] rounded-full px-3 py-1.5 border border-white/15">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.displayName || 'User'}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-6 h-6 rounded-full bg-[#84AF25] text-[#232930] font-bold text-xs flex items-center justify-center">
                    {user.email?.charAt(0).toUpperCase() || 'U'}
                  </div>
                )}
                <span className="text-xs text-white/90 font-medium truncate max-w-[140px]">
                  {user.displayName || user.email}
                </span>
                <button
                  onClick={handleLogout}
                  title="Cerrar sesión de Google"
                  className="text-white/70 hover:text-rose-300 transition-colors p-1 cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Cerrar Drive Explorer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Success or Error Banner */}
        {uploadSuccessMessage && (
          <div className="bg-[#84AF25]/15 border-b border-[#84AF25]/35 px-6 py-2.5 flex items-center gap-2 text-xs font-semibold text-[#374556] animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-[#84AF25]" />
            <span>{uploadSuccessMessage}</span>
          </div>
        )}
        {error && (
          <div className="bg-rose-50 border-b border-rose-200 px-6 py-2.5 flex items-center gap-2 text-xs font-semibold text-rose-800 animate-in fade-in">
            <AlertTriangle className="w-4 h-4 text-rose-600" />
            <span>{error}</span>
          </div>
        )}

        {/* Content Body */}
        {!user || !token ? (
          /* Unauthenticated State: Official Google Sign-in Prompt */
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-6">
            <div className="w-20 h-20 rounded-3xl bg-[#374556]/6 flex items-center justify-center shadow-inner border border-[#374556]/10">
              <HardDrive className="w-10 h-10 text-[#84AF25]" />
            </div>

            <div className="max-w-md space-y-2">
              <h4 className="text-2xl font-extrabold text-[#374556]">
                Conectar Google Drive
              </h4>
              <p className="text-sm text-[#434349]/80 leading-relaxed">
                Inicia sesión con tu cuenta de Google para explorar tus carpetas, hojas de cálculo, presentaciones y documentos directamente desde Mentalidad Web, con los permisos otorgados por ti.
              </p>
            </div>

            {/* Official Sign in with Google Button */}
            <button
              onClick={handleLogin}
              disabled={isLoggingIn}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white hover:bg-[#374556]/5 text-[#434349] font-semibold text-sm rounded-full border border-[#374556]/25 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer disabled:opacity-60"
            >
              <svg className="w-5 h-5" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
              </svg>
              <span>{isLoggingIn ? 'Conectando con Google...' : 'Iniciar sesión con Google'}</span>
            </button>

            <div className="text-xs text-[#434349]/55 max-w-sm">
              Tus credenciales y datos se manejan con los estándares de seguridad de Google Identity y Firebase Authentication.
            </div>
          </div>
        ) : (
          /* Authenticated State: Explorer Toolbar & Files */
          <div className="flex-1 flex flex-col min-h-0">
            {/* Toolbar Row */}
            <div className="p-4 sm:p-5 border-b border-[#374556]/10 bg-[#374556]/[0.03] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shrink-0">
              {/* Breadcrumbs */}
              <div className="flex items-center gap-1.5 text-xs text-[#434349] font-medium overflow-x-auto py-1">
                {folderHistory.map((folder, index) => {
                  const isLast = index === folderHistory.length - 1;
                  return (
                    <React.Fragment key={folder.id}>
                      {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-[#434349]/45 shrink-0" />}
                      <button
                        onClick={() => handleNavigateBreadcrumb(index)}
                        className={`truncate max-w-[140px] px-2 py-1 rounded hover:bg-[#374556]/10 transition-colors cursor-pointer ${
                          isLast ? 'font-bold text-[#374556]' : 'text-[#434349]/70'
                        }`}
                      >
                        {folder.name}
                      </button>
                    </React.Fragment>
                  );
                })}
              </div>

              {/* Actions & Filters */}
              <div className="flex items-center gap-2 flex-wrap">
                {/* Search */}
                <div className="relative flex items-center">
                  <Search className="w-3.5 h-3.5 text-[#434349]/45 absolute left-3" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && loadFiles()}
                    placeholder="Buscar archivos..."
                    className="pl-8 pr-3 py-1.5 text-xs bg-white rounded-lg border border-[#374556]/20 text-[#434349] focus:outline-none focus:border-[#84AF25] w-36 sm:w-44"
                  />
                </div>

                {/* Refresh */}
                <button
                  onClick={loadFiles}
                  disabled={isLoadingFiles}
                  title="Actualizar lista"
                  className="p-2 rounded-lg bg-white border border-[#374556]/20 hover:bg-[#374556]/5 text-[#434349] transition-colors cursor-pointer"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isLoadingFiles ? 'animate-spin text-[#84AF25]' : ''}`} />
                </button>

                {/* New Folder Button */}
                <button
                  onClick={() => setIsNewFolderOpen(true)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white border border-[#374556]/20 hover:bg-[#374556]/5 text-[#374556] text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                >
                  <FolderPlus className="w-3.5 h-3.5 text-[#84AF25]" />
                  <span>Carpeta</span>
                </button>

                {/* Upload File Input */}
                <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#84AF25] hover:bg-[#374556] text-[#232930] hover:text-white text-xs font-bold shadow-xs transition-all cursor-pointer">
                  <UploadCloud className="w-3.5 h-3.5" />
                  <span>{isUploading ? 'Subiendo...' : 'Subir archivo'}</span>
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileSelectAndUpload}
                    disabled={isUploading}
                  />
                </label>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="px-6 py-2.5 bg-white border-b border-[#374556]/10 flex items-center gap-2 overflow-x-auto shrink-0">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#434349]/55 mr-2 shrink-0">
                Filtrar:
              </span>
              {[
                { id: 'all', label: 'Todos los archivos' },
                { id: 'spreadsheet', label: 'Sheets / Excel' },
                { id: 'document', label: 'Docs / PDFs' },
                { id: 'presentation', label: 'Presentaciones' },
                { id: 'folder', label: 'Carpetas' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setMimeFilter(tab.id as any)}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                    mimeFilter === tab.id
                      ? 'bg-[#84AF25]/20 text-[#374556] font-bold border border-[#84AF25]/45'
                      : 'text-[#434349]/75 hover:bg-[#374556]/5 border border-transparent'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Files List / Table */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              {isLoadingFiles ? (
                <div className="h-64 flex flex-col items-center justify-center space-y-3 text-[#434349]/60">
                  <RefreshCw className="w-8 h-8 animate-spin text-[#84AF25]" />
                  <span className="text-sm font-medium">Cargando archivos desde Google Drive...</span>
                </div>
              ) : files.length === 0 ? (
                <div className="h-64 flex flex-col items-center justify-center space-y-3 text-[#434349]/60">
                  <Folder className="w-12 h-12 text-[#374556]/25 stroke-[1.5]" />
                  <span className="text-sm font-medium">Esta carpeta está vacía o no coincide con la búsqueda.</span>
                </div>
              ) : (
                <div className="grid grid-cols-1 divide-y divide-[#374556]/10 border border-[#374556]/15 rounded-2xl overflow-hidden bg-white shadow-xs">
                  {files.map((file) => {
                    const isFolder = file.mimeType === 'application/vnd.google-apps.folder';

                    return (
                      <div
                        key={file.id}
                        className="p-3.5 sm:px-5 hover:bg-[#374556]/[0.03] transition-colors flex items-center justify-between gap-4 group"
                      >
                        {/* File Name & Icon */}
                        <div
                          className="flex items-center gap-3.5 flex-1 min-w-0 cursor-pointer"
                          onClick={() => {
                            if (isFolder) {
                              handleOpenFolder(file);
                            } else if (file.webViewLink) {
                              window.open(file.webViewLink, '_blank', 'noopener,noreferrer');
                            }
                          }}
                        >
                          <div className="shrink-0 p-2 rounded-xl bg-[#374556]/[0.04] border border-[#374556]/10 group-hover:bg-white group-hover:scale-105 transition-all">
                            {getFileIcon(file.mimeType)}
                          </div>
                          <div className="min-w-0 flex-1 text-left">
                            <span className="text-sm font-semibold text-[#374556] hover:text-[#84AF25] transition-colors truncate block">
                              {file.name}
                            </span>
                            <div className="flex items-center gap-2 text-[11px] text-[#434349]/55 mt-0.5">
                              <span>{isFolder ? 'Carpeta' : formatFileSize(file.size)}</span>
                              {file.modifiedTime && (
                                <>
                                  <span>·</span>
                                  <span>
                                    Modificado: {new Date(file.modifiedTime).toLocaleDateString('es-CL')}
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2 shrink-0">
                          {file.webViewLink && (
                            <a
                              href={file.webViewLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Abrir en Google Drive"
                              className="p-2 rounded-lg text-[#434349]/55 hover:text-[#84AF25] hover:bg-white transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}

                          {/* Delete File Button (Opens explicit confirmation modal) */}
                          <button
                            onClick={() => setFileToDelete(file)}
                            title="Eliminar archivo"
                            className="p-2 rounded-lg text-[#434349]/55 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer Summary Bar */}
            <div className="px-6 py-3 bg-[#374556]/[0.03] border-t border-[#374556]/10 flex items-center justify-between text-xs text-[#434349]/70 shrink-0">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#374556] tabular-nums">
                  {files.length} {files.length === 1 ? 'elemento' : 'elementos'}
                </span>
                {quota?.usage && (
                  <>
                    <span>·</span>
                    <span>Almacenamiento en uso: {formatFileSize(quota.usage)}</span>
                  </>
                )}
              </div>
              <span className="text-[11px] text-[#434349]/55">
                Sincronización directa con Google Cloud APIs
              </span>
            </div>
          </div>
        )}
      </div>

      {/* New Folder Modal */}
      {isNewFolderOpen && (
        <div className="fixed inset-0 z-60 bg-[#374556]/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl text-left space-y-4 border border-[#374556]/15">
            <h4 className="text-lg font-bold text-[#374556]">Nueva Carpeta</h4>
            <form onSubmit={handleCreateFolder} className="space-y-4">
              <input
                type="text"
                autoFocus
                required
                value={newFolderName}
                onChange={(e) => setNewFolderName(e.target.value)}
                placeholder="Nombre de la carpeta"
                className="w-full px-4 py-2.5 rounded-xl border border-[#374556]/20 text-sm text-[#434349] focus:outline-none focus:border-[#84AF25]"
              />
              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsNewFolderOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-[#434349]/75 hover:text-[#374556] cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={isCreatingFolder}
                  className="px-4 py-2 text-xs font-bold bg-[#84AF25] text-[#232930] rounded-lg shadow-sm hover:bg-[#374556] hover:text-white transition-colors cursor-pointer"
                >
                  {isCreatingFolder ? 'Creando...' : 'Crear carpeta'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MANDATORY USER CONFIRMATION MODAL FOR DESTRUCTIVE OPERATIONS */}
      {fileToDelete && (
        <div className="fixed inset-0 z-60 bg-[#374556]/65 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl text-left space-y-4 border border-rose-100">
            <div className="flex items-center gap-3 text-rose-600">
              <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5 text-rose-600" />
              </div>
              <h4 className="text-lg font-bold text-[#374556]">
                Confirmar eliminación
              </h4>
            </div>

            <p className="text-sm text-[#434349]/85 leading-relaxed">
              ¿Estás seguro de que deseas eliminar{' '}
              <strong className="text-[#374556]">"{fileToDelete.name}"</strong> de tu Google Drive? Esta acción moverá el elemento a la papelera.
            </p>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#374556]/10">
              <button
                type="button"
                onClick={() => setFileToDelete(null)}
                disabled={isDeleting}
                className="px-4 py-2 text-xs font-semibold text-[#434349]/75 hover:text-[#374556] transition-colors cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleConfirmDelete}
                disabled={isDeleting}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 rounded-lg shadow-sm transition-all cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>{isDeleting ? 'Eliminando...' : 'Eliminar de Drive'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
