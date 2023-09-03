<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 El informe policial de accidentes de tránsito IPAT
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0
        p La actuación más importante en el conocimiento de accidentes de tránsito, es el diligenciamiento del informe policial de accidentes de tránsito IPAT, el cual se reglamenta en la Resolución 0011268 de 2012, en cumplimiento de los artículos 144 y 149 de la Ley 769 de 2002.
        p.mb-0 A continuación, conozca y profundice en algunos apartes relevantes para el diligenciamiento del informe policial de accidentes de tránsito:
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/img1.png', style="width: 450px" ,alt='').m-auto


    .tarjeta.tarjeta--azul
      .p-4.p-lg-5
        SlyderA(tipo="b")
          .row
            .col-lg-6.mb-4.mb-lg-0
              p #[b Identificación y ubicación]
              p.mb-4 Se indica qué organismo de tránsito, debe estar registrado con un respectivo código DANE, ubicando la oficina más cerca de los hechos. En este primer capítulo se describe la gravedad del accidente: si es con heridos, muertos o solo daños. También se especifica el lugar o coordenadas geográficas determinando que sea zona urbana o zona rural. Además de especificar el lugar se procura establecer la localidad o comuna para la zona urbana. Existe una casilla para poner la posible hora del accidente y la posible hora del levantamiento. Todo esto incluye la ubicación del accidente tanto geográfica como cronológica.

              a.anexo.mb-4(:href="obtenerLink('/downloads/Formulario_IPAT.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p Anexo. Formato informe policial de accidentes de tránsito IPAT

            .col-lg-6
              figure
                img(src='@/assets/curso/tema4/img2.png', style="width: 500px" ,alt='Imagen fotográfica del formato IPAT que muestra la franja de identificación y ubicación, con sus respectivos campos.').m-auto
          .row
            .col-lg-6.mb-4.mb-lg-0
              p #[b Caracterización de vía y zona de influencia]
              p.mb-4 Seguidamente el IPAT establece las casillas para caracterizar la vía donde ocurrieron los hechos y la zona de influencia de esta, donde se destacan las características del lugar, de acuerdo al área, sector, zona y el diseño, además también sugiere incluir las condiciones climáticas al momento de la ocurrencia de los hechos.
              a.anexo.mb-4(:href="obtenerLink('/downloads/Formulario_IPAT.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p Anexo. Formato informe policial de accidentes de tránsito IPAT
            .col-lg-6
              figure
                img(src='@/assets/curso/tema4/img3.png', style="width: 500px" ,alt='Imagen fotográfica del formato IPAT que muestra la franja de caracterización de la vía y su zona, con sus respectivos campos seleccionables.').m-auto
          .row
            .col-lg-6.mb-4.mb-lg-0
              p #[b Caracterización de participantes]
              p.mb-4 El siguiente aparte del IPAT constituye la caracterización de los participantes, como conductores, los vehículos y sus propietarios, donde se requiere contar con la documentación, ya sea física o la que proporcionan las bases de datos digitales, corroborando la veracidad y autenticidad de estos datos y las personas y vehículos implicados.
              a.anexo.mb-4(:href="obtenerLink('/downloads/Formulario_IPAT.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p Anexo. Formato informe policial de accidentes de tránsito IPAT
            .col-lg-6
              figure
                img(src='@/assets/curso/tema4/img4.png', style="width: 500px" ,alt='Imagen fotográfica del formato IPAT que muestra la franja de caracterización de participantes, con sus respectivos campos para ser diligenciada.').m-auto
          .row
            .col-lg-6.mb-4.mb-lg-0
              p #[b Caracterización de vehículos]
              p.mb-4 Para el caso de los vehículos, también se requiere verificar la documentación física, pero de no contar con ella, el agente de tránsito o quien haga sus veces debe corroborar con los sistemas de identificación la información suministrada en las bases de datos digitales.
              a.anexo.mb-4(:href="obtenerLink('/downloads/Formulario_IPAT.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p Anexo. Formato informe policial de accidentes de tránsito IPAT
            .col-lg-6
              figure
                img(src='@/assets/curso/tema4/img5.png', style="width: 500px" ,alt='Imagen fotográfica del formato IPAT que muestra la franja de caracterización de vehículos, con sus respectivos campos.').m-auto
          .row
            .col-lg-6.mb-4.mb-lg-0
              p #[b Caracterización de víctimas]
              p.mb-4 Por último, la caracterización de las víctimas de los accidentes de tránsito en su condición de peatones, pasajeros o acompañantes, que sufrieron las consecuencias del siniestro.
              a.anexo.mb-4(:href="obtenerLink('/downloads/Formulario_IPAT.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p Anexo. Formato informe policial de accidentes de tránsito IPAT
            .col-lg-6
              figure
                img(src='@/assets/curso/tema4/img6.png', style="width: 500px" ,alt='Imagen fotográfica del formato IPAT que muestra la franja de caracterización de víctimas, con sus respectivos campos.').m-auto

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
