import { ServiceItem, MethodologyStep, ArticleItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'consultoria',
    title: 'Consultoría',
    shortDesc: 'Estrategia y asesoría experta para tomar decisiones basadas en datos.',
    category: 'consulting',
    iconName: 'chart',
    fullDescription: 'Acompañamos a directores y equipos de marketing y tecnología a estructurar hojas de ruta basadas en datos. Evaluamos la madurez analítica de tu organización y diseñamos arquitecturas de decisión orientadas a maximizar el valor de vida del cliente (LTV) y la eficiencia del gasto publicitario.',
    technologies: ['Google Cloud', 'Vertex AI', 'GA4 Enterprise', 'Marketing Analytics Framework'],
    deliverables: [
      'Auditoría y diagnóstico de madurez de datos',
      'Definición de gobierno y taxonomía de analítica',
      'Diseño de KPIs de negocio y paneles de control ejecutivo',
      'Roadmap de transformación digital e inteligencia comercial'
    ],
    expectedImpact: '+35% en precisión de atribución y toma de decisiones comerciales informadas.'
  },
  {
    id: 'data',
    title: 'Data & Analytics',
    shortDesc: 'Soluciones de datos para descubrir oportunidades y optimizar resultados.',
    category: 'data',
    iconName: 'cloud',
    fullDescription: 'Transformamos flujos masivos de datos desestructurados en activos estratégicos de negocio. Implementamos arquitecturas modernas en Google Cloud (BigQuery, Dataproc, Looker Studio) con ingesta en tiempo real, modelado predictivo de propensión de compra y atribución omnicanal.',
    technologies: ['Google BigQuery', 'Looker Studio', 'Google Tag Manager Server-Side', 'dbt', 'SQL'],
    deliverables: [
      'Implementación robusta y server-side de Google Analytics 4',
      'Data Warehousing y pipelines ETL/ELT en BigQuery',
      'Modelos predictivos de Churn y Scoring de prospectos',
      'Dashboards interactivos automatizados en Looker Studio'
    ],
    expectedImpact: 'Centralización del 100% de fuentes de datos y reducción del 60% en tiempo de reportería.'
  },
  {
    id: 'marketing-digital',
    title: 'Marketing Digital',
    shortDesc: 'Estrategias digitales que conectan y convierten con alto retorno.',
    category: 'marketing',
    iconName: 'megaphone',
    fullDescription: 'Planificación, gestión y optimización de medios con enfoque riguroso de performance y retorno sobre la inversión publicitaria (ROAS). Combinamos algoritmos de puja inteligente, segmentaciones first-party data y pruebas A/B continuas para superar objetivos comerciales.',
    technologies: ['Google Ads', 'Display & Video 360 (DV360)', 'Search Ads 360 (SA360)', 'Meta Ads', 'TikTok Ads'],
    deliverables: [
      'Gestión integral de medios pagos en Google Marketing Platform',
      'Estrategias de audiencias con first-party data segura',
      'Campañas de Search, Performance Max, Display y Video',
      'Optimización continua de tasas de conversión (CRO)'
    ],
    expectedImpact: '+124% de crecimiento en volumen de conversiones y -28% en costo por adquisición (CPA).'
  },
  {
    id: 'marketing-contenido',
    title: 'Marketing de Contenido',
    shortDesc: 'Contenido relevante para atraer, educar y fidelizar a tu audiencia.',
    category: 'marketing',
    iconName: 'media',
    fullDescription: 'Generamos conexiones orgánicas duraderas entre marcas y consumidores. Mediante estrategias avanzadas de SEO técnico, marketing de contenidos basado en intención de búsqueda y automatización de lead nurturing, posicionamos a tu marca como líder en su industria.',
    technologies: ['SEO Técnico', 'HubSpot / Marketo', 'Search Console', 'Content Intelligence'],
    deliverables: [
      'Estrategia editorial alineada al embudo de compra',
      'Auditoría y optimización SEO on-page y técnico',
      'Lead magnets, whitepapers y casos de estudio especializados',
      'Flujos de automatización de email marketing y nutrición'
    ],
    expectedImpact: '+80% de incremento en tráfico orgánico calificado y mejora sustancial en retención.'
  },
  {
    id: 'tecnologia',
    title: 'Tecnología & Integración',
    shortDesc: 'Herramientas y tecnología de vanguardia para escalar operaciones.',
    category: 'tech',
    iconName: 'code',
    fullDescription: 'Desarrollamos soluciones técnicas e integraciones robustas que conectan ecosistemas publicitarios, CRMs, plataformas transaccionales y lagos de datos. Garantizamos privacidad de datos de primer nivel (consent mode v2) y velocidad óptima.',
    technologies: ['Google Cloud Run', 'Node.js / Python', 'REST APIs & Webhooks', 'Consent Mode v2', 'Docker'],
    deliverables: [
      'Implementación de Server-Side Tracking en infraestructura Cloud',
      'Integración bidireccional entre CRM (Salesforce, HubSpot) y plataformas adtech',
      'Desarrollo de conectores y microservicios a la medida',
      'Cumplimiento normativo y protocolos de consentimiento digital'
    ],
    expectedImpact: 'Infraestructura resiliente de medición sin pérdida de señales ante el bloqueo de cookies.'
  },
  {
    id: 'creatividad-desarrollo',
    title: 'Creatividad y Desarrollo',
    shortDesc: 'Ideas innovadoras y desarrollo digital que hacen crecer tu marca.',
    category: 'tech',
    iconName: 'lightbulb',
    fullDescription: 'Fusionamos diseño centrado en el usuario, neurodiseño aplicado a la persuasión digital e ingeniería frontend ultrarrápida. Creamos interfaces digitales, landing pages de alta conversión y experiencias interactivas que cautivan y convierten.',
    technologies: ['React / Next.js', 'Tailwind CSS', 'Figma', 'A/B Testing Tools', 'Web Vitals Optimization'],
    deliverables: [
      'Diseño y desarrollo de landing pages de alta conversión',
      'Pruebas multivariables y optimización continua de experiencia (CRO)',
      'Identidad visual aplicada a formatos digitales y rich media',
      'Auditoría de usabilidad y Core Web Vitals'
    ],
    expectedImpact: '+42% en tasa de conversión promedio de páginas de destino.'
  }
];

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    stepNumber: 1,
    title: 'Diagnóstico',
    summary: 'Analizamos tu negocio, tus datos y tus objetivos.',
    details: 'Realizamos una inmersión profunda en tu ecosistema actual: auditoría de calidad de datos, evaluación de tracking analítico, análisis de competencia y entrevistas estratégicas con los stakeholders clave de tu empresa.',
    duration: 'Semanas 1 - 2',
    deliverables: [
      'Informe de madurez de datos y brechas técnicas',
      'Diagnóstico de discrepancias en tracking y analítica',
      'Matriz de oportunidades de alto impacto inmediato'
    ],
    iconName: 'search'
  },
  {
    stepNumber: 2,
    title: 'Plan Estratégico',
    summary: 'Diseñamos una estrategia personalizada.',
    details: 'Traducimos los insights del diagnóstico en una hoja de ruta accionable: definición de KPIs troncales, arquitectura de soluciones Google Cloud / GMP y cronograma de despliegue por fases priorizadas por valor comercial.',
    duration: 'Semanas 3 - 4',
    deliverables: [
      'Roadmap estratégico a 6 y 12 meses',
      'Blueprint de arquitectura tecnológica y flujos de datos',
      'Plan de medios, audiencias y experimentación'
    ],
    iconName: 'calendar'
  },
  {
    stepNumber: 3,
    title: 'Ejecución',
    summary: 'Implementamos con foco en resultados.',
    details: 'Nuestro equipo multidisciplinario despliega las configuraciones técnicas, pipelines de datos en Cloud, campañas de performance y desarrollos creativos con metodologías ágiles y sprints quincenales de entrega continua.',
    duration: 'Meses 2 - 6 en adelante',
    deliverables: [
      'Puesta en marcha de Google Analytics 4 y BigQuery',
      'Activación de campañas publicitarias multicanal',
      'Despliegue de dashboards de visualización en vivo'
    ],
    iconName: 'rocket'
  },
  {
    stepNumber: 4,
    title: 'Optimización',
    summary: 'Medimos, aprendemos y optimizamos continuamente.',
    details: 'El marketing y los datos nunca son estáticos. Monitoreamos en tiempo real, corremos pruebas A/B de mensajes y pujas, y refinamos los modelos analíticos para multiplicar progresivamente el retorno de la inversión.',
    duration: 'Ciclos continuos de mejora',
    deliverables: [
      'Sesiones ejecutivas mensuales de revisión de impacto',
      'Reportes de atribución y eficiencia presupuestaria',
      'Propuestas proactivas de innovación y nuevos tests'
    ],
    iconName: 'trending'
  }
];

export const ARTICLES_DATA: ArticleItem[] = [
  {
    id: 'google-cloud-herramientas',
    date: '10 Nov 2026',
    readTime: '5 min de lectura',
    category: 'Analítica',
    title: 'Google Cloud: nuevas herramientas para potenciar tu estrategia digital',
    excerpt: 'Descubre cómo la integración nativa entre BigQuery, Vertex AI y Google Marketing Platform está redefiniendo la toma de decisiones para los líderes de marketing en Latinoamérica.',
    tags: ['Google Cloud', 'BigQuery', 'Analítica Predictiva', 'Vertex AI'],
    imagePlaceholderGradient: 'from-blue-900 via-indigo-900 to-cyan-900',
    author: {
      name: 'Equipo de Consultoría Cloud',
      role: 'Mentalidad Web'
    },
    content: [
      'La fragmentación de datos sigue siendo uno de los mayores dolores de cabeza para los directores de marketing y tecnología en la región. Las herramientas tradicionales de analítica operan en silos, generando discrepancias que retrasan decisiones clave.',
      'Con la reciente evolución del ecosistema de Google Cloud, empresas líderes en Chile y Latinoamérica están unificando el first-party data de su CRM, canales transaccionales y comportamiento web directamente en Google BigQuery.',
      'Al conectar BigQuery con Vertex AI, no solo medimos lo que ocurrió en el pasado: anticipamos la propensión de compra futura de cada segmento de usuarios, exportando audiencias inteligentes en tiempo real a Google Ads y Display & Video 360.',
      'En Mentalidad Web hemos visto incrementos de hasta un 45% en la eficiencia de inversión en clientes que pasaron de una analítica reactiva a una arquitectura predictiva en la nube.'
    ]
  },
  {
    id: 'floodlight-medicion-optimizacion',
    date: '02 Nov 2026',
    readTime: '4 min de lectura',
    category: 'Marketing Digital',
    title: 'Floodlight: mide mejor, optimiza más tus campañas',
    excerpt: 'El sistema de etiquetas de conversión de Google Marketing Platform permite desduplicar conversiones y activar pujas avanzadas de valor en Search Ads 360 y DV360.',
    tags: ['GMP', 'Floodlight', 'Atribución', 'DV360', 'SA360'],
    imagePlaceholderGradient: 'from-indigo-950 via-blue-900 to-sky-950',
    author: {
      name: 'Especialistas GMP',
      role: 'Mentalidad Web'
    },
    content: [
      'En un entorno digital sin cookies de terceros, la precisión en la medición de conversiones es la ventaja competitiva definitiva. Las etiquetas Floodlight forman la columna vertebral del stack Google Marketing Platform.',
      'A diferencia de los píxeles convencionales, Floodlight permite una atribución multicanal desduplicada entre Search Ads 360 y Display & Video 360, evitando que múltiples canales se atribuyan la misma venta.',
      'Además, la implementación de variables personalizadas (u-variables) en Floodlight permite alimentar los algoritmos de Smart Bidding con variables de negocio reales: margen de contribución, tipo de cliente (nuevo vs recurrente) o método de pago.',
      'La correcta implementación técnica garantiza que cada peso invertido en medios se optimice con base en valor real de negocio y no solo en métricas de vanidad.'
    ]
  },
  {
    id: 'automatizacion-datos-eficiencia',
    date: '28 Oct 2026',
    readTime: '6 min de lectura',
    category: 'Tecnología',
    title: 'Automatización de datos: más eficiencia para tu negocio',
    excerpt: 'Automatizar la ingesta, limpieza y sincronización de datos reduce horas de trabajo manual y elimina errores humanos en la toma de decisiones ejecutivas.',
    tags: ['Automatización', 'Pipelines', 'ETL', 'Eficiencia Operacional'],
    imagePlaceholderGradient: 'from-slate-900 via-blue-950 to-indigo-900',
    author: {
      name: 'Área de Ingeniería y Datos',
      role: 'Mentalidad Web'
    },
    content: [
      'Muchas empresas aún destinan decenas de horas semanales de sus mejores analistas a descargar archivos CSV, cruzarlos en hojas de cálculo y corregir desfases de fecha manualmente.',
      'La automatización moderna de datos permite crear pipelines robustos que extraen información de plataformas publicitarias, pasarelas de pago y CRMs de forma desatendida, transformando y validando los datos en cuestión de segundos.',
      'Esto no solo erradica los errores humanos en reportes ejecutivos: libera tiempo de alto valor para que los equipos se dediquen al pensamiento estratégico y la experimentación de crecimiento.',
      'El resultado: decisiones informadas que se toman en minutos en lugar de semanas, generando una agilidad comercial sin precedentes.'
    ]
  }
];

export const CLIENT_LOGOS = [
  { name: 'Google', label: 'Google Cloud & GMP Premier Partner' },
  { name: 'Bci', label: 'Banco de Crédito e Inversiones' },
  { name: 'Samsung', label: 'Líder en Tecnología y Electrónica' },
  { name: 'ALEF', label: 'Better Results Partner' },
  { name: 'BancoEstado', label: 'Institución Financiera Líder' },
  { name: 'Falabella', label: 'Retail & E-commerce Regional' },
  { name: 'LATAM', label: 'Aerolíneas Líderes en Sudamérica' }
];

export const TRUST_METRICS = [
  {
    value: 'Top 3%',
    label: 'Agencias digitales en Chile',
    description: 'Reconocidos por Google entre el selecto porcentaje de partners con máxima certificación técnica.',
    icon: 'trophy'
  },
  {
    value: '100%',
    label: 'Compromiso con tus objetivos',
    description: 'Acompañamiento senior dedicado con SLAs claros de respuesta y rendición transparente.',
    icon: 'users'
  },
  {
    value: '+40%',
    label: 'Crecimiento promedio en campañas',
    description: 'Incremento medido en volumen de conversiones y eficiencia presupuestaria comprobada.',
    icon: 'trending'
  },
  {
    value: 'Único',
    label: 'Partner estratégico integral',
    description: 'La única agencia con dominio conjunto en Google Cloud Data Architecture y Google Marketing Platform.',
    icon: 'star'
  }
];
