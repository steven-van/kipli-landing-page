<template>
  <div
    class="m-auto grid grid-cols-1 justify-items-center gap-y-12 justify-center md:grid-cols-3 xl:grid-cols-5 pt-16 pb-20"
    style="width: 93%"
  >
    <LogoItem
      v-for="(item, index) in logoItems"
      :key="index"
      :title="item.title"
      :icon="item.icon"
      :desc="item.desc"
      :width="item.width"
      :index="index"
    />
  </div>
</template>

<script>
export default {
  name: "SectionLogo",
  data() {
    {
      return {
        logoItems: [
          {
            title: "Resilience et maintien",
            icon: {
              url: "cup.svg",
              alt: "Coupe",
            },
            desc: "Nos matelas s’adaptent au dormeur et non l’inverse !",
            width: "w-16",
          },
          {
            title: "Matières naturelles",
            icon: {
              url: "wind.svg",
              alt: "Vent",
            },
            desc: "Nos matelas sont extrêmement respirants, déhoussables, anti acariens et antibactériens",
            width: "w-20",
          },
          {
            title: "Économique et écologique",
            icon: {
              url: "heart.svg",
              alt: "Coeur",
            },
            desc: "Des coûts optimisés grâce à une durée de vie double",
            width: "w-14",
          },
          {
            title: "Prix réduits",
            icon: {
              url: "hands.svg",
              alt: "Coeur",
            },
            desc: "Des tarifs professionnels avantageux",
            width: "w-16",
          },
          {
            title: "Un chargé de compte dédié",
            icon: {
              url: "shaking-hands.svg",
              alt: "Poignée de mains",
            },
            desc: "Un accompagnement marketing sur-mesure",
            width: "w-20",
          },
        ],
      };
    }
  },
};
</script>
