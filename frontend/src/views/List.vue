<template>
     
          <div class="blocsignup">
              <Navbar></Navbar>          
            <h2>Derniers messages</h2>
            <form v-on:submit.prevent="sendMessage" id="form-signup" >
              <div class="form-group">
                <label for="title">Titre du message :</label>
                <input type="text" id="title" name="title" class="form-control" required v-model="inputMessage.title"/>
              </div>
              <div class="form-group">
                <label for="image">Lien :</label>
                <input type="url" id="image" name="image" class="form-control" required v-model="inputMessage.image"/>
              </div>
                                     
            </form> 
             
             <button type="submit">Envoyer</button> 
             
          </div> 
</template>


<script>
import Navbar from '../components/Navbar'
export default {
    name: 'List',
     components: {
        Navbar
    },

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
                            this.$router.push("messages");
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