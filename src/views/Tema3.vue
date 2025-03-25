<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-3
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Control presupuestal
      
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img1.png', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10(data-aos="fade-right")
        p Es el proceso de monitorear el desempeño financiero del proyecto, para garantizar que se mantenga dentro del presupuesto aprobado. Forma parte del área de conocimiento de gestión de costos y está diseñado para identificar desviaciones, prever sobrecostos y tomar acciones correctivas en caso necesario. Este proceso es continuo y se realiza durante toda la ejecución del proyecto, se hace de acuerdo con la actividad y va atado a un cronograma y a un plan de trabajo.

    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1.	Herramientas
    .tarjeta--BG05
      .row.justify-content-center.align-items-center.mb-3
        .col-lg-11
          p Contiene las siguientes herramientas: 
      .row.justify-content-center.align-items-center.mb-3
        .col-lg-10
          PasosA.color-acento-contenido.mb-4(tipo="n")
            .row(titulo="")
              .col-md-9.order-lg-1.order-2.mb-4.mb-md-0(data-aos="fade-left")
                h4 Seguimiento financiero
                p Se hace de forma mensual con actividades desagregadas con un informe financiero, al que se le deben anexar los soportes.
              .col-lg-3.order-lg-2.order-1.mb-4(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/tema3/img2.svg', alt='Figura decorativa')
            .row(titulo="")
              .col-lg-3.col-lg-3.col-sm-8.mb-4(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/tema3/img3.svg', alt='Figura decorativa')
              .col-md-9.mb-4.mb-md-0(data-aos="fade-left")
                h4 Cotizaciones
                p Para un proyecto se requieren mínimo 3 cotizaciones, lo que garantiza que se enmarca en un rango preciso.
            .row(titulo="")
              .col-md-9.order-lg-1.order-2.mb-4.mb-md-0(data-aos="fade-left")
                h4 Método del Valor Ganado (EVM) 
                p Es una técnica de gestión de proyectos que integra el alcance, el cronograma y el costo para evaluar el desempeño y el progreso del proyecto. Permite responder preguntas como ¿El proyecto está dentro del presupuesto? ¿Está avanzando según lo planificado?
              .col-lg-3.col-lg-3.col-sm-8.mb-4.order-1.mb-4(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/tema3/img4.svg', alt='Figura decorativa')
            .row(titulo="")
              .col-lg-3.col-lg-3.col-sm-8.mb-4(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/tema3/img5.svg', alt='Figura decorativa')
              .col-md-9.mb-4.mb-md-0(data-aos="fade-left")
                h4 Sistemas de Gestión de Costos
                p Son herramientas tecnológicas diseñadas para planificar, rastrear, analizar y controlar los costos de un proyecto. Proveen una visión integral del estado financiero del proyecto y ayudan a tomar decisiones informadas. Sus características principales son la presupuestación y planificación, el seguimiento en tiempo real, la integración de datos y el reporte de análisis. Un ejemplo de este #[i software] es Microsoft Project.
            .row(titulo="")
              .col-md-9.order-lg-1.order-2.mb-4.mb-md-0(data-aos="fade-left")
                h4 Análisis de tendencias
                p Es una técnica que permite identificar patrones en los datos históricos del proyecto, para predecir el comportamiento futuro de los costos. Se utiliza para tomar decisiones preventivas y correctivas.
              .col-lg-3.col-lg-3.col-sm-8.mb-4.order-1.mb-4(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/tema3/img6.svg', alt='Figura decorativa')
            .row(titulo="")
              .col-lg-3.col-lg-3.col-sm-8.mb-4(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/tema3/img7.svg', alt='Figura decorativa')
              .col-md-9.mb-4.mb-md-0(data-aos="fade-left")
                h4 Auditorías de costos
                p Son evaluaciones sistemáticas del desempeño financiero del proyecto, para asegurar que los gastos sean precisos, razonables y cumplan con las políticas y el presupuesto aprobado.
    
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2.	Tablero de control (#[i Dashboard])
      
    .row
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Es una herramienta visual que presenta información clave sobre el desempeño financiero de un proyecto, en tiempo real. Su objetivo es proporcionar una visión clara, concisa y fácilmente accesible de los indicadores más importantes relacionados con el presupuesto. Además, lleva a cabo los siguientes procesos: 
        .row
          .col-sm-6.col-lg-6.mb-3(data-aos="fade-right")
            .tarjeta-avatar.tarjeta.color-primario.p-4.w-100
                h4 Costo planeado-costo real
                p Muestra si el proyecto está dentro del presupuesto, con gráficos de barras o líneas, para comparar el costo planificado frente al costo real.
          
          .col-sm-6.col-lg-6.mb-3(data-aos="fade-right")
            .tarjeta-avatar.tarjeta.color-primario.p-4.w-100
                h4  Indice de Desempeño del Costo (IPC)
                p Indica la eficiencia en el uso del presupuesto, con valores por encima de 1, mostrando que el proyecto está bajo presupuesto.
        
          .col-sm-6.col-lg-6.mb-3(data-aos="fade-right")
            .tarjeta-avatar.tarjeta.color-primario.p-4.w-100
                h4 Variación del Costo (CV)
                p Muestra la diferencia entre el costo real y el planeado.
          .col-sm-6.col-lg-6.mb-3(data-aos="fade-right")
            .tarjeta-avatar.tarjeta.color-primario.p-4.w-100
                h4  Proyección de Costo Total (EAC)
                p Estima los costos al final del proyecto, basado en el desempeño actual.
                br
                br
         
      .col-lg-4.order-lg-2.order-1.col-8(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img8.png', alt='Figura decorativa')
    
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3	Procedimiento de elaboración
         
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-3.col-8.mb-lg-0.mb-4.d-lg-flex.d-none(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img9.png', alt='Figura decorativa')
      .col-lg-9
        .row
          .col-lg-12(data-aos="fade-right")
            p Se refiere a los pasos que se siguen para planificar, monitorear y controlar los costos, a lo largo del ciclo de vida del proyecto. Este procedimiento busca garantizar que los recursos financieros se gestionen de manera eficiente y que el proyecto se mantenga dentro del presupuesto establecido. Igualmente, lleva a cabo una serie de acciones, descritas a continuación: 
          .col-lg-12
              .row.cajon.cajon1
                .col-lg-2.cajon.cajon_1(data-aos="zoom-in")
                  figure
                    img(src="@/assets/curso/temas/tema3/img10.svg", alt="alt").img100
                .col-lg-10.p-2(data-aos="fade-right")
                  h5.mh5 Planificación del presupuesto
                  p.mb-0 Establece el presupuesto del proyecto, asignando los recursos financieros necesarios a cada actividad o tarea. Esta fase también define cómo se gestionarán los costos a lo largo del proyecto.
            
              .row.cajon.cajon
                .col-lg-2.cajon.cajon_2(data-aos="zoom-in")
                  figure
                    img(src="@/assets/curso/temas/tema3/img11.svg", alt="alt").img100
                .col-lg-10.p-2(data-aos="fade-right")
                  h5.mh5 Establecimiento de controles de costos
                  p.mb-0  Implementa mecanismos y herramientas para controlar los costos durante la ejecución del proyecto.
            
              .row.cajon.cajon1
                .col-lg-2.cajon.cajon_1(data-aos="zoom-in")
                  figure
                    img(src="@/assets/curso/temas/tema3/img12.svg", alt="alt").img100
                .col-lg-10.p-2(data-aos="fade-right")
                  h5.mh5 Ejecución del Proyecto y Monitoreo Continuo
                  p.mb-0  Lleva a cabo las actividades del proyecto, según lo planeado, mientras se supervisa el cumplimiento del presupuesto.
            
              .row.cajon.cajon
                .col-lg-2.cajon.cajon_2(data-aos="zoom-in")
                  figure
                    img(src="@/assets/curso/temas/tema3/img13.svg", alt="alt").img100
                .col-lg-10.p-2(data-aos="fade-right")
                  h5.mh5 Identificación de desviaciones y toma de acción correctiva
                  p.mb-0  Detecta cualquier desviación en los costos y toma las medidas necesarias para corregirlas y mantener el proyecto dentro del presupuesto. 
            
              .row.cajon.cajon1
                .col-lg-2.cajon.cajon_1(data-aos="zoom-in")
                  figure
                    img(src="@/assets/curso/temas/tema3/img14.svg", alt="alt").img100
                .col-lg-10.p-2(data-aos="fade-right")
                  h5.mh5 Proyección y estimación final de costos
                  p.mb-0  Estima el costo total del proyecto al finalizar, calculando el desempeño actual y las proyecciones de gastos futuros.
            
              .row.cajon.cajon
                .col-lg-2.cajon.cajon_2
                  figure
                    img(src="@/assets/curso/temas/tema3/img15.svg", alt="alt").img100
                .col-lg-10.p-2
                  h5.mh5 Cierre y evaluación del control presupuestal
                  p.mb-0 Finaliza el proceso de control presupuestal, asegurando que todos los costos estén registrados y que se haya cumplido con los objetivos financieros del proyecto.
</template>

<script>
export default {
  name: 'Tema3',
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
