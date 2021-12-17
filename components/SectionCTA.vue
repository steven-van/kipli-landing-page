<template>
  <div class="relative">
    <div class="absolute left-0 w-32 top-8">
      <img src="~/assets/plants-left.svg" />
    </div>
    <div class="absolute -right-52 w-80">
      <img src="~/assets/form.svg" />
    </div>
    <div class="absolute -right-5 w-32 top-24">
      <img src="~/assets/plants-right.svg" />
    </div>
    <div class="relative flex flex-col items-center">
      <h3 class="text-ocean-blue text-4xl mb-16 font-mackinac-pro-medium">
        Des produits responsables
      </h3>
      <p
        class="w-1/2 text-ocean-blue text-2xl leading-10 text-center mb-14 font-mackinac-regular"
      >
        Aujourd’hui, 70% des voyageurs sont plus susceptibles de réserver un
        hébergement ayant pris des mesures éco-responsables. Proposez une
        alternative saine et durable à vos hôtes en adoptant la literie Kipli !
      </p>
      <button class="py-3 bg-orange px-28 text-white font-avenir-heavy text-xl">
        Obtenir un devis
      </button>
      <div style="width: 1018px" class="absolute z-1">
        <img src="~/assets/circle.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionCTA",
};
</script>

<style>
.z-1 {
  z-index: -1;
}
</style>
