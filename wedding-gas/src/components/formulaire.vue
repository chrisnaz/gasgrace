<template>
  <v-container class="formulaire">
    <v-row class="text-center">
      <v-col class="mb-5" cols="12">
        <template>
          <v-dialog v-model="dialog" persistent max-width="310">
            <template v-slot:activator="{ on, attrs }">
              <validation-observer ref="observer" v-slot="{ invalid }">
                <v-form class="Form" @submit.prevent="createData">
                  <validation-provider
                    v-slot="{ errors }"
                    name="nom"
                    rules="required"
                  >
                    <v-text-field
                      v-model="lastName"
                      label="Nom"
                      name="lastName"
                      required
                      :error-messages="errors"
                    ></v-text-field>
                  </validation-provider>

                  <validation-provider
                    v-slot="{ errors }"
                    name="prénom"
                    rules="required"
                  >
                    <v-text-field
                      v-model="firstName"
                      label="Prénom des personnes séparés par une virgule"
                      name="firstName"
                      required
                      :error-messages="errors"
                    ></v-text-field>
                  </validation-provider>

                  <validation-provider
                    v-slot="{ errors }"
                    name="email"
                    rules="required|email"
                  >
                    <v-text-field
                      v-model="email"
                      label="Email"
                      name="email"
                      required
                      :error-messages="errors"
                    ></v-text-field>
                  </validation-provider>

                  <validation-provider
                    v-slot="{ errors }"
                    name="nombre de personnes"
                    rules="required"
                  >
                    <v-select
                      v-model="number"
                      label="Nombre de personnes"
                      name="number"
                      :items="items"
                      required
                      :error-messages="errors"
                    ></v-select>
                  </validation-provider>

                  <v-btn
                    type="submit"
                    color="success"
                    v-bind="attrs"
                    v-on="on"
                    :disabled="invalid"
                    >Envoyer</v-btn
                  >
                </v-form>
              </validation-observer>

              <v-col>
                <p style="color:blue;" v-if="responseSuccess">
                  {{ Message }}
                </p>
                <p style="color: red" v-else>
                  {{ message }}
                </p>
              </v-col>
            </template>

            <div>
              <v-card v-if="responseSuccess">
                <v-toolbar class="Respon" color="pink lighten-1" dark
                  >Success</v-toolbar
                >
                <v-card-text style="background-color:white;"
                  >{{ Message }}
                </v-card-text>
                <v-card-actions style="background-color:white;">
                  <v-spacer></v-spacer>
                  <v-btn
                    onClick="window.location.reload();"
                    style="background-color:pink"
                    color="white"
                    text
                    @click="dialog = false"
                  >
                    Ok
                  </v-btn>
                </v-card-actions>
              </v-card>

              <v-card v-else>
                <v-toolbar class="Respon" color="red lighten-1" dark
                  >Error</v-toolbar
                >
                <v-card-text style="background-color:white;"
                  >{{ message }} <br />
                  Veuillez réassayer</v-card-text
                >
                <v-card-actions style="background-color:white;">
                  <v-spacer></v-spacer>
                  <v-btn
                    class="envoyez"
                    style="background-color:red"
                    color="white"
                    text
                    @click="dialog = false"
                  >
                    Retour
                  </v-btn>
                </v-card-actions>
              </v-card>
            </div>
          </v-dialog>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
.v-card__actions {
  background: rgb(145, 17, 151);
  background: linear-gradient(
    180deg,
    rgba(145, 17, 151, 0.20772058823529416) 0%,
    rgba(250, 231, 5, 0.23012955182072825) 100%
  );
}
.formulaire {
  background: rgb(145, 17, 151);
  background: linear-gradient(
    0deg,
    rgba(145, 17, 151, 0.20772058823529416) 0%,
    rgba(205, 80, 127, 0.22172619047619047) 20%,
    rgba(247, 100, 41, 0.23573179271708689) 35%,
    rgba(250, 231, 5, 0.23012955182072825) 100%
  );
}

.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
  background-color: #600d5e !important;
}
.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
  background-color: #600d5e !important;
}
.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
  background-color: #600d5e !important;
}
.titre--vcard {
  font-family: "Winter Creative", cursive;
  font-size: 40px;
}
.envoyez {
  background-color: #600d5e !important;
  color: #fff !important;
  .success {
    background-color: #600d5e !important;
  }
}
.v-btn:before {
  background-color: #600d5e !important;
}
</style>

<script>
import api from "../service/apiService";

import { required, digits, email, max, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";
import axios from "axios";

setInteractionMode("eager");

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("required", {
  ...required,
  message: "{_field_} est obligatoire",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
});

extend("email", {
  ...email,
  message: "l'email doit être valide",
});

export default {
  name: "Formulaire",

  components: {
    ValidationProvider,
    ValidationObserver,
  },

  data: () => ({
    // Data
    lastName: "",
    firstName: "",
    email: "",
    number: null,

    message: "",
    Message: "",

    items: ["1", "2", "3", "4", "5"],

    responseSuccess: true,
    countdata: true,

    ruleForPhone: [
      (v) => (v && v >= 10) || "Le numéro doit être d'au moins 10 chiffres",
      //(v) => (v && v <= 16) || "Le numéro ne doit pas dépasser 16 chiffres",
    ],
    dialog: false,
  }),

  methods: {
    readData: async function() {
      const n = await api.readData;
      return n;
    },

    createData: async function() {
      const resquestData = {
        lastName: this.lastName,
        firstName: this.firstName,
        email: this.email,
        number: parseInt(this.number),
      };

      axios
        .post(`https://nonochris.herokuapp.com/api/wedNonoChris`, resquestData)
        .then()
        .catch((error) => {
          this.responseSuccess = false;
          this.message = error.response.data.email;
        });

      this.responseSuccess = true;
      this.Message =
        resquestData.firstName + ", votre inscription a été enregistrée";
    },
  },

  mounted() {},
};
</script>

<style>
.Form {
  border-style: ridge;
  border-color: rgb(255, 213, 159);
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

button {
  width: 50%;
}

.Row {
  width: 100%;
}

ul {
  text-align: center;
}

.Respon {
  padding-top: 8%;
}

@media (max-width: 767px) {
  .Respon {
    padding-top: 0%;
  }
}
</style>
