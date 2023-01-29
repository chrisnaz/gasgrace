<template>
  <v-app>
    <Header />
    <!--v-snackbar
      :timeout="timeout"
      :value="true"
      centered
      :color="color"
      elevation="24"
      class="T"
      rounded
    >
      {{ text }}
    </!--v-snackbar-->
    <Compteur />

    <v-main>
      <Presentation />
      <Slider />
      <Lieux />
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/header";
import Presentation from "./components/presentations";
import Compteur from "./components/compteur";
import Slider from "./components/slider";
import Lieux from "./components/lieux";
import Footer from "./components/footer";

export default {
  name: "App",

  components: {
    Compteur,
    Presentation,
    Slider,
    Lieux,
    Footer,
    Header,
  },

  data: () => ({
    snackbar: false,
    vertical: true,
    timeout: 7000,
    color: '#bf027d',
    text: 'La cérémonie aura lieu en extérieur, prévoyez selon la météo.'
  }),
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Raleway&display=swap");
@import url(`./assets/fonts/Yessy.otf`);
@import url(`./assets/fonts/WinterCreative.ttf`);

.T {
  font-family: "Winter Creative", cursive;
  font-size: 32px !important;
}
</style>
