<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El control y seguimiento de un proyecto turístico, es fundamental para lograr la sostenibilidad del mismo, teniendo en cuenta que deben hacerse de manera permanente, en la medida en que se apliquen controles regulares de supervisión, posibles fallas y acciones de mejora, así como de informes periódicos que garanticen a las regiones.
    P Este control y seguimiento, permite que los cálculos financieros del proyecto, se mantengan encaminados dentro del presupuesto inicial, el cual incluye líneas específicas para cubrir los posibles imprevistos, que se dan en el marco del desarrollo de los proyectos. Es por ello, que el objetivo del proyecto debe ser certero, alineado con el presupuesto y el cronograma, más las acciones de seguimiento continuo.
 
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis del componente formativo Control y seguimiento del proyecto turístico, inicialmente se tratan los aspectos que tienen que ver con las fases existentes dentro del seguimiento y los tipos de gestión presentes en este proceso; además, de las etapas, habilidades y el ciclo de vida que se tiene en la gestión de actividades de un proyecto. Luego, se desglosa el proceso relacionado con el control presupuestal, el cual se aplica por medio de herramientas, tableros de control y diversos procedimientos para su elaboración. Por último, se aplican las acciones de mejora, antes de producir el informe final que evalúa todo este accionar turístico.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
