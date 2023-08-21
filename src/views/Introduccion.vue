<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-c1
      .col-12
        .px-5.pt-5
          .row.align-items-center.mb-5
            .col-lg-auto
              figure
                img(src='@/assets/curso/intro/img2.svg', style="width: 60px" ,alt='Texto que describa la imagen').m-auto
            .col
              p.mb-0 Tenga una cordial bienvenida al estudio del componente formativo “Investigación de accidentes de tránsito”. Este contenido ha sido diseñado especialmente para usted. Comience observando con atención el video que, a continuación, se propone. ¡Adelante!
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/JfkbV7rW2io" title="Investigación de accidentes de tránsito" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video. Investigación de accidentes de tránsito
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
