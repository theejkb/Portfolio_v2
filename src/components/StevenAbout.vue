<template>
  <div class="aboutme-section">
    <div class="aboutme-section-text">
      <img
        class="aboutme-section-img bounce-in"
        src="../assets/img/img-aboutme.jpg"
        alt="photo de steven copy"
      />
      <div class="aboutme-section-text-intro">
        <p>Je m'appelle Steven Copy, j'ai 22 ans et je suis au Campus Ynov à Lyon en Mastere Informatique spécialisée en Développement Web.</p>
        <p>Le domaine de l'Informatique, et particulièrement du Web, correspond entièrement à mes attentes car :</p>
        <ul>
          <li>ll est très vaste et est en pleine croissance</li>
          <li>Il m'apporte la liberté de reflexion (technologies, langages), de création (détails, couleurs) et d'implémentation (méthodes et outils utilisées, structuration etc.)</li>
          <li>L'évolution des technologies et des différents Framework m'apporte apprentissage constant</li>
          <li>La courbe d'apprentissage est casiment infinie, et donc l'apprentissage est nécessaire en permanence</li>
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
          <i class="fab fa-html5 fa-3x grow-rotate" title="HTML"></i>
          <i class="fab fa-css3-alt fa-3x grow-rotate2" title="CSS"></i>
          <i class="fab fa-bootstrap fa-3x grow-rotate" title="Bootstrap"></i>
          <i class="fab fa-vuejs fa-3x grow-rotate2" title="Vuejs / VueCLI"></i>
          <i class="fab fa-js-square fa-3x grow-rotate" title="Javascript"></i>
          <img
            class="grow-rotate"
            src="../assets/img/icon-vuetify.png"
            title="SQL"
            style="width:40px;"
          />
        </div>
        <div class="aboutme-section-column">
          <i class="fab fa-laravel fa-3x grow-rotate2" title="Laravel"></i>
          <i class="fab fa-symfony fa-3x grow-rotate" title="Symfony"></i>
          <i class="fab fa-wordpress fa-3x grow-rotate2" title="Wordpress"></i>
          <i class="fab fa-php fa-3x grow-rotate" title="Php"></i>
          <i class="fab fa-java fa-3x grow-rotate2" title="Java"></i>
          <img
            class="grow-rotate"
            src="../assets/img/icon_sql.png"
            title="SQL"
            style="width:40px; filter: invert(1); -webkit-filter: invert(1); "
          />
        </div>
      </section>
      <h4 class="aboutme-section-transverse-title">Compétences transverses</h4>
      <div class="aboutme-section-transverse">
        <i class="fab fa-github fa-3x grow-rotate2" title="GitHub"></i>
        <i class="fab fa-gitlab fa-3x grow-rotate" title="GitLab"></i>
        <i class="fab fa-trello fa-3x grow-rotate2" title="Trello"></i>
        <i class="fab fa-shopify fa-3x grow-rotate" title="Shopify"></i>
        <i class="fab fa-docker fa-3x grow-rotate2" title="Docker"></i>
        <i class="fab fa-wix fa-3x grow-rotate" title="Wix"></i>
        <i class="fab fa-node fa-3x grow-rotate2" title="NodeJs"></i>
      </div>
      <hr />
      <h2 class="aboutme-section-parcours">Mon Parcours</h2>
      <v-timeline>
        <v-timeline-item v-for="(school, i) in schools" :key="i" :color="school.color" small>
          <template v-slot:opposite>
           
            <span class="headline font-weight-bold">{{school.school}}</span><br>           
            <i class="fas fa-map-marker-alt"></i><span class=""> {{school.location}}</span><br><br>
             <span class="headline font-weight-bold">{{school.year}}</span>

          </template>
          <div class="py-4">
            <h2>{{school.title}}</h2>
            <h6>{{school.option}}</h6>
            <div>{{ school.text }}</div>
            <div v-if="school.electives">
              <br>
              <span class="electives bubble-left"> <a href="https://www.ynov.com/les-electives/">Electives</a>
                </span> : {{school.electives}}
                </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </div>
  </div>
</template>

<script>
export default {
  name: "StevenAbout",
  props: {},
  data: () => ({
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
        electives: "Construisez des sites Web dynamiques avec Vue.js - Accessibilité et Qualité Web ",
      }
    ]
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.aboutme-section {
  background: url(../assets/img/about_bg2.jpg) no-repeat;
  background-size: cover;
  background-position: center;
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
  text-shadow: 0.1em 0.1em #000;
  box-shadow: 0px 0px 49px -14px rgba(0,0,0,0.75);
}

.aboutme-section-text-intro {
  color: #fff;
  text-align: left;
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
}

section div i.fab {
  color: white;
  margin: 5px 5px;
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

.electives{
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
</style>
