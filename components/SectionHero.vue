<template>
  <div class="relative py-12 box-border banner-hero flex justify-center">
    <div
      class="hidden lg:block absolute right-0 top-0 mr-24 xl:mr-44 mt-16 lg:w-1/4 xl:w-1/3"
    >
      <div
        class="font-mackinac-pro-medium text-center lg:text-4xl xl:text-5xl text-ocean-blue"
      >
        <div>Pour les professionnels</div>
        <div
          class="arrow-hero hidden 2xl:block w-16 h-16"
          style="position: absolute; left: 90px; bottom: -37px"
        ></div>
        <div>et l’hôtellerie</div>
      </div>
    </div>
    <div class="container-sub">
      <div
        style="max-width: 476px"
        class="flex flex-col items-center mx-auto lg:mx-0"
      >
        <div class="w-60 mb-6">
          <img src="~/assets/kipli-logo.svg" alt="Kipli Logo" />
        </div>
        <div
          class="bg-light-green pl-14 pr-11 pt-9 pb-7 rounded-md font-avenir-roman"
          style="box-shadow: 0px 3px 6px #00000045"
        >
          <div class="text-dark-green mb-6 text-center">
            <p class="text-2xl font-avenir-heavy">Obtenir un devis gratuit</p>
            <p class="text-xl font-avenir-medium">
              Equipez votre établissement avec une literie saine, confortable et
              au prix juste :
            </p>
          </div>
          <div class="flex flex-col text-lg placeholder:text-lg space-y-3.5">
            <div class="flex space-x-6">
              <div class="relative asterisk">
                <input
                  type="text"
                  placeholder="Prénom"
                  class="w-full focus:outline-none"
                />
              </div>
              <div class="relative asterisk">
                <input
                  type="text"
                  placeholder="Nom"
                  class="w-full focus:outline-none"
                />
              </div>
            </div>

            <div class="relative asterisk">
              <input
                type="email"
                placeholder="Email"
                class="w-full focus:outline-none"
              />
            </div>
            <div class="relative asterisk">
              <input
                type="tel"
                placeholder="Téléphone"
                class="w-full focus:outline-none"
              />
            </div>
            <div class="relative asterisk">
              <input
                type="text"
                placeholder="Site internet ou Entreprise"
                class="w-full focus:outline-none"
              />
            </div>
            <div class="relative">
              <textarea
                placeholder="Votre message"
                class="focus:outline-none w-full h-24 resize-none pt-2 pl-3.5"
                style="border: 1px solid #acc7c1"
              >
              </textarea>
            </div>
          </div>
          <button
            class="text-lg w-full mt-6 block py-3.5 bg-orange font-avenir-heavy text-white"
          >
            Envoyer ma demande
          </button>
          <p class="mt-3.5 text-center text-cyan font-avenir-medium">
            Nous vous répondrons sous 48h
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionHero",
};
</script>

<style>
input {
  border: 1px solid #acc7c1;
  padding: 0.75rem 0 0.75rem 1rem;
}

.asterisk::before {
  content: "*";
  color: #f2796b;
  position: absolute;
  top: -5px;
  left: -16px;
}
</style>
