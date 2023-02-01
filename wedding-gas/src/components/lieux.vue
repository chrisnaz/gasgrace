<template>
  <v-card class="build">
    <div class="lieux">
      <div class="container--lieux">
        <v-toolbar>
          <template v-slot:extension>
            <v-tabs v-model="tab" align-with-title>
              <v-tabs-slider color="purple"></v-tabs-slider>

              <v-tab v-for="item in mariage" :key="item">
                {{ item.lieu }}
              </v-tab>
            </v-tabs>
          </template>
        </v-toolbar>

        <v-tabs-items v-model="tab">
          <v-tab-item v-for="item in mariage" :key="item">
            <div class="autour" style="display:flex">
              <v-card>
                <a
                  v-bind:href="item.href"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <iframe
                    :src="item.map"
                    width="500"
                    height="350"
                    style="border:0;"
                    allowfullscreen
                  ></iframe>
                </a>
              </v-card>
              <v-card flat>
                <v-card-text>{{ item.name }}</v-card-text>

                <a
                  v-bind:href="item.href"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div style="display:flex;">
                    <img class="iconvcard" :src="map" width="50" height="50" />
                    <v-card-text>{{ item.address }}</v-card-text>
                  </div>
                </a>

                <div style="display:flex;">
                  <img class="iconvcard" :src="clock" height="50" width="50" />
                  <v-card-text>{{ item.time }}</v-card-text>
                </div>

                <!--div :class="item.display">
                  <v-dialog v-model="dialog" width="600">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        class="confirm"
                        color="#bf027d"
                        dark
                        width="40vmin"
                        v-bind="attrs"
                        v-on="on"
                      >
                        Confirmez votre présence
                      </v-btn>
                    </template>

                    <v-card>
                      <v-card-actions style="background-color:white;">
                        <v-card-title
                          class="titre--vcard"
                          style="color:#600d5e"
                        >
                          Entrez vos coordonnées
                        </v-card-title>

                        <v-spacer></v-spacer>

                        <v-btn
                          style="background-color:#bf027d; width:15%;"
                          color="white"
                          text
                          @click="dialog = false"
                        >
                          Fermer
                        </v-btn>
                      </v-card-actions>

                      <Formulaire style="background-color:white;" />
                    </v-card>
                  </v-dialog>
                </div-->
              </v-card>
            </div>
          </v-tab-item>
        </v-tabs-items>
      </div>
    </div>
  </v-card>
</template>

<style lang="scss">
.v-card__text {
  display: block;
  font-family: "Winter Creative", cursive;
  text-transform: none !important;
  font-size: 18px !important;
  color: #632d7e !important;
}

.v-card--flat {
  margin: 0 auto;
  a {
    text-decoration: none;
  }
}

.v-tab {
  font-family: "Winter Creative", cursive;
  text-transform: none !important;
  font-size: 25px !important;
}
.v-tab {
  color: #bf027d !important;
}

iframe {
  width: 100%;
  margin-top: 4em;
}
.autour {
  flex-direction: column-reverse;
  justify-content: center;
}
.v-item-group {
  flex: 0 1 auto;
  position: relative;
  max-width: 100%;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  height: 63vh;
}

@media screen and (max-width: 320px) {
  .v-tab {
    font-size: 18px !important;
  }
  iframe {
    margin-top: 2em;
  }
}
@media screen and (min-width: 370px) {
  button.confirm {
    left: 0em;
  }
  .v-card__text {
    font-size: 24px !important;
  }
}
@media screen and (min-width: 500px) {
  .v-toolbar__content,
  .v-toolbar__extension {
    padding-left: 4em;
  }
  button.confirm {
    left: 1em;
  }
}
@media screen and (min-width: 767.98px) {
  .theme--light.v-toolbar.v-sheet {
    background-color: transparent;
  }
  .theme--light.v-tabs-items {
    background-color: transparent !important;
  }
  .theme--light.v-toolbar.v-sheet {
    background-color: transparent !important ;
  }
  .v-sheet.v-toolbar:not(.v-sheet--outlined) {
    box-shadow: none !important;
  }

  .lieux {
    background: rgba(255,253,230,255);
    background: linear-gradient(
      0deg,
      rgba(220,245,249,255) 0%,
      rgba(198,235,243,255) 40%,
      rgba(167,225,236,255) 62%,
      rgba(153,208,254,255) 100%
    );
    padding: 0.3em 1.5em 0em 1.5em;
    font-family: "Raleway", sans-serif;
    color: #632d7e;
    position: relative;
    height: 32em;
  }
  .container--lieux {
    margin: 0 auto;
    position: relative;
    max-width: 1280px;
    width: 85%;
  }
  .v-application .primary--text {
    color: #bf027d !important;
    caret-color: #bf027d !important;
  }
  .v-application .primary--text {
    color: #bf027d !important;
    caret-color: #bf027d !important;
  }
  .v-application {
    color: #bf027d !important;
    caret-color: #bf027d !important;
  }
  .v-toolbar__content {
    height: 0 !important;
  }
  .v-toolbar__extension {
    height: 48px;
    margin: 0 auto !important;
    position: absolute !important;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
  }
  .v-tab {
    font-size: 32px !important;
    color: #bf027d !important;
  }
  .theme--light.v-tabs > .v-tabs-bar .v-tab--disabled,
  .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active),
  .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-btn,
  .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-icon {
    color: #600d5e !important;
  }
  .autour {
    flex-direction: row;
    justify-content: center;
  }
  .iconvcard {
    display: block;
  }
  .v-card__text {
    font-size: 27px !important;
  }
  button.confirm {
    position: absolute !important;
    left: -1em;
    top: 20em !important;
    width: 45vmin !important;
  }
  .v-card {
    background-color: transparent !important;
  }
  .v-card--flat {
    padding-top: 2em;
  }
  .v-application a {
    color: #632d7e !important;
    font-family: "Raleway", sans-serif !important ;
    text-decoration: none;
    font-size: 18px !important;
  }
  .v-sheet.v-card {
    border-radius: none;
  }
  iframe {
    margin-top: 0;
    margin-right: 3em;
    width: 500px;
  }

  .confirm {
    background-color: #bf027d;
    color: #fff !important;
    padding: 0.5em 1em 0.5em 1em;
    text-decoration: none;
    font-size: 16px;
    margin-left: 1.4em;

    &:hover {
      background-color: #600d5e;
      transition: all 0.2s ease-in-out;
    }
  }
}
@media screen and (min-width: 1100px) {
  button.confirm {
    top: 15em !important;
  }
}
</style>
<script>
//import Formulaire from "./formulaire";

export default {
  name: "lieu",

  components: {
    //Formulaire,
  },

  data() {
    return {
      tab: null,

      dialog: false,

      mariage: [
        {
          lieu: "Civil",
          name: "Bernicia Auberge",
          address: "Bernicia Auberge, Av. Assossa, Kinshasa",
          time: "9h30 à 10h30",
          map:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.383875155144!2d15.302790815365986!3d-4.338827596846419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3149067eef55%3A0x809bc40a9bd3aa70!2sBernicia%20Auberge!5e0!3m2!1sfr!2sbe!4v1675274402428!5m2!1sfr!2sbe",
          href:
            "https://www.google.com/maps/place/Bernicia+Auberge/@-4.3388276,15.3027908,17z/data=!3m1!4b1!4m5!3m4!1s0x1a6a3149067eef55:0x809bc40a9bd3aa70!8m2!3d-4.3388276!4d15.3049795",
          display: "text-center d-none",
        },
        {
          lieu: "Religieux",
          name: "Bernicia Auberge",
          address: "Bernicia Auberge, Av. Assossa, Kinshasa",
          time: "10h30 à 11h30",
          map:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.383875155144!2d15.302790815365986!3d-4.338827596846419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3149067eef55%3A0x809bc40a9bd3aa70!2sBernicia%20Auberge!5e0!3m2!1sfr!2sbe!4v1675274402428!5m2!1sfr!2sbe",
          href:
            "https://www.google.com/maps/place/Bernicia+Auberge/@-4.3388276,15.3027908,17z/data=!3m1!4b1!4m5!3m4!1s0x1a6a3149067eef55:0x809bc40a9bd3aa70!8m2!3d-4.3388276!4d15.3049795",
          display: "text-center d-none",
        },
        {
          lieu: "Soirée dansante",
          name: "Bernicia Auberge",
          address: "Bernicia Auberge, Av. Assossa, Kinshasa",
          time: "19h30",
          map:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.383875155144!2d15.302790815365986!3d-4.338827596846419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3149067eef55%3A0x809bc40a9bd3aa70!2sBernicia%20Auberge!5e0!3m2!1sfr!2sbe!4v1675274402428!5m2!1sfr!2sbe",
          href:
            "https://www.google.com/maps/place/Bernicia+Auberge/@-4.3388276,15.3027908,17z/data=!3m1!4b1!4m5!3m4!1s0x1a6a3149067eef55:0x809bc40a9bd3aa70!8m2!3d-4.3388276!4d15.3049795",
          display: "text-center d-block",
        },
      ],

      clock: require(`../assets/clock.png`),

      map: require(`../assets/map.png`),
    };
  },
};
</script>
