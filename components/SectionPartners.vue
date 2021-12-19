<template>
  <div class="flex flex-col items-center container-sub m-auto mb-16">
    <p class="font-mackinac-pro-medium text-4xl text-dark-green mb-24">
      Ils nous font confiance
    </p>
    <div class="flex items-center flex-wrap justify-between">
      <div class="px-8 mb-8" v-for="(item, index) in imgItems" :key="index">
        <img :src="require(`~/assets/${item.url}`)" :alt="item.alt" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionPartners",
  data: () => {
    return {
      imgItems: [
        { url: "hors-champs.png", alt: "Hors Champs" },
        { url: "maison-emme.png", alt: "Maison Emme" },
        { url: "castel.png", alt: "Castel" },
        { url: "uzes.png", alt: "Uzes" },
        { url: "pella-roca.png", alt: "Pella Roca" },
        { url: "open-house.png", alt: "Open House" },
        {
          url: "leclos-dagobert.png",
          alt: "Clos Dagobert",
        },
        {
          url: "les-jardins-de-mala.png",
          alt: "Jardin de Mala",
        },
        { url: "h8.png", alt: "H8", width: "195px" },
        { url: "la-butte.png", alt: "La Butte" },
        {
          url: "bain-de-foret.png",
          alt: "Bain de forêt",
        },
        {
          url: "domaine-ourea.png",
          alt: "Domaine Ourea",
        },
        {
          url: "maison-bao.png",
          alt: "Maison Bao Valborne",
        },
      ],
    };
  },
};
</script>
