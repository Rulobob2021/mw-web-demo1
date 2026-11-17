export interface DriveFile {
  id: string;
  name: string;
  mimeType: string;
  iconLink?: string;
  webViewLink?: string;
  thumbnailLink?: string;
  size?: string;
  createdTime?: string;
  modifiedTime?: string;
  owners?: Array<{ displayName: string; emailAddress: string; photoLink?: string }>;
  shared?: boolean;
}

export interface DriveQuota {
  limit?: string;
  usage?: string;
  usageInDrive?: string;
  usageInDriveTrash?: string;
}

const DRIVE_API_BASE = 'https://www.googleapis.com/drive/v3';

export async function listDriveFiles(
  accessToken: string,
  options: {
    folderId?: string;
    searchTerm?: string;
    mimeTypeFilter?: string;
    pageSize?: number;
  } = {}
): Promise<{ files: DriveFile[]; nextPageToken?: string }> {
  const { folderId = 'root', searchTerm, mimeTypeFilter, pageSize = 30 } = options;

  let query = "trashed = false";

  if (folderId && folderId !== 'all') {
    query += ` and '${folderId}' in parents`;
  }

  if (searchTerm && searchTerm.trim()) {
    query += ` and name contains '${searchTerm.replace(/'/g, "\\'")}'`;
  }

  if (mimeTypeFilter && mimeTypeFilter !== 'all') {
    if (mimeTypeFilter === 'folder') {
      query += " and mimeType = 'application/vnd.google-apps.folder'";
    } else if (mimeTypeFilter === 'spreadsheet') {
      query += " and (mimeType = 'application/vnd.google-apps.spreadsheet' or mimeType contains 'sheet' or mimeType contains 'csv')";
    } else if (mimeTypeFilter === 'document') {
      query += " and (mimeType = 'application/vnd.google-apps.document' or mimeType contains 'document' or mimeType contains 'pdf')";
    } else if (mimeTypeFilter === 'presentation') {
      query += " and (mimeType = 'application/vnd.google-apps.presentation' or mimeType contains 'presentation')";
    } else if (mimeTypeFilter === 'image') {
      query += " and mimeType contains 'image/'";
    }
  }

  const params = new URLSearchParams({
    q: query,
    pageSize: pageSize.toString(),
    fields: 'nextPageToken, files(id, name, mimeType, iconLink, webViewLink, thumbnailLink, size, createdTime, modifiedTime, owners, shared)',
    orderBy: 'folder,modifiedTime desc',
  });

  const response = await fetch(`${DRIVE_API_BASE}/files?${params.toString()}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.error?.message || `Error al obtener archivos de Drive: ${response.statusText}`
    );
  }

  return response.json();
}

export async function createDriveFolder(
  accessToken: string,
  folderName: string,
  parentId = 'root'
): Promise<DriveFile> {
  const metadata = {
    name: folderName,
    mimeType: 'application/vnd.google-apps.folder',
    parents: parentId && parentId !== 'root' ? [parentId] : undefined,
  };

  const response = await fetch(`${DRIVE_API_BASE}/files`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(metadata),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error?.message || 'Error al crear la carpeta en Google Drive');
  }

  return response.json();
}

export async function uploadDriveFile(
  accessToken: string,
  file: File,
  parentId = 'root'
): Promise<DriveFile> {
  const metadata = {
    name: file.name,
    mimeType: file.type || 'application/octet-stream',
    parents: parentId && parentId !== 'root' ? [parentId] : undefined,
  };

  const form = new FormData();
  form.append(
    'metadata',
    new Blob([JSON.stringify(metadata)], { type: 'application/json' })
  );
  form.append('file', file);

  const response = await fetch(
    'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name,mimeType,webViewLink,size,modifiedTime',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: form,
    }
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error?.message || 'Error al subir archivo a Google Drive');
  }

  return response.json();
}

export async function deleteDriveFile(
  accessToken: string,
  fileId: string
): Promise<void> {
  const response = await fetch(`${DRIVE_API_BASE}/files/${fileId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok && response.status !== 204) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error?.message || 'Error al eliminar el archivo en Google Drive');
  }
}

export async function getDriveStorageQuota(
  accessToken: string
): Promise<DriveQuota | null> {
  try {
    const response = await fetch(`${DRIVE_API_BASE}/about?fields=storageQuota`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) return null;
    const data = await response.json();
    return data.storageQuota || null;
  } catch {
    return null;
  }
}
