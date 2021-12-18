<template>
  <div class="flex flex-col items-center text-center">
    <p class="text-dark-green text-2xl font-mackinac-pro-medium">
      {{ title }}
    </p>
    <div :class="`${width} mt-11 mb-7`">
      <img :src="require(`~/assets/${icon.url}`)" :alt="icon.alt" />
    </div>
    <p class="w-1/2 text-dark-green font-avenir-medium leading-7">
      {{ desc }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Logo",
  props: {
    title: String,
    desc: String,
    icon: Object,
    width: String,
  },
};
</script>
