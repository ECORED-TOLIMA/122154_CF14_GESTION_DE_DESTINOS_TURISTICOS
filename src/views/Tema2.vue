<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Gestión de actividades del proyecto
    p(data-aos="fade-right") Se enfoca en identificar, planificar, ejecutar, monitorear y controlar las tareas específicas necesarias para cumplir con los objetivos del proyecto. Esto incluye:
  

    .row
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
        .tarjeta--boton.tarjeta--boton-1.color-primario.tarjeta--BG02-1.p-4.h-100
          .row.justify-content-center
            .col-12
              p.posic Definir las actividades a realizar.
              

      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
        .tarjeta--boton.tarjeta--boton-2.color-primario.tarjeta--BG02-2.p-4.h-100
          .row.justify-content-center
            .col-12
              p.posic Organizarlas de manera lógica.
              

      .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="zoom-in")
        .tarjeta--boton.tarjeta--boton-3.color-primario.tarjeta--BG02-3.p-4.h-100
          .row.justify-content-center
            .col-12
              p.posic Estimar los recursos y la duración requerida.

      .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="zoom-in")
        .tarjeta--boton.tarjeta--boton-4.color-primario.tarjeta--BG02-4.p-4.h-100
          .row.justify-content-center
            .col-12
              p.posic Desarrollar el cronograma y supervisar su cumplimiento.

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1	Etapas
    p(data-aos="fade-right") Es importante conocer las siguientes etapas que se desarrollan en el proceso de gestión de actividades del proyecto; se debe tener en cuenta que cada una cuenta con su propio esquema representativo.
    
    .tarjeta.tarjeta--BG01.p-4.mb-4
      SlyderA(tipo="b" data-aos="zoom-in")
        .row.justify-content-center
          .col-lg-4.order-lg-1.order-2
            h4  Definir las actividades 
            p.mb-0 Para esta etapa es necesario descomponer los entregables del proyecto en tareas específicas, claras y medibles. Se puede hacer uso de un EDT (Estructura de Desglose del Trabajo), como base para identificar todas las actividades requeridas.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4.desktop
            img(src='@/assets/curso/temas/tema2/img5.svg' alt="Esquema que representa el EDT (Estructura de Desglose del Trabajo), el cual parte de un objetivo del proyecto, para luego dar paso a sus respectivos componentes y en dichos, los productos, entregables y paquetes de trabajo.")
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.movil.mb-4
            img(src='@/assets/curso/temas/tema2/img5_1.svg' alt="Esquema que representa el EDT (Estructura de Desglose del Trabajo), el cual parte de un objetivo del proyecto, para luego dar paso a sus respectivos componentes y en dichos, los productos, entregables y paquetes de trabajo.")
        .row.justify-content-center
          .col-lg-4.order-lg-1.order-2
            h4  Organizar las actividades
            p.mb-0 Determinar el orden lógico de las tareas considerando dependencias (actividades sucesoras que no pueden comenzar hasta que termine la predecesora). Utilizar herramientas como diagramas de red o el método de diagrama de precedencia (PDM).
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.desktop.mb-4
            img(src='@/assets/curso/temas/tema2/img6.svg' alt="Esquema que hace mención al método de diagrama PDM (Método de diagrama de procedencia), el cual tiene un inicio y sus diferentes actividades, antes de llegar a su fin.")
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.movil.mb-4
            img(src='@/assets/curso/temas/tema2/img6_1.svg' alt="Esquema que hace mención al método de diagrama PDM (Método de diagrama de procedencia), el cual tiene un inicio y sus diferentes actividades, antes de llegar a su fin.")
        .row.justify-content-center
          .col-lg-4.order-lg-1.order-2
            h4  Estimar los recursos de las actividades
            p.mb-0 Identificar los recursos (humanos, materiales, equipo, etc.), necesarios para completar cada tarea. Analizar la disponibilidad y asignar los recursos adecuados.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.desktop.mb-4
            img(src='@/assets/curso/temas/tema2/img7.svg' alt="Esquema que ejemplifica los tipos de recursos en las actividades y los aspectos que los representan; como por ejemplo, los directores y operarios en los humanos, los edificios y máquina en los materiales, el capital y la inversión en los financieros, así como la dirección y control en los administrativos.")
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.movil.mb-4
            img(src='@/assets/curso/temas/tema2/img7_1.svg' alt="Esquema que ejemplifica los tipos de recursos en las actividades y los aspectos que los representan; como por ejemplo, los directores y operarios en los humanos, los edificios y máquina en los materiales, el capital y la inversión en los financieros, así como la dirección y control en los administrativos.")
        .row.justify-content-center
          .col-lg-4.order-lg-1.order-2
            h4  Estimar la duración de las actividades
            p.mb-0 Evaluar cuánto tiempo tomará completar cada actividad considerando los recursos asignados y sus restricciones. Aplicar métodos como estimaciones análogas, paramétricas o basadas en tres valores (PERT).
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.desktop.mb-4
            img(src='@/assets/curso/temas/tema2/img8.svg' alt="Esquema que representa al diagrama PERT (Program Evaluation Review Technique), el cual parte de un inicio como todo proceso y luego incluye las diferentes tareas con su duración, antes de llegar a su fin.") 
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.movil.mb-4
            img(src='@/assets/curso/temas/tema2/img8_1.svg' alt="Esquema que representa al diagrama PERT (Program Evaluation Review Technique), el cual parte de un inicio como todo proceso y luego incluye las diferentes tareas con su duración, antes de llegar a su fin.") 
        .row.justify-content-center
          .col-lg-4.order-lg-1.order-2
            h4  Desarrollar el cronograma
            p.mb-0 Integrar las actividades, sus secuencias, recursos y duraciones en un cronograma detallado. Utilizar técnicas como el Método de la Ruta Crítica (CPM) o líneas base del cronograma para establecer el plan de desarrollo.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.desktop.mb-4
            img(src='@/assets/curso/temas/tema2/img9.svg' alt="Esquema que representa el método CPM (Método de Ruta Crítica), el cual por medio de líneas base establece el cronograma del pan de desarrollo, a través de diferentes actividades que tienen una duración.") 
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.movil.mb-4
            img(src='@/assets/curso/temas/tema2/img9_1.svg' alt="Esquema que representa el método CPM (Método de Ruta Crítica), el cual por medio de líneas base establece el cronograma del pan de desarrollo, a través de diferentes actividades que tienen una duración.") 
    
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2	Habilidades
    p(data-aos="fade-right") A continuación, se describen las habilidades más destacadas dentro del proceso de la gestión de actividades del proyecto:  
    .tarjeta--BG06
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10(data-aos="zoom-in")
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Conocimientos técnicos")
              .col-md-12.mb-md-0
                p Comprensión y manejo de herramientas y técnicas de gestión de proyectos como la EDT (Estructura de Desglose del Trabajo), el método de la ruta crítica (CPM) o el método de valor ganado (EVM). Además de habilidad para analizar datos y generar informes sobre el avance del proyecto.
                figure
                  img(src='@/assets/curso/temas/tema2/img10.svg', alt="Imagen decorativa")
            .row(titulo="Habilidades de comunicación")
              .col-md-12.mb-md-0
                p Capacidad para transmitir información clara y precisa a los miembros del equipo y a los interesados. Habilidad para coordinar tareas entre equipos o áreas con diferentes prioridades y objetivos.
                  figure
                    img(src='@/assets/curso/temas/tema2/img11.png', alt="Imagen decorativa")
            .row(titulo="Gestión de recursos")
              .col-md-12.mb-md-0
                p Capacidad para identificar, asignar y optimizar el uso de recursos (humanos, materiales y financieros). Supervisión para asegurar que los recursos estén disponibles y sean utilizados de manera eficiente.
                  figure
                    img(src='@/assets/curso/temas/tema2/img12.png', alt="Imagen decorativa")
    
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3	Ciclo de vida de la gestión

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Abarca las etapas necesarias para planificar, ejecutar y controlar las tareas que conforman un proyecto. Estas etapas aseguran que las actividades sean gestionadas de manera estructurada, eficiente y alineada con los objetivos del proyecto. Este ciclo, contiene las siguientes etapas con sus respectivas acciones a realizar: 
        LineaTiempoD.color-acento-botones.mb-4
          p.text-normal(numero="1" titulo="Iniciación") Identificar los objetivos generales del proyecto y establecer un marco básico para definir las actividades necesarias (determinar los entregables principales, identificar las actividades de alto nivel necesarias para cumplir los objetivos, establecer roles y responsabilidades iniciales).
          p.text-normal(numero="2" titulo="Planificación") Define con detalle todas las actividades, su secuencia, duración, recursos requeridos y restricciones. Las acciones claves incluyen crear la lista de actividades, a partir de la EDT (Estructura de Desglose del Trabajo), secuenciar las actividades considerando las dependencias, estimar la duración de cada actividad y asignar recursos, desarrollar el cronograma del proyecto y establecer líneas base de tiempo y recursos para el monitoreo.
          p.text-normal(numero="3" titulo="Ejecución") Realizar las actividades planificadas siguiendo el cronograma y los estándares definidos (coordinar y asignar recursos a las actividades, comunicar las tareas a los responsables, supervisar la ejecución en tiempo real y resolver problemas o conflictos relacionados con las actividades).
          p.text-normal(numero="4" titulo="Monitoreo") Asegurar que las actividades se completen según lo planeado y ajustar según sea necesario para mantener el proyecto alineado (supervisar el progreso de las actividades respecto al cronograma, identificar desviaciones en tiempo, recursos o calidad, implementar medidas correctivas o preventivas, revisar dependencias y ajustar el cronograma si es necesario).
          p.text-normal(numero="5" titulo="Cierre") Formalizar la finalización de las actividades y verificar que se han cumplido los objetivos (verificar que todas las actividades hayan sido completadas y aprobadas, documentar lecciones aprendidas sobre la gestión de actividades, archivar el cronograma y los registros de las actividades).
            
      .col-lg-4.col-8.mb-lg-0.order-lg-2.order-1.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img13.png', alt="Imagen decorativa")
    .row.justify-content-center.align-items-center
      .col-lg-10.bg-1
        .row.justify-content-center.align-items-center.p-4
          .col-lg-2.col-4.mb-lg-0.mb-4(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema2/img14.svg', alt='Texto que describa la imagen')
          .col-lg-10(data-aos="fade-right")
            p.mb-0 Controlar el alcance del proyecto es clave para asegurar que se entreguen todos los componentes planificados y no se incorporen cambios no previstos (lo que se conoce como "#[i scope creep]"). En proyectos turísticos, esto podría incluir la definición precisa de los servicios turísticos que se ofrecerán, las actividades y los itinerarios y cómo estos elementos se ajustan a las expectativas del cliente.
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
