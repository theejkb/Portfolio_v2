<template>
  <div id="app">

       <CoffeeHeader />
      <!-- <CoffeeHome />   -->
      <router-view></router-view>

      <footer class="footer text-faded text-center py-5">
        <div class="container">
          <p class="m-0 small">Copyright &copy; Your Website 2020</p>
        </div>
      </footer>
  </div>
</template>

<script>
  import CoffeeHeader   from './components/CoffeeHeader.vue' // 1° import
 // import CoffeeHome     from './components/CoffeeHome.vue' // 1° import

export default {
  name: 'App',
  components: {
       CoffeeHeader,
      // CoffeeHome // 2° déclaration
    },
    data:()=>({
        title:'Mon title from data '
    })

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
