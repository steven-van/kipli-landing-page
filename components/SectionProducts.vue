<template>
  <div class="mb-16 container-sub m-auto">
    <div>
      <h3
        class="text-ocean-blue text-2xl lg:text-4xl font-mackinac-pro-medium mb-10 lg:mb-20"
      >
        Notre gamme
      </h3>
      <div
        class="flex flex-col lg:flex-row justify-center space-y-8 lg:space-y-0 lg:space-x-12"
      >
        <Card
          v-for="(item, index) in cardItems"
          :key="index"
          :title="item.title"
          :desc="item.desc"
          :img="item.img"
          :price="item.price"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionProducts",
  data() {
    {
      return {
        cardItems: [
          {
            title: "Commode Picardie",
            desc: ["Bois de hêtre massif", "Lattes flexibles ou rigides"],

            img: {
              url: "commode-picardie.png",
              alt: "Commode Picardie",
            },

            price: 700,
          },
          {
            title: "Table de chevet Picardie",
            desc: ["Epicéa massif", "Lattes rigides"],
            img: {
              url: "table-chevet-picardie.png",
              alt: "Table de chevet Picardie",
            },

            price: 700,
          },
          {
            title: "Etagère Picardie",
            desc: ["Bois de hêtre massif", "Lattes flexibles ou rigides"],
            img: { url: "etagere-picardie.png", alt: "Etagère Picardie" },

            price: 700,
          },
        ],
      };
    }
  },
};
</script>
