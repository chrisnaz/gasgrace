<template>
  <div>
    <div class="section_presentation">
      <div class="div_nono--mobile">
        <div class="right">
          <img
            class="portrait portrait--nono"
            src="../assets/grace.png"
            alt="Portrait Noémie"
          />
        </div>
        <div class="text_nono">
          <h2 class="mariee">La mariée</h2>
          <img class="detail_flowers" src="../assets/iconfleur1.png" />
          <h3 class="name">Grâce Lenda</h3>
          <div class="col colonne">
            <p>
              C'est parque qu'un jour j'ai quitté le home de l'UNIKIN où j'ai fait mes études en anglais et informatique des affaires 
              pour habiter à Mont ngafula sur la rue kimbemba et <br/> devenue voisine de cet homme qui devient ma moitié.
              Si c'était à faire, je passerai par la...
              Sur ce chemin d'hier.
            </p>
            <figure>
              <blockquote>
                <p>J’ai trouvé celui que mon coeur aime</p>
              </blockquote>
              <figcaption>
                Cantique des cantiques 3:4<cite> - La Bible</cite>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div class="div_nono">
        <div class="text_nono">
          <h2 class="mariee">La mariée</h2>
          <img class="detail_flowers" src="../assets/iconfleur1.png" />
          <h3 class="name">Grâce Lenda</h3>
          <div class="col colonne">
            <p>
              C'est parque qu'un jour j'ai quitté le home de l'UNIKIN où j'ai fait mes études en anglais et informatique des affaires 
              pour habiter à Mont ngafula sur la rue kimbemba et <br/> devenue voisine de cet homme qui devient ma moitié.
              Si c'était à faire, je passerai par la...
              Sur ce chemin d'hier.
            </p>
            <figure>
              <blockquote>
                <p>J’ai trouvé celui que mon coeur aime</p>
              </blockquote>
              <figcaption>
                Cantique des cantiques 3:4<cite> - La Bible</cite>
              </figcaption>
            </figure>
          </div>
        </div>
        <div class="right">
          <img
            class="portrait portrait--nono"
            src="../assets/grace.png"
            alt="Portrait Noémie"
          />
        </div>
      </div>
      <div class="div_chris">
        <div class="left">
          <img
            class="portrait portrait--chris"
            src="../assets/gas.png"
            alt="Portrait Christian"
          />
        </div>
        <div class="text_chris">
          <h2 class="mari">Le marié</h2>
          <h3 class="name">Gaël Ndele</h3>
          <img class="detail_flowers" src="../assets/iconfleur2.png" />
          <div class="col colonne">
            <p>
              Le Mushetuman et  Grand Général des célibataires  tomba au combat sur champs de kimbemba, 
              touché par une guerrière à l'aura dévastateur...
              Parce qu'un jour je suis devenu son voisin que pour toujours elle devient ma voisine, 
              ma moitié, mon tout.
            </p>
            <figure>
              <blockquote>
                <p>
                  Qui trouvera une femme de valeur ? Elle vaut bien plus que des
                  perles.
                </p>
              </blockquote>
              <figcaption>Proverbes 31:10<cite> - La Bible</cite></figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>

    <!--div class="section_rencontre">
      <img
        class="detail_flowers5"
        src="../assets/bouquet-1.png"
      />
      <div class="text_meet--mobile">
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <div class="text_meet">
              <p>Quand la France et le Congo</p>
              <p class="magic">se rencontrent...</p>
              <p>en Belgique</p>
            </div>
          </v-col>
        </v-row>
      </div>
      <img
        class="detail_flowers detail_flowers4"
        src="../assets/bouquet-1.png"
      />
      
      <img
        class="maps_mobile"
        src="../assets/meet_mobile.png"
        alt="map belgique"
      />
      <v-img
        class="maps_desktop"
        src="../assets/meet.png"
        alt="map belgique"
      ></v-img>
      
      <div class="text_meet--desktop">
        <p class="pays">Quand la France et le Congo</p>
        <p class="magic">se rencontrent...</p>
        <p class="belgium">en Belgique</p>
      </div>
    </div-->
  </div>
</template>

<style>
.section_presentation {
  margin: 0 auto;
  position: relative;
  max-width: 1280px;
  width: 85%;
  font-family: "Raleway", sans-serif;
  color: #600d5e;
  font-size: 16px;
}
.mariee,
.mari {
  font-family: "Yessy", cursive !important;
  font-weight: 100;
  font-size: 3rem;
  color: #305978;
}
.name {
  font-family: "Winter Creative", cursive;
  font-weight: 100;
  color: #aad7ff;
  font-size: 2.2rem;
}
blockquote p::before {
  content: "\201C";
}
blockquote p::after {
  content: "\201D";
}
blockquote p {
  font-family: "Winter Creative", cursive;
  color: #212121;
  font-size: 18px;
}
.portrait {
  display: block;
  margin: 0 auto;
  width: 90%;
  margin-top: 2em;
}
.section_rencontre {
  background: rgb(145, 17, 151);
  background: linear-gradient(
    0deg,
    rgba(145, 17, 151, 0.36738445378151263) 0%,
    rgba(205, 80, 127, 0.34217436974789917) 40%,
    rgba(247, 100, 41, 0.3785889355742297) 62%,
    rgba(250, 231, 5, 0.4009978991596639) 100%
  );
  padding: 1em 3em 0em 3em;
  position: relative;
  top: 2em;
  height: auto !important;
}
.maps_mobile {
    width: 90%;
    position: absolute;
    top: -3em;
    left: 1em;
    z-index: 0;
}

.maps_desktop,
.text_meet--desktop {
  display: none !important;
}
.div_nono {
  display: none;
}
.text_meet--mobile{
  font-family: "Winter Creative", cursive;
  color: #ff5722;
  font-weight: 100;
  font-size: 1.5em;
  line-height: 3em;
  margin-bottom: 0;
  position: relative;
  z-index: 2;
}
.magic {
  color: #fff;
  margin-top: -0.3em;
  padding-bottom: 1.5em;
}
.detail_flowers,
.detail_flowers5 {
  display: none;
}
p {
  hyphens: auto;
}
@media screen and (min-width: 320px) {
  .magic {
    margin-top: -1.3em;
  }
}
@media screen and (min-width: 370px) {
  .text_meet--mobile{
    font-size: 1.8em;
  }
  .magic{
    margin-top: .7em;
  }
}

@media screen and (min-width: 500px) {
  .text_meet--mobile{
    font-size: 2.6em;
  }
}
@media screen and (min-width: 630px) {
  .maps_mobile {
    width: 65%;
    top: -5em;
    left: 7em;
  }
}

@media screen and (min-width: 767.98px) {
  .div_nono--mobile {
    display: none;
  }
  /*.section_rencontre {
    height: 80Vmin !important;
}*/
  .div_nono {
    display: block;
    position: relative;
    top: 0;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-top: -2em;
  }
  .div_chris {
    position: relative;
    top: 0;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-top: 2em;
    clear: both;
    padding-bottom: 9em;
  }
  .text_nono {
    position: relative;
    width: 100%;
    margin-top: -1em;
    margin-left: 2em;
  }
  .portrait--nono {
    width: 72%;
    margin-right: 1em;
    margin-top: 0;
  }
  .name {
    margin-left: 1.3em;
  }
  .colonne {
    margin-left: 2.7em;
  }
  .portrait--chris {
    width: 45%;
    margin-left: 3em;
    margin-top: 0;
  }
  .text_chris {
    position: absolute;
    width: 36%;
    margin-top: -1em;
    right: 2em;
  }
  .maps_mobile,
  .text_meet {
    display: none;
  }
  .maps_desktop,
  .text_meet--desktop {
    display: block !important;
    font-family: "Winter Creative", cursive;
    color: #bf027d;
    font-size: 2.8em;
    position: absolute;
    top: 1em;
    margin-bottom: 3em;
  }

  .pays {
    margin-left: 1em;
  }
  .magic {
    margin-left: 7.3em;
    margin-top: 0.4em;
  }
  .belgium {
    margin-top: 0em;
    margin-left: 13.5em;
  }
}
@media screen and (min-width: 900px) {
  .div_nono {
    position: relative;
    top: 0;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-top: -2em;
  }
  .div_chris {
    position: relative;
    top: 0;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-top: 4em;
    padding-bottom: 3em;
  }
  .text_nono {
    position: relative;
    width: 50%;
    margin-top: -1em;
    margin-left: 2em;
  }

  .portrait--nono {
    width: 58%;
    margin-right: 3em;
    margin-top: 0;
  }
  .portrait--chris {
    width: 38%;
    margin-left: 4em;
    margin-top: 0;
  }
  .pays {
    margin-left: 1em;
  }
  .magic {
    margin-left: 7.3em;
    margin-top: 0.4em;
  }
  .belgium {
    margin-top: 0em;
    margin-left: 13.5em;
  }
  .detail_flowers {
    display: block;
    width: 3em;
    position: absolute;
    top: 1em;
    left: 12em;
  }
  .detail_flowers4,
  .detail_flowers5 {
    display: none;
  }
}
@media screen and (min-width: 1100px) {
  .div_nono {
    position: relative;
    top: 0;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-top: -6em;
  }
  .pays {
    margin-top: 1em;
    margin-left: 2em;
  }
  .magic {
    margin-left: 11.3em;
    margin-top: 0.4em;
  }
  .belgium {
    margin-top: 3em;
    margin-left: 18.5em;
  }
  .detail_flowers4 {
    display: block;
    width: 14em;
    left: -5em;
    top: -7em;
  }
  .detail_flowers5 {
    display: block;
    position: absolute;
    width: 14em;
    bottom: -6em;
    right: 0; 
  }
}
@media screen and (min-width: 1100px) {
  .section_rencontre {
    height: 90Vmin !important;
  }
}
@media screen and (min-width: 1440px) {
  .magic {
    margin-left: 14.3em;
    margin-top: 0.6em;
  }
  .belgium {
    margin-top: 3em;
    margin-left: 21.5em;
  }
}
</style>
