export default {
  global: {
    componenteFormativo: 'Investigación de accidentes de tránsito',
    descripcionCurso:
      'El presente componente formativo aborda conceptos y prácticas para la caracterización de los accidentes de tránsito. Con el estudio de este componente, el aprendiz podrá conocer y realizar los procedimientos y actuaciones que se derivan de la atención de siniestros viales, de acuerdo con la normatividad colombiana y con los protocolos de policía judicial, establecidos para tal fin.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
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
        titulo: 'Generalidades del accidente de tránsito',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Marco jurídico del accidente de tránsito',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Autoridades e intervinientes',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Clasificación de los accidentes de tránsito',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Accidente de tránsito con heridos y muertos',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Métodos de búsqueda',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Actuaciones de policía judicial en accidentes de tránsito',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Procedimientos judiciales en accidentes de tránsito',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Actuaciones del coordinador',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Actuaciones del fotógrafo judicial',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Actuaciones del topógrafo judicial',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'El informe policial de accidentes de tránsito IPAT',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
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
        download: 'downloads/638100_CF01_DU.pdf',
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
  referencias: [
    {
      referencia:
        'Ley 769 de 2002. Por la cual se expide el Código Nacional de Tránsito Terrestre y se dictan otras disposiciones.  Diario Oficial 44.893 de Agosto 07 de 2002.',
      link:
        'https://www.movilidadbogota.gov.co/web/sites/default/files/ley-769-de-2002-codigo-nacional-de-transito_3704_0.pdf',
    },
    {
      referencia:
        'Ley 906 de 2004. Código de Procedimiento Penal. Diario Oficial número 45.657 del 31 de agosto de 2004.',
      link:
        'https://perso.unifr.ch/derechopenal/assets/files/legislacion/l_20190708_03.pdf',
    },
    {
      referencia:
        'Ley 1503 de 2011. Por la cual se promueve la formación de hábitos, comportamientos y conductas seguros en la vía y se dictan otras disposiciones. Diario Oficial No. 48.298 de 30 de diciembre de 2011. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1503_2011.html',
    },
    {
      referencia:
        'Decreto 1079 de 2015. [Ministerio de transporte].  Por medio del cual se expide el Decreto Único Reglamentario del Sector Transporte. 26 de mayo de 2015.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77889#:~:text=Tiene%20por%20objeto%20la%20ejecución,por%20el%20Ministerio%20de%20Transporte',
    },
    {
      referencia:
        'Instituto Nacional de Medicina Legal y Ciencias Forenses. (2022). Boletines Estadísticos Mensuales.',
      link:
        'https://www.medicinalegal.gov.co/cifras-estadisticas/boletines-estadisticos-mensuales',
    },
    {
      referencia:
        'Limpert, R. (1999). Motor Vehicle Accident Reconstruction and Cause Analysis. Lexis Publishing.',
    },
    {
      referencia:
        'Resolución 0011268 de 2012. [Ministerio de Transporte]. . Por la cual se adopta el nuevo informe policial de accidentes de tránsito (IPAT), su Manual de diligenciamiento y se dictan otras disposiciones. 06 de Diciembre de 2012. ',
    },
    {
      referencia:
        'Ramos Enriquez, H., & Quiroga Amaya, L. (2017). Investigación de Accidentes de Tránsito en Colombia. Imprenta Nacional.',
      link:
        'https://www.policia.gov.co/contenido/investigacion-accidentes-transito-colombia',
    },
    {
      referencia:
        'Rivani , B., Brougham, D., & Mason, R. (1981). Pedestrian PostImpact Kinematics and Injury Patterns. SAE Technical Paper 811024, 42.',
    },
  ],
  glosario: [
    {
      termino: 'Accidente de tránsito',
      significado:
        'Evento generalmente involuntario, generado al menos por un vehículo en movimiento, que causa daños a personas y bienes involucrados en él e igualmente afecta la normal circulación de los vehículos que se movilizan por la vía o vías comprendidas en el lugar o dentro de la zona de influencia del hecho.',
    },
    {
      termino: 'Acompañante',
      significado:
        'Persona que viaja con el conductor de un vehículo automotor.',
    },
    {
      termino: 'Croquis',
      significado:
        'Plano descriptivo de los pormenores de un accidente de tránsito donde resulten daños a personas, vehículos, inmuebles, muebles o animales, levantados en el sitio de los hechos por el agente, la policía de tránsito o por la autoridad competente.',
    },
    {
      termino: 'Tránsito',
      significado:
        'Es la movilización de personas, animales o vehículos por una vía pública o privada abierta al público.',
    },
    {
      termino: 'Transporte',
      significado:
        'Es el traslado de personas, animales o cosas de un punto a otro a través de un medio físico.',
    },
    {
      termino: 'Vehículo',
      significado:
        'Todo aparato montado sobre ruedas que permite el transporte de personas, animales o cosas de un punto a otro por vía terrestre pública o privada abierta al público.',
    },
    {
      termino: 'Vía',
      significado:
        'Zona de uso público o privado, abierta al público, destinada al tránsito de vehículos, personas y animales.',
    },
  ],
  complementario: [
    {
      tema: 'Investigación de accidentes de tránsito ',
      referencia:
        'Ramos Enriquez, H. F., & Quiroga Amaya, L. A. (2017). <em>Investigación de Accidentes de Tránsito en Colombia</em>. Bogotá: Imprenta Nacional.',
      tipo: 'Libro',
      link:
        'downloads/libro-investigacion-accidentes-de-transito-en-colombia.pdf',
    },
    {
      tema: 'Normatividad de los accidentes de tránsito',
      referencia:
        'Congreso de la República. (13 de Septiembre de 2002). Ley 769 de 2002. Código Nacional de Tránsito. Bogotá, Bogotá DC, Colombia: Secretaria del Senado.',
      tipo: 'Ley',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0769_2002.html#1',
    },
    {
      tema: 'Procedimiento de cadena de custodia',
      referencia:
        'Fiscalía General de la Nación. (abril 18 de 2018). Manual del sistema de cadena de custodia. <em>Manual de cadena de custodia</em>. Bogotá , Colombia: Imprenta Nacional.',
      tipo: 'Manual',
      link: 'downloads/manual-del-sistema-de-cadena-de-custodia.pdf',
    },
    {
      tema: 'Diligenciamiento del IPAT',
      referencia:
        'Ministerio de Transporte. (06 de Diciembre de 2012). Resolución 0011268 de 2012. <em>Por la cual se adopta el nuevo informe policial de accidentes de tránsito (IPAT), su Manual de diligenciamiento y se dictan otras disposiciones</em>. Bogotá, Bogotá DC., Colombia: Imprenta Nacional.',
      tipo: 'Manual',
      link:
        'https://www.redjurista.com/Documents/resolucion_11268_de_2012_ministerio_de_transporte.aspx#/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Hoover Fabián Ramos Enríquez',
          cargo: 'Experto Temático',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander ',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador Instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander ',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Centro de Diseño y Metrología  - Regional Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrección de Estilo',
          centro: 'Centro de Diseño y Metrología  - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e Ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
