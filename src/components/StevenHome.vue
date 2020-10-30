<template>
  <div class="home">
    <div class="home-section">
      <div class="home-section-text">
        <h1>Je suis</h1>
        <h1>
          Ste<img class="home-section-text-v" src="../assets/img/vuejs.png" />en COPY
        </h1>
        <h4>Etudiant en Développement Web</h4>

        <!-- <h4>Amateur de League of Legends </h4> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StevenHome",
  props: {},
  data: () => ({})
};
</script>

<style>
.home {
  background: url(../assets/img/home_bg.jpg) no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100% !important;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
}

.home-section-text {
  float: right;
  width: 70%;
  margin-top: 20%;
  padding: 0 50px;
  color: #fff;
  text-shadow: 1px 1px 2px black, 0 0 1em black;
}

.home-section h1 {
  font-size: 88px;
  text-transform: uppercase;
}

.home-section h4 {
  font-size: 38px;
  font-weight: 400;
}
.home-section-text-v {
  width: 70px;
  margin-top: -19px;
}
</style>
