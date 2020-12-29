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
              <button>Connect</button>                                     
            </form> 
              
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
        login() {
                let loginDatas = {
                    "email": this.inputLogin.email,
                    "password": this.inputLogin.password
                }
                console.log(loginDatas)
                let url = "http://localhost:3000/api/auth/login"
                let options = {
                    method: "POST",
                    body: JSON.stringify(loginDatas),
                    headers: {'Content-Type': 'application/json'}  
                }           
                fetch(url, options)
                    .then(res => res.json())
                    .then((res) => {                        
                        if (res.userId && res.token){
                            localStorage.setItem("userId", res.userId)
                            localStorage.setItem("token", res.token)
                            console.log(localStorage)
                            this.$router.push("message");
                        }                        
                    })
                    .catch(error => console.log(error))
                    }   
              },
     
   mounted() {
        localStorage.clear();
    }
}    


</script>

<style lang="css">


</style>