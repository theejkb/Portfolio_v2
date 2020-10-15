<template>

  <div >
      <section class="page-section">
        <div class="container">

            <div class="about-heading-content">
              <div class="row">
                <div class="col-xl-9 col-lg-10 mx-auto">
                  <div class="bg-faded rounded p-5">

                    <table class="table">
                      <thead class="thead-dark">
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Nom</th>
                          <th scope="col">Marque</th>
                          <th scope="col">Prix</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(oneCaf,idx) in coffee" :key='idx'>
                          <th scope="row">{{idx}}</th>
                          <td>{{oneCaf.titre}}</td>
                          <td>{{oneCaf.marque}}</td>
                          <td>{{oneCaf.prix}}</td>
                          <td><button @click="goToProductsDetails(oneCaf.id)" type="button" class="btn btn-secondary btn-sm">voir</button></td>
                        </tr>
                      </tbody>
                    </table>



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
  name: 'CoffeeProducts',
  props: {


  },
  data:()=>({
      coffee
  }),
  methods:{
      goToProductsDetails(coffeeId){
          // on redirige en passant bien en param de la route l'id
          this.$router.push({ name:'productsDetails', params:{coffeeId} })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
