<template>
  <v-footer class="white darken-4" dark>
    <v-card class="flex contain" flat tile>
      <v-card-title class="white color--1">
        <div class="restriction">
          <p class="center plus asterix">
            [⚠️ Cliquez sur Civil, Religieux ou soirée dansante pour plus d'info. Menu déroulant]
          </p>
          <p class="center"><b>Réponse souhaitée avant le 01 Mars</b></p>
          <!--p class="center asterix">
            Sous réserve des restrictions liées à la Covid, <br/>
            N'hésitez pas à consulter régulièrement ce site 
            où seront indiqués les changements.
          </p-->

          <div class="compte">
            <p class="center right">
              <i>Pour plus d'information, cliquez sur le bouton ci desssous</i>
            </p>
            <a
              class="btn center right"
              href="mailto:bygasndele@gmail.com?&subject=Concernant le mariage"
              >Nous contacter</a
            >
            <p class="center right">
              +243 812919502;
              +243 856860361;
              +243 816891112;
            </p>
          </div>
        </div>
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<style lang="scss">
.v-sheet.v-toolbar:not(.v-sheet--outlined) {
  box-shadow: none !important;
}
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: none !important;
}

.v-footer {
  flex-direction: column;
  margin-top: 14em;
}
.asterix {
  font-size: 12px;
  font-weight: bold;
}
.center {
  text-align: center;
}
.restriction {
  font-family: "Raleway", sans-serif;
  margin: 0 auto;
  font-size: 15px;
}
.color--1 {
  color: #600d11;
}
.plus {
  color: #ff0000;
}
.compte {
  display: flex;
  flex-direction: column;
}
a.btn {
  background-color: #bf027d;
  color: #fff !important;
  padding: 0.5em 1em 0.5em 1em;
  text-decoration: none;
  font-size: 16px;
  margin-left: 1.4em;
  margin: 0 auto;

  &:hover {
    background-color: #600d5e;
    transition: all 0.2s ease-in-out;
  }
}
p {
  hyphens: auto;
}

@media screen and (min-width: 370px) {
  .v-footer {
    margin-top: 12em;
  }
}
@media screen and (min-width: 650px) {
  .restriction {
    margin-top: 0.5em;
    margin-left: 2em;
  }
  .theme--dark.v-card {
    padding-top: 0;
  }
}
@media screen and (min-width: 767.98px) {
  .v-footer {
    margin-top: 0em;
  }
}
@media screen and (min-width: 900px) {
  a.btn {
    margin-left: 17.4em;
  }
}
@media screen and (min-width: 1100px) {
  .compte {
    margin-top: -8em;
  }
  .v-footer {
    margin-top: 0em;
  }
  .center {
    text-align: left;
  }
  .right {
    text-align: right;
  }
  a.btn {
    width: 10em;
    margin: 0 auto;
    margin-left: 50.4em;
  }
}
@media screen and (min-width: 1440px) {
  .v-footer {
    margin-left: 3em;
  }
  a.btn {
    margin: 0 auto;
    margin-left: 57.4em;

    margin-right: 0;
  }
}
</style>

<script>
export default {
  name: "Footer",

  components: {},

  data: () => ({}),
};
</script>
