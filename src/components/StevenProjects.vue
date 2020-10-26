<template>
  <div class="projects">
    <div class="projects-section">
      <div class="card-columns">
        <div v-for="project in projects" :key="project.title" class="card">
          <img
            class="card-img-top"
            v-if='project.image' :src="getImgUrl(project.image)"
            alt="Card image cap"
            
          />
          <img 
            class="card-img-top"
            v-else src="../assets/img/vuejs.png"
            alt="no image for this project"
            />
          <div class="card-body">
            <h5 class="card-title">{{project.title}}</h5>
            <p class="card-text">
             {{project.description}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StevenProjects",
  props: {},
  data: () => ({
    projects: [
      {
        title: "Kosmood",
        image: "kosmood_bg.png",
        description:
          "Création d'un site web générateur de moodboard pour les personnes en manque d'inspiration graphique",
        link: "https://www.kosmood.com/",
        stack: [
          "vuejs",
          "symfony",
          "scss",
          "html",
        ],
      },
      {
        title: "YWYMobilier",
        image: "",
        description:
          "Projet de B3 : Création d'un site et d'une application qui met en relation les propriétaires d'appartement à Lyon et les etudiants en recherche d'appartement sur Lyon",
      },
      {
        title: "RadioCalade",
        image: "radiocalade.png",
        description:
          "Stage de deuxième année de BTS - Projet de refonte intégrale du site web de la radio local de Villefranche-sur-Saône",
        link: "https://www.radio-calade.fr/",

      }
    ],
  }),
  methods: {
    getImgUrl(image) {
    return require('../assets/img/' + image)
}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.projects {
  background: url(../assets/img/projects_bg.jpg) no-repeat;
  background-size: cover;
  background-position: center !important;
  width: 100%;
  height: 100% !important;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
}

.projects-section {
  float: right;
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.2);
  width: 67%;
  margin-top: 3%;
  margin-right: 3%;
  margin-bottom: 10%;
  padding: 50px 50px;
  box-shadow: 0px 0px 49px -14px rgba(0, 0, 0, 0.75);
}

.card{
  padding: 5px;
  border-radius: 10px;
}
/* .card:hover{
  width: 300%;
  height: ;
} */

.card-title{
  color:black;
}

.card-text{
  color: black;
  text-align: justify;
}
.card-img-top{
  max-width: 225px;
  border-radius: 10px;
}
</style>
