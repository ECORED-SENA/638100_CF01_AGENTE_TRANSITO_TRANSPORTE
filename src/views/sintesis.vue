<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 Usted ha finalizado el estudio de las temáticas de este componente formativo. En este punto, haga un análisis juicioso del esquema que se muestra a continuación, registre su propia síntesis en su libreta personal de apuntes. Se le recomienda, además, repasar los temas que considere necesarios. ¡Adelante!
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Esquema general de este componente formativo, que encierra las temáticas desarrolladas en el mismo y destaca aspectos clave estudiados. Este componente formativo desarrolló, como tema central, La Investigación de accidentes de tránsito. Sus temas integradores fueron: 1. Métodos de búsqueda, los cuales se seleccionan según características contextuales de cada accidente, 2. Accidentes de tránsito, los cuales deben estar clasificados y ser atendidos con base en marco jurídico, 3. Actuaciones de policía judicial, siendo varios los roles actuantes (coordinador, fotógrafo, topógrafo), 4. Informe IPAT, con el cual se caracteriza el entorno del accidente y demás detalles y datos del mismo. El esquema adiciona un recuadro que expresa que la investigación de accidentes de tránsito, deberá estar enmarcada en la normatividad colombiana y sus protocolos vigentes.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
