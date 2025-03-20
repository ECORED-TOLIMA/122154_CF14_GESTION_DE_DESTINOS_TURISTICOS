<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 	Control y seguimiento
      
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/tema1/img1.png', alt='Texto que describa la imagen')

        .col-lg-8(data-aos="fade-right")
          p Las acciones que se desarrollan en la actividad turística en cualquier región del país, requieren de controles de manera permanente. Se entiende que lo que no se mide, no se controla y lo que no se controla, no se puede mejorar. Cualquier acción de control se hace con el fin de buscar que los recursos que se destinan para el desarrollo de un proyecto turístico, se inviertan de la forma más adecuada, con el fin de garantizar el cumplimiento de sus objetivos.
          .cajon.bg-1.mb-4
            .row.justify-content-center
              .col-lg-2.col-4.d-lg-flex.d-none(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/tema1/img2.svg', alt='Texto que describa la imagen')
              .col-lg-10(data-aos="fade-right")
                p.p-2.mt-3 El control es la parte final de las tareas de la dirección, que comienza por la planificación y continúa con la organización y dirección. El control es una pieza clave porque ofrece la información para determinar si los objetivos iniciales fueron bien planteados y además establecer las futuras acciones que se deben poner en marcha.

      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.1	Procedimiento
      p(data-aos="fade-right") La realización del control se divide en 4 fases principales y consecutivas, que son:
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Establecimiento de los estándares y métodos más adecuados para la medición de los resultados")
              .col-md-12.mb-md-0
                p Los estándares se deben especificar de manera precisa y cuantitativa y ser socializados. Estos se fijan con base en los objetivos planteados para el proyecto. Pueden plantearse de varias formas: físicos, monetarios o porcentuales.
            .row(titulo="Medición de los resultados reales")
              .col-md-12.mb-md-0
                p Medir los resultados es relativamente fácil cuando las actividades producen resultados específicos, por ejemplo, nivel de ventas. Pero cuando se debe medir variables como el resultado de algunas actividades, esto se hace algo complejo, por ejemplo, los impactos sociales y ambientales. Esta información se recolecta a través de fuentes alternativas como la observación personal, información probabilística y estadística, y de los informes ya sean verbales o escritos.
                p Un indicador de impacto permite hacer el seguimiento después de terminar un proyecto. Da cuenta del resultado del proyecto, e indica si hay que tomar acciones posteriores, como por ejemplo realizar una segunda fase del mismo, etc. Este se mide de manera cuantitativa. Estos se aplican cuando el proyecto se acaba.

            .row(titulo="Comparación de los resultados obtenidos con los estándares prefijados")
              .col-md-12.mb-md-0
                p Determinar si han existido desviaciones de los resultados reales con respecto a los estándares establecidos, dejando un cierto rango de variación respecto a un valor ideal del mismo.
            .row(titulo="Establecimiento de posibles medidas correctivas")
              .col-md-12.mb-md-0
                p Suponen cambios en diferentes actividades necesarias para llevar a cabo los procesos planteados inicialmente. Debe identificarse el encargado de realizar esas medidas.
              
        .col-lg-4.d-lg-flex.d-none(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/tema1/img3.png', alt='Texto que describa la imagen')
      
      
      .tarjeta--BG06
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-11
            p(data-aos="fade-right") Por lo anterior, se relaciona la siguiente figura:

        .titulo-sexto.color-acento-contenido.offset-1(data-aos="zoom-in")
          h5 Figura 1.
          span  #[i Resumen del proceso de control ]
      
        .row.justify-content-center.mb-4(data-aos="zoom-in")
          .col-md-10.desktop(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema1/img4.svg', alt='Figura 1 que contiene el resumen de lo que se lleva a cabo al momento de realizar un control y seguimiento, estableciendo que hay unas condiciones sobre si se conoce o no la existencia de las desviaciones.')
              
          .col-md-6.movil(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema1/img4_1.svg', alt='Figura 1 que contiene el resumen de lo que se lleva a cabo al momento de realizar un control y seguimiento, estableciendo que hay unas condiciones sobre si se conoce o no la existencia de las desviaciones.')
            
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.2	Herramientas
      p(data-aos="fade-right") A continuación, se mencionan y explican las herramientas utilizadas por realizar los procedimientos de control y seguimiento, en los diferentes tipos de alcances: 
      TabsC.color-acento-botones.mb-5
        .py-4.py-md-5(titulo="Gestión del alcance")
          .row.justify-content-center
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/img5.png', alt='Texto que describa la imagen')
            .col-md-5
              .row.mb-3
                .col-lg-2.col-8.mb-lg-0.mb-4.d-lg-flex.d-none(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/tema1/img6.svg', alt='Texto que describa la imagen')
              p Esta herramienta permite analizar la variación entre el alcance planificado y el ejecutado de cada proyecto. Para el análisis de variación, se indica emplear herramientas de control, como inspecciones para garantizar que los entregables cumplan con los requisitos indicados.
        .py-4.py-md-5(titulo="Gestión del cronograma")
          .row.justify-content-center
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/img7.png', alt='Texto que describa la imagen')
            .col-md-5
              .row.mb-3
                .col-lg-2.col-8.mb-lg-0.mb-4.d-lg-flex.d-none(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/tema1/img8.svg', alt='Texto que describa la imagen')
              p Los #[i softwares] de gestión de cronogramas como Microsoft Project o Primavera para actualizar y monitorear los tiempos de entrega de resultados, permiten tener control sobre los componentes y sus horarios de entrega. Además, la metodología de análisis de tendencias revisa los patrones para prevenir desviaciones futuras.
        .py-4.py-md-5(titulo="Gestión de calidad")
          .row.justify-content-center
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/img9.png', alt='Texto que describa la imagen')
            .col-md-5
              .row.mb-3
                .col-lg-2.col-8.mb-lg-0.mb-4.d-lg-flex.d-none(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/tema1/img10.svg', alt='Texto que describa la imagen')
              p Para este punto, se emplean las listas de verificación para garantizar que los entregables cumplan con los estándares de calidad, además se realizan auditorías de calidad, las cuales se basan en evaluaciones estructuradas de procesos y entregables. Finalmente, se lleva a cabo un diagrama de causa-efecto para identificar causas raíz de problemas de calidad.
        
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10(data-aos="fade-right")
          p De acuerdo a las herramientas anteriores, sobre la última, a continuación, se explica de manera gráfica, el diagrama causa-efecto, el cual se ubica en el proceso final de calidad:
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          .titulo-sexto.color-acento-contenido.offset-1(data-aos="zoom-in")
            h5 Figura 2.
            span  #[i Diagrama causa - efecto]
        
          .row.justify-content-center.mb-4
            .col-md-10.desktop(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/tema1/img11.svg', alt='Figura 2 que hace la relación del diagrama de causa-efecto, el cual parte de una causa que contiene personas, entorno, materiales, mediciones, procesos y equipos/tecnología; y finaliza con un efecto que es la consecuencia.')
                
            .col-md-6.movil(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/tema1/img11_1.svg', alt='Figura 2 que hace la relación del diagrama de causa-efecto, el cual parte de una causa que contiene personas, entorno, materiales, mediciones, procesos y equipos/tecnología; y finaliza con un efecto que es la consecuencia.')

     
  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
