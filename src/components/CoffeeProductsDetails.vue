<template>

  <div >
      <section class="page-section">
        <div class="container">

            <div class="about-heading-content">
              <div class="row">
                <div class="col-xl-9 col-lg-10 mx-auto">
                  <div class="bg-faded rounded p-5">
                      <div class="media">
                        <img  style="height: 200px" :src="selectedCoffee.images[0]" alt="Generic placeholder image">
                        <div class="media-body text-left ml-3">
                          <h3 class="mt-0">{{selectedCoffee.titre}}</h3>
                            {{selectedCoffee.description}}
                        </div>
                        <span class="badge badge-pill badge-success">{{selectedCoffee.prix}}€</span>
                        <!-- <span class="badge badge-dark">{{selectedCoffee.torrefaction}}</span> -->
                      </div>

                  </div>
                </div>
              </div>
            </div>

        </div>
      </section>
  </div>



</template>

<script>
import { coffee } from '../assets/js/Coffee';
export default {
  name: 'CoffeeProductsDetails',
  props: {


  },
  data:()=>({
      coffee,
      selectedCoffee:{} // nous sommes obligé de l'initialiser même à vide pour avoir la réactivité
  }),
  methods:{

  },
  created(){
      // d'abord on récupère l'id courant qui est dans l'object this.$route
      let { coffeeId }    = this.$route.params;
      this.selectedCoffee = this.coffee.find(oneCaf => oneCaf.id==coffeeId);

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
