<template>
  <div class="section_compteur">
    <v-row align="center" justify="center">
      <Countdown deadline="April 1, 2023"></Countdown>
    </v-row>
  </div>
</template>

<style>

.section_compteur {
  background: rgba(255,253,230,255);
  background: linear-gradient(
    180deg,
    rgba(220,245,249,255) 0%,
    rgba(198,235,243,255) 40%,
    rgba(167,225,236,255) 62%,
    rgba(153,208,254,255) 100%
  );
  padding: 4em 3em 3em 3em;
  position: relative;
  top: -3em;
}
.v-application ol,
.v-application ul {
  padding-left: 0em !important;
}
ul.vuejs-countdown {
  padding: 0;
  margin: 0;
  margin-top: 1em;
  padding-left: 0;
}
.vuejs-countdown .digit {
  background-color: #fff !important;
  color: #87cefd !important;
  border-radius: 20px;
  padding: 0.2em 0.2em;
  margin-top: 0.6em;
}
.vuejs-countdown li:after {
  content: ":";
  position: absolute;
  top: 21px !important;
  right: -13px;
  font-size: 32px;
}
.vuejs-countdown .text {
  font-family: "Winter Creative", cursive;
  color: #fefee5 !important;
  font-size: 1.8em !important;
  padding-bottom: 1em;
  text-transform: none !important;
  position: absolute;
  top: -1.6em;
  margin-top: 0.4em;
  margin-left: 0.2em;
  text-transform: lowercase !important;
}
.vuejs-countdown {
  margin-top: 1em;
}

@media screen and (min-width: 500px) {
  .section_compteur {
    top: -5em;
  }
}
@media screen and (min-width: 1200px) {
  .section_compteur {
    top: -8.9em;
    padding: 6em 3em 3em 3em;
  }
}
@media screen and (min-width: 1440px) {
  .section_compteur {
    top: -10.9em;
    padding: 8em 3em 3em 3em;
  }
}
@media (max-width: 320px) {
  .vuejs-countdown .digit {
    font-size: 29px !important;
  }
}
</style>

<script>
import Countdown from "vuejs-countdown";

export default {
  components: { Countdown },
};
</script>
