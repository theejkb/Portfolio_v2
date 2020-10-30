<template>  
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
        <!-- <li>
          <router-link to="/contact">Me contacter</router-link>
        </li> -->
      </ul>
    </nav>
    <div class="beta animated pulse">
     <p class="beta-title">BETA</p> 
      <p class="beta-text">
        Ce site web n'est pas encore terminé.
        <br />Il est en cours de construction
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "StevenHeader",
  props: {},
  data: () => ({
    isRouteABoutMore: false
  }),
  created() {},
  mounted() {},
  methods() {}
};
</script>
<style>
.beta {
  position: fixed;
  bottom: -130px;
  color: black;
  background-color: #fff;
  font-weight: 700;
  left: 150px;
  border-radius: 15px 15px 0px 0px;
  width: 100px;
  z-index: 99;
  transition: all ease 0.3s;
  animation-iteration-count: 5; 
  animation-delay: 5s;

}

.beta-text {
  margin-top: 25px;
  color: black;
  font-weight: 400;
  font-size: 0.7em;
  text-align: center;
  padding: 5px;
}

.beta:hover {
  position: fixed;
  bottom: -10px;
  color: black;
  font-weight: 700;
  left: 150px;
  background-color: #fff;
  border-radius: 15px 15px 0px 0px;
  width: 100px;
  z-index: 99;
  transition: all ease 0.3s;
  animation-iteration-count: 0; 
}

.navbar {
  position: fixed;
  top: 30%;
  left: -230px;
  z-index: 99;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
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

@media (min-width: 1024px) and (max-width: 1200px){
  
}
</style>
