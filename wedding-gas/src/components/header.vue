<template>
  <div class="header">
    <v-img class="bg" src="../assets/lesmariees.jpeg">
      <div class="list">
        <!--a class="transparent"
          href="https://kadolog.com/fr/list/liste-de-mariage-de-noemie-christian"
          target="_blank"
          rel="noopener noreferrer"
        >
          <v-btn rounded color="#bf027d" dark width="47vmin">
            Liste de mariage
          </v-btn>
        </a-->
      </div>

      <v-row class="ok" align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="mb-4 title--big">Grâce & Gaël </h1>
          <p class="small--text">se marient </p>
          <p class="small--text date">Le 01 Avril 2023 </p>
        </v-col>
      </v-row>
    </v-img>
    <img class="bouquet" src="../assets/bouquet-3.png" />
  </div>
</template>

<style>
.ok {
  margin-top: 60vh;
}

.transparent {
  text-decoration: none;
}

.list {
  text-align: right;
}

@media (max-width: 640px) {
  .ok {
    margin-top: 45vmin;
  }
}

@media (max-width: 365px) {
  .ok {
    margin-top: 35vmin;
  }
}

@media (max-width: 320px) {
  .title--big {
    font-size: 2.2rem !important;
  }
}
/*@media (max-width: 450px) {
  .ok {
    margin-top: 27vh;
  }
}
@media (max-width: 320px) {
  .title--big {
    font-size: 2.2rem !important;
  }
}*/
.bg {
  height: 100vmin;
}
.header {
  margin-bottom: -3em;
}
.title--big {
  font-family: "Winter Creative", cursive;
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
}
.small--text {
  font-family: "Winter Creative", cursive;
  font-weight: bold;
  font-size: 1.5rem;
  margin-top: -0.7em;
  color: #fff;
}
.bouquet {
  width: 19vw;
  position: relative !important;
  top: -3em;
  margin-bottom: 17em;
  margin: 0 auto;
  display: block;
  z-index: 1;
  
}

@media screen and (min-width: 767.98px) {
  .small--text {
    font-size: 2rem;
    font-weight: bold;
  }
  .date {
    font-size: 2rem;
    font-weight: bold;
  }
  .bouquet {
    /*width: 30%;*/
    top: -5em;
  }
}
@media screen and (min-width: 1100px) {
  .title--big {
    font-size: 3.8rem;
  }
}
</style>
