<template>

  <div >
      <h1 class="site-heading text-center text-white d-lg-block">
        <span class="site-heading-upper text-primary mb-3">Un Theme bootstrap pas du tout volé  (◔◡◔✿)</span>
        <span class="site-heading-lower">CoffeeHeader</span>
      </h1>
      <!-- Navigation -->
      <nav class="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
        <div class="container">
          <a class="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" href="#">Ynov Coffee</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav mx-auto">
              <li class="px-lg-4">
                <!-- <a class="nav-link text-uppercase text-expanded" href="index.html">Home
                  <span class="sr-only">(current)</span>
                </a> -->
                <router-link class="text-uppercase text-expanded headerlink " to="/home">Home</router-link>

              </li>
              <li class="px-lg-4">
                <router-link class="text-uppercase text-expanded headerlink " to="/about">About</router-link>
              </li>
              <li class="px-lg-4">
                <router-link class="text-uppercase text-expanded headerlink " to="/products">Products</router-link>
              </li>
              <li class="px-lg-4">
                <router-link class="text-uppercase text-expanded headerlink " to="/store">Store</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  </div>



</template>

<script>




export default {
  name: 'CoffeeHeader',
  props: {

  },
  data:()=>({
  }),
  methods:{

  },
  created() {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .router-link-active{
        color:#e6a756 !important;
    }
    .headerlink{
        color:#fff;
    }
</style>
