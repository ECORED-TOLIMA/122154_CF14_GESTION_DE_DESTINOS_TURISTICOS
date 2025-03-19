export default {
  global: {
    Name: 'Control y seguimiento del proyecto turístico',
    Description:
      'El éxito de un proyecto turístico, se basa en una correcta planeación, así como en la implementación de actividades de control y seguimiento al mismo. Los proyectos turísticos son sostenibles en la medida en que se apliquen controles regulares de supervisión, de posibles fallas y acciones de mejora, de informes periódicos que garanticen a las regiones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Control y seguimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Procedimiento',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Herramientas',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión de actividades del proyecto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Etapas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Habilidades',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Ciclo de vida de la gestión',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Control presupuestal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Herramientas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tablero de control (<em>Dashboard</em>)',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Procedimiento de elaboración',
            hash: 't_3_3',
          },
        ],
      },

      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Acciones de mejora',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Pasos a seguir para la elaboración del plan de mejoras',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Informes',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.2. Herramientas',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2024). Importancia de los diagramas de causa, efecto y diagrama de decisión.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=MXVT057ix3Y',
    },
    {
      tema: '2. Gestión de actividades del proyecto',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2023). Ejemplo matriz de priorización.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=npTMvq02U0w',
    },
    {
      tema: '4. Acciones de mejora',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2022). Actividades del plan de mejora.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=GfYF3i9EnYA',
    },
    {
      tema: '4.2. Informes',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2024). Recolección de información y elaboración de informes.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=0QVl2gwmcf0',
    },
  ],
  glosario: [
    {
      termino: 'Actores del turismo',
      significado:
        'las personas, organizaciones y entidades que desempeñan un papel en la industria del turismo, interactuando y colaborando para ofrecer experiencias turísticas. Cada uno de estos actores juega un papel crucial en la dinámica del turismo, y su interacción determina el éxito y la sostenibilidad de la industria.',
    },
    {
      termino: 'Auditoría de costos',
      significado:
        'revisión sistemática de los gastos de un proyecto para verificar que se ajusten al presupuesto y las políticas establecidas.',
    },
    {
      termino: 'Capacidad de carga turística',
      significado:
        'límite máximo de personas que pueden visitar un destino, sin que se produzcan efectos negativos en el entorno, la comunidad local o la experiencia del visitante.',
    },
    {
      termino: 'Estructura de Desglose del Trabajo (EDT)',
      significado:
        'descomposición jerárquica del trabajo del proyecto en elementos más pequeños y manejables.',
    },
    {
      termino: 'Gestión del valor ganado (EVM)',
      significado:
        'metodología que mide el desempeño de un proyecto en términos de costo y cronograma, utilizando indicadores clave como el CPI (Índice de Desempeño del Costo) y el SPI (Índice de Desempeño del Cronograma).',
    },
    {
      termino: 'Indicadores de sostenibilidad turística',
      significado:
        'métricas para medir el impacto ambiental, social y económico del proyecto turístico, como la reducción de residuos o el empleo local generado.',
    },
    {
      termino: 'Índice de Desempeño del Costo (IPC)',
      significado:
        'métrica que evalúa la eficiencia del gasto en el proyecto. Se calcula dividiendo el valor ganado (EV) por el costo real (AC).',
    },
    {
      termino: 'Índice de Desempeño del Cronograma (SPI)',
      significado:
        'métrica que mide el progreso del cronograma del proyecto en relación con lo planificado.',
    },
    {
      termino: 'Método de la Ruta Crítica (CPM)',
      significado:
        'técnica para determinar las actividades críticas de un proyecto, aquellas que no tienen holgura y afectan directamente la duración total del proyecto.',
    },
    {
      termino: 'Producto turístico',
      significado:
        'combinación de servicios, experiencias y recursos diseñados para satisfacer las necesidades de los turistas. Ejemplo: paquetes turísticos, recorridos guiados o experiencias culturales.',
    },
    {
      termino: 'Proyecto turístico',
      significado:
        'proceso de evaluación que busca analizar y comprender las características, recursos y condiciones de un destino turístico. Su objetivo es identificar tanto las fortalezas como las debilidades del lugar, así como las oportunidades y amenazas que pueden influir en su desarrollo turístico.',
    },
    {
      termino: 'Ruta crítica',
      significado:
        'conjunto de actividades esenciales en el cronograma de un proyecto turístico, que determina la duración total del mismo.',
    },
    {
      termino: 'Sostenibilidad cultural',
      significado:
        'estrategias para preservar y promover las tradiciones, costumbres y valores de la comunidad local en proyectos turísticos.',
    },
    {
      termino: 'Turismo responsable',
      significado:
        'modelo de desarrollo turístico que minimiza los impactos negativos y maximiza los beneficios para el entorno y la comunidad local.',
    },
    {
      termino: 'Valor Ganado (EV)',
      significado:
        'métrica que mide cuánto trabajo se ha completado en relación con el presupuesto planeado para ese punto en el tiempo.',
    },
    {
      termino: 'Variación del Costo (CV)',
      significado:
        'diferencia entre el valor ganado (EV) y el costo real (AC), que indica si el proyecto está por encima o por debajo del presupuesto.',
    },
    {
      termino: 'Variación del Cronograma (SV)',
      significado:
        'diferencia entre el valor ganado (EV) y el valor planificado (PV), que muestra si el proyecto está adelantado o retrasado respecto al cronograma.',
    },
  ],
  referencias: [
    {
      referencia:
        'Agencia Nacional de Evaluación de la Calidad y Acreditación (ANECA). (2021). Guía para la elaboración de un Plan de Mejoras.',
      link:
        'https://www.unirioja.es/servicios/opp/acr/doc/GPlanMejoraD-v1.0-2021-02.pdf',
    },
    {
      referencia:
        'Boullón, R. (1996). Proyectos turísticos: identificación, localización y dimensionamiento. Editorial Diana.',
      link: '',
    },
    {
      referencia:
        'Cárdenas Tabares, F. (2006). Proyectos turísticos: localización e inversión. Editorial Trillas.',
      link: '',
    },
    {
      referencia:
        'Casanueva Rocha, C., García del Junco, J. y Caro, F.J. (2000): Organización y Gestión de Empresas Turísticas. Editorial Pirámide.',
      link: '',
    },
    {
      referencia:
        'Hernández Díaz, E. A. (2012). Proyectos turísticos: Formulación y evaluación (2ª ed.). Editorial Trillas.',
      link: '',
    },
    {
      referencia:
        'Lukas, J. A. (2012). Cómo hacer que el valor ganado funcione en su proyecto. Documento presentado en el Congreso Global PMI® 2012—Norteamérica, Vancouver, Columbia Británica, Canadá. Newtown Square, PA: Project Management Institute.',
      link:
        'https://www.pmi.org/learning/library/make-earned-value-work-project-6001',
    },
    {
      referencia:
        'Instituto de Gestión de Proyectos. ¿Cuáles son las mejores prácticas de gestión del valor ganado? PMI.',
      link: '',
    },
    {
      referencia:
        'Project Management Institute. (2021). Guía de los fundamentos de la dirección de proyectos (Guía del PMBOK®) (7.ª ed.). Project Management Institute.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Dora Inés Sánchez Escobar',
          cargo: 'Experta temática',
          centro: 'Centro Comercio y Servicios - Regional Risaralda',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
