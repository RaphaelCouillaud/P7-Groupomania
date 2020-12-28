<template>
     
          <div class="blocsignup">
           
            <h2>Connectez-vous et profitez des derniers messages !</h2>
            <form v-on:submit.prevent="login" id="form-login" >
              
              <div class="form-group">
                <label for="email">E-mail :</label>
                <input type="email" id="email" name="email" class="form-control" required v-model="inputLogin.email"/>
              </div>
              <div class="form-group">
                <label for="password">Mot de passe :</label>
                <input type="password" id="password" name="password" class="form-control" required v-model="inputLogin.password"/>
              </div>                                        
            </form> 
             <button>Connect</button> 
             <nav class="navlogsign"><p>Pas encore inscrit ? <router-link to="/signup">Connectez-vous</router-link></p></nav>
          </div>  
</template>


<script>

export default {
    name: 'Login',
      
   data () {
        return {
            inputLogin: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        signup () {
            
        }
    }
}

</script>

<style lang="css">


</style>