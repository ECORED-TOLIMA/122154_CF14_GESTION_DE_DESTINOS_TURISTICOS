<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p(data-aos="fade-right") Los proyectos turísticos impactan de manera positiva a la región en la que se van a implementar, ya que ayudan al desarrollo económico, a la generación de empleo local, se incrementa la demanda de bienes y servicios y se beneficia la cadena de valor del turismo. Cuando se hacen inversiones de carácter turístico en las regiones, se espera que estas sean a largo plazo, por lo cual los proyectos turísticos deben estar sujetos a controles y seguimientos permanentemente.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-8.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/intro/img1.png', alt='Texto que describa la imagen')

      .col-lg-9(data-aos="fade-right")
        p Un proyecto turístico debe planificar muchos aspectos que están encadenados, ya que finalmente, lo que pretende es impactar de manera positiva a un destino turístico, una región determinada o un atractivo turístico existente.
        p Es por eso que el éxito del proyecto turístico, se basa en una correcta planeación, así como en la implementación de actividades de control y seguimiento al mismo. Los proyectos turísticos son sostenibles en la medida en que se apliquen controles regulares de supervisión, de posibles fallas y acciones de mejora, de informes periódicos que garanticen a las regiones.
        .cajon.color-primario.p-3
          .row.justify-content-center
            .col-lg-2.col-4.d-lg-flex.d-none(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/intro/img2.svg', alt='Texto que describa la imagen')
            .col-lg-10(data-aos="fade-right")
              p Los procesos de seguimiento y control son más eficaces y rápidos cuando se han establecido unos objetivos claros, alcanzables, medibles y calificables tanto cuantitativamente como cualitativamente. De un buen control se pueden establecer si se están logrando los objetivos o si se requiere mejorar algún aspecto, que no permita el avance normal del proyecto.
    p.mb-3(data-aos="fade-right") Conociendo el anterior contexto, es importante que acceda al siguiente video, el cual explica la temática a tratar durante este componente formativo:


    .row.justify-content-center.align-items-center           
      .col-lg-12(data-aos="zoom-in")
        figure
          .video
            iframe(width="1280" height="720" src="https://www.youtube.com/embed/yAX8KoTCdcE" title="Control y seguimiento del proyecto turístico" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
            
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
