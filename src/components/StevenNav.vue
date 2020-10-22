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
import { TimelineLite, Back, Elastic, Expo } from "gsap";

export default {
  name: "StevenHeader",
  props: {},
  data: () => ({
    timeline: null
  }),
  methods: {},
  created() {},
  mounted() {
    const { bubble, bubblePulse } = this.$refs;
    this.timeline = new TimelineLite({
      onComplete: () => this.timeline.restart()
    });

    this.timeline.to(bubble, 0.4, {
      scale: 0.8,
      rotation: 16,
      ease: Back.easeOut.config(1.7)
    });
    this.timeline.to(
      bubblePulse,
      0.8,
      {
        scale: 0.9,
        opacity: 1
      },
      "-=0.6"
    );
    this.timeline.to(bubble, 1.2, {
      scale: 1,
      rotation: "-=16",
      ease: Elastic.easeOut.config(2.5, 0.5)
    });
    this.timeline.to(
      bubblePulse,
      1.1,
      {
        scale: 2,
        opacity: 0,
        ease: Expo.easeOut
      },
      "-=1.2"
    );
  }
};
</script>
<style>
.navbar {
  position: fixed;
  top: 30%;
  left: -200px;
  z-index: 99;
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
.router-link-exact-active{
  background-color: #000 !important;
  color: #fff !important;
  width: 100% !important;
}


</style>
