<template>
  <!-- <div class="navbar">
    <router-link to="/"><div class="bubble-wrapper">
  <div ref="bubble" class="bubble">
    <img class="bubble-image"
         src="../assets/img/logo.png" />
  </div>
  <div ref="bubblePulse" class="bubble-pulse"></div>
</div></router-link>
    <router-link to="/" class="hvr-underline-from-left">HOME</router-link>
    <router-link to="/projects" class="hvr-underline-from-left">PROJECTS</router-link>
    <router-link to="/about" class="hvr-underline-from-left">ABOUT</router-link>
  </div>-->
  <div>
    <nav class="navbar">
      <ul>
        <li>
          <router-link to="/">Accueil</router-link>
        </li>
        <li>
          <router-link to="/about">À propos</router-link>
        </li>
        <li>
          <router-link to="/projects">Mes projets</router-link>
        </li>
        <li>
          <router-link to="/contact">Me contacter</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>

 

export default {
  name: "StevenHeader",
  props: {},
  data: () => ({
        isRouteABoutMore: false,
  }),
  created() {   
  },
  mounted() {
  },      
  methods(){  
  }
};

</script>
<style>
.navbar {
  position: fixed;
  top: 30%;
  left: -200px;
  z-index: 99;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
}

.navbar ul li {
  width: 500px;
}

.navbar ul li a {
  color: #333;
  background-color: #fff;
  width: 95%;
  height: 75px;
  display: inline-block;
  text-decoration: none;
  line-height: 75px;
  text-align: right;
  margin-bottom: 10px;
  font-size: 28px;
  text-transform: uppercase;
  font-weight: 700;
  padding-right: 25px;
  border-radius: 0 50px 50px 0;
  transition: all ease 0.3s;
}

.navbar ul li:nth-child(1) a {
  width: 75%;
}
.navbar ul li:nth-child(2) a {
  width: 70%;
}
.navbar ul li:nth-child(3) a {
  width: 80%;
}
.navbar ul li:nth-child(4) a {
  width: 95%;
}
.navbar ul li a:hover {
  background-color: #000;
  color: #fff;
  width: 100%;
}
.router-link-exact-active {
  background-color: #000 !important;
  color: #fff !important;
  width: 100% !important;
}
</style>
