<template>

  <div class="hello">
    <img v-if='isAdmin' alt="Vue logo" :src="imgSrc">
    <h1>{{ msg }}</h1>
    <h4> Composant HelloWorld </h4>
  </div>



</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    imgSrc:String
},
  data:()=>({
      isAdmin:false,
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
