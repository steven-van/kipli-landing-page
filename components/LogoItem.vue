<template>
  <div class="flex-1 flex flex-col items-center text-center relative">
    <div
      class="absolute top-0 w-full whitespace-nowrap text-dark-green text-xl lg:text-2xl font-mackinac-pro-medium"
    >
      {{ title }}
    </div>
    <!-- trick -->
    <div
      class="opacity-0 whitespace-nowrap text-dark-green text-xl lg:text-2xl font-mackinac-pro-medium"
    >
      {{ title }}
    </div>
    <!--  -->
    <div :class="`${width} mt-11 mb-7`">
      <img :src="require(`~/assets/${icon.url}`)" :alt="icon.alt" />
    </div>
    <p
      class="text-dark-green lg:text-lg font-avenir-medium leading-7"
      :style="`width: ${index === 1 ? `60` : `61`}%`"
    >
      {{ desc }}
    </p>
  </div>
</template>

<script>
export default {
  name: "LogoItem",
  props: {
    title: String,
    desc: String,
    icon: Object,
    width: String,
    index: Number,
  },
};
</script>
