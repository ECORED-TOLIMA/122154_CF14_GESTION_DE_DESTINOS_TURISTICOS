<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Acciones de mejora
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        p Una acción de mejora, es una medida que contribuye a mejorar la eficiencia o eficacia de las actividades de un sistema de gestión. Estas se incluyen en el plan de mejoras, el que constituye el principal objetivo dentro de un proceso de mejora continua, por lo que son consideradas como las principales herramientas a desarrollar dentro del mismo. 
        .cajon.color-primario.p-4.mb-4
          p Para elaborar un plan de mejoras, se necesita el compromiso de todos los que intervienen en cada etapa del proyecto. Este plan, proyecta los cambios que deben incorporarse a los diferentes procesos del proyecto, para que se ajusten, con el fin de obtener el éxito del proyecto. 
      .col-lg-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema4/img1.png', alt='Texto que describa la imagen')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema4/img3.png', alt='Texto que describa la imagen')
      .col-lg-6(data-aos="fade-right")
        p Un plan de mejoras, ayuda a detectar los aspectos a mejorar y permite el control y seguimiento de las diferentes acciones a desarrollar, sobre problemáticas detectadas, como las no previstas. Para su elaboración, se requiere establecer los objetivos que se proponen alcanzar y diseñar la planificación de las tareas para conseguirlos. En este sentido, el plan de mejoras permite: 
        .cajon.color-primario.p-4.mb-4
          ul.lista-ul
            li
              i.fas.fa-angle-right
              | Identificar las causas que generaron la acción correctiva.
            li
              i.fas.fa-angle-right
              | Identificar las acciones de mejora que se deben aplicar.
            li
              i.fas.fa-angle-right
              | Analizar la pertinencia de su implementación.
            li
              i.fas.fa-angle-right
              | Dar prioridad en las acciones a adelantar.
            li
              i.fas.fa-angle-right
              | Socializar y revisar la estrategia planteada.
            li
              i.fas.fa-angle-right
              | Incrementar la eficacia y eficiencia del proyecto.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        p Las acciones de mejora, se hacen cada vez que se requiera. El seguimiento se debe hacer mensual o máximo bimensual, buscando que, de haber alguna detección de un problema, se cuente con el tiempo suficiente de tomar acciones en pro de su corrección y que el problema no se desborde. Las acciones de mejora no pueden depender de un tercero para realizarse. Igualmente, estas, garantizan que el proyecto haya resultado viable, bajo los estándares de calidad.
    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1.	Pasos a seguir para la elaboración del plan de mejoras
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        p Los siguientes son los pasos que se deben realizar: 
        LineaTiempoD.color-acento-botones
          p.text-normal(numero="1" titulo="Identificar el área o punto de mejora") Los problemas identificados en la etapa de evaluación se consideran el punto de partida para la detección de las áreas de mejora. De esta forma, se puede hacer un diagnóstico interno o externo. Es posible que el análisis centrado en los criterios del modelo de evaluación, dada la interrelación que existe entre ellos, de lugar a la aparición de desviaciones que se repitan.
          p.text-normal(numero="2" titulo="Detectar las causas del problema") Con esto claro, es mucho más fácil buscar la solución del mismo, para pasarlo por el área de mejora. Para ello, se puede acudir a herramientas como el diagrama de espina (causa-efecto), diagrama de Pareto o tormenta de ideas. Estas facilitan la detección del problema y la búsqueda de la solución más apropiada.
          p.text-normal(numero="3" titulo="Establecer los objetivos y el cronograma para lograrlos") Es importante que apunten a la definición del resultado esperado, que sean realistas, se puedan cumplir, sean medibles, se les pueda hacer seguimiento y se puedan ajustar en caso de requerirse.
          p.text-normal(numero="4" titulo="Seleccionar las acciones de mejora") Se debe contar con una amplia gama de posibles alternativas de mejora, que permita elegir la más conveniente, teniendo en cuenta la complejidad del problema evidenciado. Entre más opciones haya, es mucho mejor.
          p.text-normal(numero="5" titulo="Hacer la selección de las acciones de mejora") Con esto será más fácil priorizar las más adecuadas. En este caso, hay unas herramientas que ayudan a definir las mejores, como son la tormenta de ideas, la técnica de grupo de discusión, entre otras. Para ello, se requiere tener la relación de las acciones que se deben hacer en busca de cumplir con los objetivos establecidos. La cantidad de acciones, depende de la complejidad del problema.
          p.text-normal(numero="6" titulo="Realizar la planificación") Hay que revisar si hay impedimentos que condicionen la viabilidad. En esta etapa, no necesariamente se da prioridad a lo más urgente, sino que se deben revisar todos los criterios de toma de decisiones.
          p.text-normal(numero="7" titulo="Hacer el seguimiento al plan de mejoras") Luego de establecer las prioridades, se hace la construcción del plan de mejoras, en la que se debe relacionar los ítems, para poder hacerle seguimiento y así garantizar su eficacia y su eficiencia. Para ello, se debe hacer en primer lugar las tareas o acciones concretas que se fijaron, con el fin de darle cumplimiento a los objetivos. Se requiere asignar responsables por cada tarea, así como la relación de los recursos físicos, los indicadores, el cronograma y lo que ayude a su seguimiento permanente.

      .col-lg-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema4/img4.png', alt='Texto que describa la imagen')

    
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2.	Informes
    
    .bloque-texto-g.bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img5.png')})`}" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 En un proyecto turístico, se debe elaborar un informe, el cual permite evaluar los recursos turísticos, tanto naturales como culturales, la infraestructura que tiene el destino, la oferta y demanda turística, la identificación de los atractivos que atraen turistas, así como las carencias en estos mismos aspectos, que limitan que se dé el desarrollo turístico. También permite establecer la competitividad del destino, comparándolo con otros similares, valiéndose del estudio de los factores socioeconómicos y ambientales, que son eje del desarrollo turístico sostenible.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="zoom-in")
        p Para la realización del mismo, es importante tener en cuenta y relacionar todas las anteriores variables, que son las que, a la final, dan cuenta del avance del proyecto, los problemas que se presentan y las soluciones que se han dado para resolverlos. Este es considerado como el eje de sostenibilidad del proyecto, ya que a futuro permitirá simplificar las acciones a desarrollar, puesto que se ha pasado por procesos de validación en el mismo.


</template>

<script>
export default {
  name: 'Tema4',
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
