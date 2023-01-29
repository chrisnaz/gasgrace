<template>
  <div style="margin: 2%">
    <div class="controle">
      <h1 class="titre">Nos photos</h1>
    </div>
    <div class="trois">
      <carousel
        :per-page="3"
        :mouse-drag="false"
        :loop="true"
        :autoplay="true"
        :autoplayTimeout="4000"
        :centerMode="true"
      >
        <slide v-for="(item, i) in items" :key="i">
          <v-img :src="item.src" min-height="50vmin" max-width="55vmin"></v-img>
        </slide>
      </carousel>
    </div>

    <div class="deux">
      <carousel
        :per-page="2"
        :mouse-drag="false"
        :loop="true"
        :autoplay="true"
        :autoplayTimeout="4000"
        :centerMode="true"
      >
        <slide v-for="(item, i) in items" :key="i">
          <v-img :src="item.src" min-height="50vmin" max-width="55vmin"></v-img>
        </slide>
      </carousel>
    </div>

    <div class="un">
      <carousel
        :per-page="1"
        :mouse-drag="false"
        :loop="true"
        :autoplay="true"
        :autoplayTimeout="4000"
        :centerMode="true"
      >
        <slide v-for="(item, i) in items" :key="i">
          <v-img :src="item.src" min-height="50vmin" max-width="55vmin"></v-img>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<style lang="scss">
.controle {
  position: relative;
}
.head {
  background-color: aqua;
}
.title {
  margin-top: 17% !important;
}
.titre {
  font-family: "Yessy", cursive !important;
  text-transform: none !important;
  font-size: 3em !important;
  font-weight: 100;
  color: #516171 !important;
  text-align: center;
  margin-top: 2em;
}
.VueCarousel {
  margin-top: 2em;
  height: 28em;
  margin-bottom: 0em;
}
.VueCarousel-dot {
  background-color: rgba(220,245,249,255) !important;

  &--active {
    background-color: rgba(167,225,236,255) !important;
  }
}

.VueCarousel-wrapper {
  padding-left: 5%;
}

.deux {
  display: none;
}

.un {
  display: none;
}

@media screen and (min-width: 767.98px) {
  .VueCarousel {
    height: 35em;
  }
}

@media (max-width: 1296px) {
  .deux {
    display: block;
  }
  .trois {
    display: none;
  }
}

@media (max-width: 892px) {
  .deux {
    display: none;
  }
  .un {
    display: block;
  }
  .VueCarousel-wrapper {
    padding-left: 21%;
  }
}
</style>

<script>
export default {
  components: {},
  data() {
    return {
      model: null,
      items: [
        {
          src: require(`../assets/compressed/1.jpeg`),
        },
        {
          src: require(`../assets/compressed/2.jpeg`),
        },
        {
          src: require(`../assets/compressed/3.jpeg`),
        },
        {
          src: require(`../assets/compressed/4.jpeg`),
        },
        {
          src: require(`../assets/compressed/5.jpeg`),
        },
        {
          src: require(`../assets/compressed/6.jpeg`),
        },
        {
          src: require(`../assets/compressed/gas.jpeg`),
        },
        {
          src: require(`../assets/compressed/grace.jpeg`),
        }
      ],
    };
  },
};
</script>
