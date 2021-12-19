<template>
  <div
    style="box-shadow: 0px 3px 6px #0000001f"
    class="rounded-b flex flex-col"
  >
    <div class="width: 541px; height: 304px;">
      <img
        :src="require(`~/assets/${img.url}`)"
        :alt="img.alt"
        class="w-full"
      />
    </div>
    <div class="flex-1 flex flex-col justify-between px-8 py-7">
      <div class="flex justify-between">
        <p class="font-mackinac-pro-bold text-xl lg:text-2xl text-forest mb-7">
          {{ title }}
        </p>
        <div class="flex space-x-3.5">
          <div class="w-11">
            <img src="~/assets/france-logo.png" alt="France Logo" />
          </div>
          <div class="w-9">
            <img src="~/assets/pefc-logo.png" alt="PEFC Logo" />
          </div>
        </div>
      </div>

      <div class="mb-6 space-y-1 text-dark-forest">
        <div
          v-for="(text, index) in desc"
          :key="index"
          class="flex items-center"
        >
          <div class="w-5"><img src="~/assets/check.svg" /></div>
          <p class="font-mackinac-pro-medium text-lg lg:text-xl ml-4">
            {{ text }}
          </p>
        </div>
      </div>

      <p class="text-right lg:text-lg font-avenir-medium text-light-blue">
        À partir de
        <span class="font-avenir-heavy text-lg lg:text-xl">{{ price }}€</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    desc: Array,
    img: Object,
    price: Number,
  },
};
</script>
