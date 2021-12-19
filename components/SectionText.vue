<template>
  <div
    class="container-sub m-auto flex justify-center space-x-16 font-mackinac-pro-medium text-ocean-blue leading-5 text-center mt-20 text-section pb-8 box-border relative"
  >
    <div
      class="mr-7 ml-7 overflow-hidden"
      style="width: 30%; max-height: 120px"
      v-for="(text, index) in texts"
      :key="index"
    >
      <p>{{ text }}</p>
    </div>
    <div class="circle-arrow w-12 h-12 absolute -bottom-2 cursor-pointer z-20"></div>
  </div>
</template>

<script>
export default {
  name: "SectionText",
  data: () => {
    return {
      texts: [
        "Pour des nuits confortables mais avant tonaturelles, le matelcas latex naturel Kipli est votre meilleur allié. Pour des nuitsko confortables mais avant tout naturelles, le matelas latex naturel eskipli est votre meilleur allié. Pour des nuits confortables mais avant tout naturelles, le matelas latex naturel Kipli est votre meilleur allié. Pour des nuits confortables mais avant tout dsl naturelles, le matelas latex naturel Kipli est votre meilleur allié. Pour des nuits confortables mais avant tout naturelles, le matelas latex naturel Kipli est votre meilleur allié. Pour des nuits confortables mais avant tout naturelles, le matelas latex naturel Kipli est votre meilleur allié. Pour des nuits confortables mais avant tout naturelles, le matelas latex naturel Kipli est votre meilleur allié. Pour des nuits confortables mais avant tout naturelles, le matelas latex naturel Kipli est votre meilleur allié.",
        "Pour des nuits confortables mais avant tonaturelles, le matelcas latex naturel Kipli est votre meilleur allié. Pour des nuitsko confortables mais avant tout naturelles, le matelas latex naturel eskipli est votre meilleur allié. Pour des nuits confortables mais avant tout naturelles, le matelas latex naturel Kipli est votre meilleur allié. Pour des nuits confortables mais avant tout dsl naturelles, le matelas latex naturel Kipli est votre meilleur allié. Pour des nuits confortables mais avant tout naturelles, le matelas latex naturel Kipli est votre meilleur allié. Pour des nuits confortables mais avant tout naturelles, le matelas latex naturel Kipli est votre meilleur allié. Pour des nuits confortables mais avant tout naturelles, le matelas latex naturel Kipli est votre meilleur allié. Pour des nuits confortables mais avant tout naturelles, le matelas latex naturel Kipli est votre meilleur allié.",
      ],
    };
  },
};
</script>
