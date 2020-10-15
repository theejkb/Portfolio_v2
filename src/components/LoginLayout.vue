<template>
   <div class='container d-flex justify-content-center'>
       <div class="simple-login-container">
           <h2 class='text-primary'>Login</h2>
           <div class="row">
               <div class="col-md-12 form-group">
                   <input v-model="userForm.email" accept="" type="text" class="form-control" placeholder="Email">
               </div>
           </div>
           <div class="row">
               <div class="col-md-12 form-group">
                   <input v-model="userForm.password" type="password" placeholder="Password?" class="form-control">
               </div>
           </div>
           <div class="row">
               <div class="col-md-12 form-group">
                   <button @click='handleLoginButton' type="button" class="btn btn-dark">ENVOYER</button>
               </div>
           </div>
           <div v-if='loginErrorMsgVisibility' class="alert alert-danger" role="alert">
             Oops something went wrong :(
           </div>
       </div>

   </div>



</template>

<script>

// normalement il s'agirait ici d'aller solliciter une api/login
// en lui passant directement l'object user (en Post)
const fakeLoginInfos = {
     email:'a@b.fr',
     password:'azerty'
}

export default {
  name: 'LoginLayout',
  props: {

  },
  data:()=>({
      userForm:{
            email : '',
            password: ''
      },
      loginErrorMsgVisibility:false,
  }),
  methods:{
      handleLoginButton(){
          if(this.checkAuth()){ // success
               this.redirect()
          }else{ // error
              this.loginErrorMsgVisibility = true;
          }
      },
      checkAuth(){
          return (fakeLoginInfos.email == this.userForm.email && fakeLoginInfos.password == this.userForm.password)
      },
      redirect(){
          console.log('%c Login Success!', 'background: green; color: white; display: block;');
          this.$router.push({name:'home'})
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
