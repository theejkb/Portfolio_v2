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
        </li>-->
      </ul>
    </nav>

    <div class="container">
      <div class="content">
        <nav role="navigation">
          <div id="menuToggle">
            <input id="checkbox" type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <li @click="closeMenu()">
                <router-link to="/">Accueil</router-link>
              </li>
              <li @click="closeMenu()">
                <router-link to="/about">À propos</router-link>
              </li>
              <li @click="closeMenu()">
                <router-link to="/projects">Mes projets</router-link>
              </li>
              <!-- <li>
                  <router-link to="/contact">Me contacter</router-link>
              </li>-->
            </ul>
          </div>
        </nav>
      </div>
    </div>

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
  components: {},
  props: {},
  data: () => ({
    isRouteABoutMore: false
  }),
  created() {},
  mounted() {},
  methods: {
    closeMenu() {
      return (document.getElementById("checkbox").checked = false);
    }
  }
};
</script>
<style>
.beta {
  position: fixed;
  bottom: -110px;
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
  box-shadow: 0px 0px 49px -10px rgba(0, 0, 0, 1);

}

.container {
  display: none;
}

.beta-text {
  margin-top: -10px;
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
/* Menu Mobile */
@media (max-width: 763px) and (min-width: 10px) {
  .navbar {
    display: none;
  }
  a {
    text-decoration: none;
    color: #1e1e23;
    opacity: 1;
    font-family: "work sans", sans serif;
    font-size: 1.5em;
    font-weight: 400;
    transition: 200ms;
    background-color: #fff;
  }

  a:hover {
    opacity: 1;
    border-radius: 15px;
    padding: 10px;
    text-decoration: none;
  }
  .router-link-exact-active {
    border-radius: 15px;
    padding: 10px;
  }
  ul {
    padding: 0;
    list-style-type: none;
  }


  .container {
    margin-top: 0px;
    margin-right: auto !important;
    margin-left: auto !important;
    max-width: 730px !important;
    width: 720px;
    display: flex;
    justify-content: left;
    align-items: flex-end;
  }
  .content {
    width: 100%;
    height: 600px;
    background-color: #ffffff;
    overflow: hidden;
  }
  nav {
    height: 50px;
  }
/* Menu Burger */
  #menuToggle {
    display: flex;
    flex-direction: column;
    position: relative;
    top: 25px;
    left: 15px;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
  }

  #menuToggle input {
    display: flex;
    width: 40px;
    height: 32px;
    position: absolute;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
  }

  #menuToggle span {
    display: flex;
    width: 29px;
    height: 2px;
    margin-bottom: 5px;
    position: relative;
    background: #ffffff;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 5px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  #menuToggle span:first-child {
    transform-origin: 0% 0%;
  }

  #menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  #menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-3px, -1px);
    background: #36383f;
  }
  #menuToggle input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  #menuToggle input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }

  #menu {
    position: absolute;
    width: 100%;
    margin: -16px !important;
    padding: 50px;
    padding-top: 55px;
    background-color: #ffffff;
    -webkit-font-smoothing: antialiased;
    transform-origin: 0% 0%;
    transform: translate(-100%, 0);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }

  #menu li {
    padding: 10px 0;
    transition-delay: 2s;
  }

  #menuToggle input:checked ~ ul {
    transform: none;
  }

  .beta {
    position: fixed;
    bottom: -120px;
    color: black;
    background-color: #fff;
    font-weight: 700;
    font-size: 13px;
    left: 40px;
    border-radius: 15px 15px 0px 0px;
    width: 70px;
    z-index: 99;
    transition: all ease 0.3s;
    animation-iteration-count: 5;
    animation-delay: 5s;
  }

  .beta-text {
    margin-top: -10px;
  }

  .beta:hover {
    bottom: -10px;
    left: 40px;
    width: 70px;
    transition: all ease 0.3s;
    animation-iteration-count: 0;
  }
}
/* Menu Tablette */
@media (max-width: 1023px) and (min-width: 764px) {
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
    font-size: 21px;
    text-transform: uppercase;
    font-weight: 700;
    padding-right: 25px;
    border-radius: 0 50px 50px 0;
    transition: all ease 0.3s;
  }
  .navbar {
    position: fixed;
    top: 30%;
    left: -200px;
    z-index: 99;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }

  .navbar ul li {
    width: 400px;
  }

  .beta {
    position: fixed;
    bottom: -110px;
    color: black;
    background-color: #fff;
    font-weight: 700;
    left: 80px;
    border-radius: 15px 15px 0px 0px;
    width: 100px;
    z-index: 99;
    transition: all ease 0.3s;
    animation-iteration-count: 5;
    animation-delay: 5s;
  }

  .beta-text {
    margin-top: -10px;
  }

  .beta:hover {
    position: fixed;
    bottom: -10px;
    color: black;
    font-weight: 700;
    left: 80px;
    background-color: #fff;
    border-radius: 15px 15px 0px 0px;
    width: 100px;
    z-index: 99;
    transition: all ease 0.3s;
    animation-iteration-count: 0;
  }
}
</style>
