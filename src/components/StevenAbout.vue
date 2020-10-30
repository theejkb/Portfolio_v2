<template>
  <div class="about">
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeInRight"
      leave-active-class="animated fadeOutRight"
      key="about"
    >
      <div v-if="show" class="aboutme-section" key="about">
        <div class="aboutme-section-text">
          <img
            class="aboutme-section-img bounce-in"
            src="../assets/img/img-aboutme.jpg"
            alt="photo de steven copy"
          />
          <div class="aboutme-section-text-intro">
            <p>Je m'appelle Steven Copy, j'ai 22 ans et je suis au Campus Ynov à Lyon en Mastere Informatique spécialisé en Développement Web.</p>
            <p>Le domaine de l'Informatique, et particulièrement du Web, correspond entièrement à mes attentes car :</p>
            <ul>
              <li>• ll est très vaste et en pleine croissance</li>
              <li>• Il m'apporte la liberté de reflexion (technologies, langages), de création (détails, couleurs) et d'implémentation (méthodes et outils utilisées, structuration etc.)</li>
              <li>• L'évolution des technologies et des différents Framework m'apportent un apprentissage constant</li>
              <li>• La courbe d'apprentissage étant casiment infinie, il est nécessaire d'apprendre en permanence</li>
            </ul>
          </div>

          <hr />

          <h2 class="aboutme-section-stack">Stack Technique</h2>
          <section class="aboutme-section-stack-tech">
            <div class="aboutme-section-column front">Front</div>
            <div class="aboutme-section-column back">Back</div>
          </section>
          <section class="aboutme-section-stack-tech">
            <div class="aboutme-section-column">
              <a class="tooltips" data="HTML">
                <img class="grow-rotate icon-about" src="../assets/img/icon_html.png" />
              </a>
              <a class="tooltips" data="CSS">
                <img class="grow-rotate2 icon-about" src="../assets/img/icon_css.png" />
              </a>
              <a class="tooltips1" data="Javascript">
                <img class="grow-rotate icon-about" src="../assets/img/icon_javascript.png" />
              </a>
              <a class="tooltips1" data="VueJs">
                <img class="grow-rotate2 icon-about" src="../assets/img/vuejs.png" />
              </a>
              <a class="tooltips1" data="Bootstrap">
                <img class="grow-rotate icon-about" src="../assets/img/icon_bootstrap.png" />
              </a>
              <a class="tooltips1" data="Vuetify">
                <img class="grow-rotate2 icon-about" src="../assets/img/icon_vuetify.png" />
              </a>
            </div>
            <div class="aboutme-section-column">
              <a class="tooltips1" data="Laravel">
                <img class="grow-rotate icon-about" src="../assets/img/icon_laravel.png" />
              </a>
              <a class="tooltips1" data="Symfony">
                <img class="grow-rotate2 icon-about" src="../assets/img/icon_symfony.png" />
              </a>
              <a class="tooltips1" data="PHP">
                <img class="grow-rotate2 icon-about" src="../assets/img/icon_php.png" />
              </a>
              <a class="tooltips" data="Java">
                <img class="grow-rotate icon-about" src="../assets/img/icon_java.png" />
              </a>
              <a class="tooltips" data="SQL">
                <img class="grow-rotate2 icon-about" src="../assets/img/icon_sql.png" />
              </a>
            </div>
          </section>

          <h4 class="aboutme-section-transverse-title">Compétences transverses</h4>
          <div class="aboutme-section-transverse">
            <a class="tooltips" data="Wordpress">
              <img class="grow-rotate icon-about" src="../assets/img/icon_wordpress.png" />
            </a>
            <a class="tooltips" data="GitHub">
              <img class="grow-rotate icon-about" src="../assets/img/icon_github.png" />
            </a>
            <a class="tooltips" data="GitLab">
              <img class="grow-rotate2 icon-about" src="../assets/img/icon_gitlab.png" />
            </a>
            <a class="tooltips" data="Trello">
              <img class="grow-rotate icon-about" src="../assets/img/icon_trello.png" />
            </a>
            <a class="tooltips" data="Docker">
              <img class="grow-rotate2 icon-about" src="../assets/img/icon_docker.png" />
            </a>
            <a class="tooltips" data="Wix">
              <img class="grow-rotate icon-about" src="../assets/img/icon_wix.png" />
            </a>
            <a class="tooltips" data="NodeJs">
              <img class="grow-rotate2 icon-about" src="../assets/img/icon_node.png" />
            </a>
            <a class="tooltips" data="Shopify">
              <img class="grow-rotate icon-about" src="../assets/img/icon_shopify.png" />
            </a>
          </div>

          <hr />

          <h2 class="aboutme-section-parcours">Mon Parcours</h2>
          <v-timeline>
            <v-timeline-item v-for="(school, i) in schools" :key="i" :color="school.color" small>
              <template v-slot:opposite>
                <span class="headline font-weight-bold">{{school.year}}</span>
                <br />
                <span class="headline font-weight-bold">{{school.school}}</span>
                <br />
                <i class="fas fa-map-marker-alt"></i>
                <span class>{{school.location}}</span>
              </template>
              <div class="py-4">
                <h2>{{school.title}}</h2>
                <h6>{{school.option}}</h6>
                <div>{{ school.text }}</div>
                <div v-if="school.electives">
                  <br />
                  <span class="electives bubble-left">
                    <a href="https://www.ynov.com/les-electives/">Electives</a>
                  </span>
                  : {{school.electives}}
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
          <br />
          <!-- <v-btn
            class="btn-aboutmore grow-shadow"
            name="view"
            :value="view"
            @click="show = showmore"
            rounded
            elevation="24"
          >En savoir plus sur moi</v-btn>-->
          <component v-bind:is="view"></component>
        </div>
      </div>
    </transition>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeInLeft"
      leave-active-class="animated fadeOutLeft"
      key="about"
    >
      <div v-if="!show" class="aboutme-section-more" key="aboutmore">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div class="aboutme-section-text">
          <p>Je suis passionné par les sports à moteur et plus particulièrement par la Moto. Depuis mon jeune âge, je pratique la moto-cross. Ce sport de fait sur terrain homologué et nécessite une licence pilote.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            aliquid obcaecati est repellat impedit deleniti voluptas
            amet, inventore tempora nesciunt itaque laborum ipsum eligendi ullam
            nihil necessitatibus dolores commodi soluta!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            aliquid obcaecati est repellat impedit deleniti voluptas
            amet, inventore tempora nesciunt itaque laborum ipsum eligendi ullam
            nihil necessitatibus dolores commodi soluta!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            aliquid obcaecati est repellat impedit deleniti voluptas
            amet, inventore tempora nesciunt itaque laborum ipsum eligendi ullam
            nihil necessitatibus dolores commodi soluta!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            aliquid obcaecati est repellat impedit deleniti voluptas
            amet, inventore tempora nesciunt itaque laborum ipsum eligendi ullam
            nihil necessitatibus dolores commodi soluta!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            aliquid obcaecati est repellat impedit deleniti voluptas
            amet, inventore tempora nesciunt itaque laborum ipsum eligendi ullam
            nihil necessitatibus dolores commodi soluta!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            aliquid obcaecati est repellat impedit deleniti voluptas
            amet, inventore tempora nesciunt itaque laborum ipsum eligendi ullam
            nihil necessitatibus dolores commodi soluta!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            aliquid obcaecati est repellat impedit deleniti voluptas
            amet, inventore tempora nesciunt itaque laborum ipsum eligendi ullam
            nihil necessitatibus dolores commodi soluta!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            aliquid obcaecati est repellat impedit deleniti voluptas
            amet, inventore tempora nesciunt itaque laborum ipsum eligendi ullam
            nihil necessitatibus dolores commodi soluta!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            aliquid obcaecati est repellat impedit deleniti voluptas
            amet, inventore tempora nesciunt itaque laborum ipsum eligendi ullam
            nihil necessitatibus dolores commodi soluta!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            aliquid obcaecati est repellat impedit deleniti voluptas
            amet, inventore tempora nesciunt itaque laborum ipsum eligendi ullam
            nihil necessitatibus dolores commodi soluta!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            aliquid obcaecati est repellat impedit deleniti voluptas
            amet, inventore tempora nesciunt itaque laborum ipsum eligendi ullam
            nihil necessitatibus dolores commodi soluta!
          </p>
        </div>
        <button @click="show = !show" class="icon icon-back aboutmore-btn-retour">
          <a class="icon-back">
            <i class="fa fa-chevron-circle-left icon"></i>
            Retour
          </a>
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "StevenAbout",
  components: {},
  props: {},
  data: () => ({
    show: true,
    schools: [
      {
        year: "2017 - 2019",
        title: "BTS SIO",
        school: "Centre Scolaire Notre Dame",
        location: "Villefranche-sur-Saône",
        option: "Solutions Logicielles et Applications Métier",
        text:
          "Apprentissage des bases de la programmation Web (Normal et MVC avec Laravel) -  Découverte de la POO (Java), Modélisation objet (UML), Bases de données (Modèle conceptuel, modèle relationnel) - Données : Programmation PL-SQL, déclencheurs ; XML"
      },
      {
        year: "2019 - 2020",
        title: "Bachelor Informatique",
        school: "Ynov Campus",
        location: "Lyon 7e",
        option: "Technologies Web",
        text:
          "Dev Web avancé Front (VueJs) - Framework Web Back (Laravel) - Développement asynchrone (NodeJs) - Développement Mobile (Flutter)"
      },
      {
        year: "2020 - 2020",
        title: "Mastère",
        school: "Ynov Campus",
        location: "Lyon 7e",
        option: "Expert Développement Web",
        text:
          "Coordination développement Front et Back - Web Full Stack - Séparatation Back-end / Front-end - Web mobile - Web Services - Architecture logicielle",
        electives:
          "Construisez des sites Web dynamiques avec Vue.js - Accessibilité et Qualité Web "
      }
    ]
  }),
  methods: {},
  destroyed() {}
};
</script>

 <style>
.about {
  height: 100% !important;
  background-position: center !important;
  width: 100%;
  height: 100% !important;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
}

.aboutme-section {
  background: url(../assets/img/about_bg2.jpg) no-repeat;
  background-size: cover;
  background-position: center !important;
  width: 100%;
  height: 100% !important;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
}

.aboutme-section-text {
  float: right;
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.2);
  width: 67%;
  margin-top: 3%;
  margin-right: 3%;
  margin-bottom: 10%;
  padding: 50px 50px;
  text-shadow: 0.07em 0.07em #000;
  box-shadow: 0px 0px 49px -14px rgba(0, 0, 0, 0.75);
}

.aboutme-section-more {
  background-position: center !important;
  width: 100%;
  height: 100% !important;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  background: rgb(62, 27, 27);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(181, 190, 252, 1) 100%
  );
  background-size: cover;
}

.aboutme-section-text-intro {
  color: #fff;
  text-align: left;
  margin-top: 15px;
}

div.aboutme-section-text-intro p {
  margin-bottom: 1.5rem;
}

.aboutme-section-img {
  float: left;
  border-radius: 75px;
  margin-right: 30px;
  margin-top: -10px;
  margin-left: -20px;
  width: 150px;
  border: 2px solid white;
  transition: 0.3s ease-out;
}
.aboutme-section-text ul li {
  list-style: none;
  margin-bottom: 5px;
  margin-top: 10px;
  margin-left: 25px;
}

/* espacement */
hr {
  margin-top: 35px;
  margin-bottom: 35px;
  background-color: #fff;
}

.aboutme-section-text ul li::nth-child(1) {
  margin-left: 30%;
  text-align: left;
}

.aboutme-section-stack {
  text-align: center;
  text-transform: uppercase;
}

section.aboutme-section-stack-tech {
  width: 100%;
  margin: 0 auto;
  display: flex;
}

.front,
.back {
  font-size: 22px;
  font-weight: bold;
}

/* front */
section div.aboutme-section-column:first-child {
  margin: 10px;
  flex-grow: 1;
  flex-shrink: 1;
  text-align: left;
}

/* back */
section div.aboutme-section-column:last-child {
  text-align: right;
  margin: 10px;
}

div img.icon-about {
  margin: 5px 5px;
  max-width: 50px;
  width: 100% !important;
}

div a.tooltips {
  display: inline;
}

div a.tooltips:hover {
  position: relative;
}

div a.tooltips[data]:hover:after {
  content: attr(data);
  padding: 4px 8px;
  color: #333;
  position: absolute;
  left: 0;
  top: 230%;
  white-space: nowrap;
  z-index: 20px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-box-shadow: 0px 0px 4px #222;
  -webkit-box-shadow: 0px 0px 4px #222;
  box-shadow: 0px 0px 4px #222;
  text-shadow: none !important;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.5);
}

div a.tooltips1 {
  display: inline;
}

div a.tooltips1:hover {
  position: relative;
}

div a.tooltips1[data]:hover:after {
  content: attr(data);
  padding: 4px 8px;
  color: #333;
  position: absolute;
  left: 0;
  bottom: 230%;
  white-space: nowrap;
  z-index: 20px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-box-shadow: 0px 0px 4px #222;
  -webkit-box-shadow: 0px 0px 4px #222;
  box-shadow: 0px 0px 4px #222;
  text-shadow: none !important;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.5);
}

.aboutme-section-transverse-title {
  margin: 10px;
  margin-bottom: 25px;
}

.aboutme-section-transverse {
  margin: 10px;
}

.aboutme-section-parcours {
  text-transform: uppercase;
  text-align: center;
}

.btn-aboutmore {
  text-decoration: none;
  color: #000;
}

.aboutme-section-stack-tech a, .aboutme-section-transverse a{
  background-color: none !important;
}

.aboutmore-btn-retour {
  margin-top: 5%;
  margin-left: 3%;
  position: fixed;
  width: 10%;
}
.aboutmore-btn-retour a {
  padding: 15px;
  background-color: #fff;
  font-size: 18px;
  border-radius: 100px;
  font-weight: bold;
  color: #333 !important;
  text-decoration: none !important;
}

.aboutmore-btn-retour a:active {
  background-color: #000;
  color: #fff !important;
  text-decoration: none;
}
span.electives{
  color: #fff;
  text-shadow: black 0.1em 0.1em 0.2em;
  text-decoration: underline;
  font-weight: 700;
}



/* Icon Back */
.icon-back {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.1s;
  transition-duration: 0.1s;
}
.icon-back .icon {
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-transition-duration: 0.1s;
  transition-duration: 0.1s;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.icon-back:hover .icon,
.icon-back:focus .icon,
.icon-back:active .icon {
  -webkit-transform: translateX(-4px);
  transform: translateX(-4px);
}

/* grow and shadow */
.grow-shadow {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow, transform;
  transition-property: box-shadow, transform;
}
.grow-shadow:hover,
.grow-shadow:focus,
.grow-shadow:active {
  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

/* Bounce-in css for image */
.bounce-in {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
}
.bounce-in:hover,
.bounce-in:focus,
.bounce-in:active {
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
  -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
  transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
}

/* grow and rotate */
.grow-rotate,
.grow-rotate2 {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}

.grow-rotate:hover,
.grow-rotate:focus,
.grow-rotate:active {
  -webkit-transform: scale(1.1) rotate(4deg);
  transform: scale(1.1) rotate(4deg);
}

.grow-rotate2:hover,
.grow-rotate2:focus,
.grow-rotate2:active {
  -webkit-transform: scale(1.1) rotate(-4deg);
  transform: scale(1.1) rotate(-4deg);
}
@import url("https://fonts.googleapis.com/css?family=Exo:400,700");

* {
  margin: 0px;
  padding: 0px;
}

body {
  font-family: "Exo", sans-serif;
}

.context {
  width: 100%;
  position: absolute;
  top: 50vh;
}

.context h1 {
  text-align: center;
  color: #fff;
  font-size: 50px;
}

.v-timeline-item {
  display: flex;
}

@media (max-width: 763px) and (min-width: 470px) {
  .aboutme-section-text {
    margin: auto;
    float: none;
    overflow: hidden;
    width: 70%;
    margin-top: 80px;
    margin-bottom: 40px;
  }
  span.electives{
    color: #007bff;
    text-shadow: black 0.1em 0.1em 0.2em;
    font-size: 12px;
    text-decoration: underline;
    font-weight: 700;

  }

  .aboutme-section-img {
    margin: auto;
    float: none;
    margin-bottom: 30px;
  }

  .v-timeline-item {
    display: inline;
  }

  .v-timeline {
    width: 200%;
  }
}

@media (max-width: 469px) and (min-width: 10px) {
  .aboutme-section-text {
    margin: auto;
    float: none;
    overflow: hidden;
    font-size: 14px;
    width: 70%;
    margin-top: 80px;
    margin-bottom: 40px;
    padding: 20px;
  }

  .aboutme-section-img {
    margin: auto;
    float: none;
    margin-bottom: 30px;
  }

  .v-timeline-item {
    display: inline;
  }

  .v-timeline-item__opposite {
    margin-bottom: 50px;
  }

  .v-timeline {
    width: 200%;
  }
}














.circles {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 142%;
  overflow: hidden;
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 25s linear infinite;
  bottom: -150px;
}

.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}
</style>
