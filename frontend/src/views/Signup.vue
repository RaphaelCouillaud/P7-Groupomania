<template>
     
          <div class="blocsignup">
          
            <h2>Pour rejoindre la communauté, merci de remplir ce formulaire</h2>
            <form v-on:submit.prevent="signup" id="form-signup" >
              <div class="form-group">
                <label for="lastname">Nom :</label>
                <input type="text" id="lastname" name="lastname" class="form-control" required  v-model="inputSignup.lastname"/>
              </div>
              <div class="form-group">
                <label for="firstname">Prénom :</label>
                <input type="text" id="firstname" name="firstname" class="form-control" required v-model="inputSignup.firstname"/>
              </div>
              <div class="form-group">
                <label for="jobtitle">Fonction :</label>
                <input type="text" id="jobtitle" name="jobtitle" class="form-control" required v-model="inputSignup.jobtitle"/>
              </div> 
              <div class="form-group">
                <label for="email">E-mail :</label>
                <input type="email" id="email" name="email" class="form-control" required v-model="inputSignup.email"/>
              </div>
              <div class="form-group">
                <label for="password">Mot de passe :</label>
                <input type="password" id="password" name="password" class="form-control" required v-model="inputSignup.password"/>
              </div>                                        
            </form> 
             <button>Connect</button> 
              <nav class="navlogsign"><p>Vous avez déjà un compte ? <router-link to="/login">Connectez-vous</router-link></p></nav> 
          </div> 
</template>


<script>

export default {
    name: 'Signup',
      
   data () {
        return {
            inputSignup: {
                lastname: "",
                firstname: "",
                jobtitle: "",
                email: "",
                password: ""
            }
        }
    },
    methods: {
        signup () {
            let inputDatas = {
                    "lastname": this.inputSignup.lastname,
                    "firstname": this.inputSignup.firstname,
                    "jobtitle": this.inputSignup.jobtitle,
                    "email": this.inputSignup.email,
                    " password": this.inputSignup.password
                }
            let url = "http://localhost:3000/api/auth/signup"
            let options = {
                    method: "POST",
                    body: JSON.stringify(inputDatas),
                    headers: {'Content-Type': 'application/json'}
                }
            fetch(url, options)
                    .then(res => res.json())
                    .then((res) => {
                        //vérifier la création de l'ID et du token et les stocker dans le localStorage
                        if(res.userId && res.token){
                            localStorage.setItem("userId", res.userId);
                            localStorage.setItem("token", res.token);
                            this.$router.push("login");
                        }                        
                    })
                .catch(error => {
                    this.errorMessage = error
                })
            }
                
    },
    mounted() {
        localStorage.clear();
    }
}
</script>

<style lang="css">

form {
	margin-top: 25px;
}
button {
    width: 120px;
    height: 40px;
    box-shadow: inset 0px 0px 0px 4px white;
  border: 6px solid #d44c5c;
  border-radius: 30px;
  padding: 10px;
  font-family: 'Press Start 2P', cursive;  
 margin: 15px 0 0 0;
 background-color: white;
 color: #0c2444;
}
label {
    display: block;
  width: 20%; 
  text-align: right; 
  font-size: 1.5em;
  margin: auto;
}
input {
  width: 50%;
  height: 3em;
  box-sizing: border-box;  
  outline: none;
  box-shadow: inset 0px 0px 0px 4px white;
  border: 4px solid #d44c5c;
  border-radius: 30px;
  padding: 10px;
  margin: auto;
}
input:focus {
  border-color: white;
  box-shadow: 0px 0px 20px #d44c5c;
}
.form-group {
  display: flex;
  justify-content: flex-start;
  padding-bottom: 15px;
 
}
.blocsignup {
  color: white;
  margin: auto;
  width: 60%; 
  background-color: #0c2444;
	opacity: 0.9;
	padding-top: 50px;
	box-shadow: inset 0px 0px 0px 10px white;
  border: 8px solid #d44c5c;
  border-radius: 30px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
}
.blocsignup p {
	color: white;
}
.navlogsign {
  height: 50px;
  width: 100%;
}
.navlogsign a {
  color: white;
  font-family: 'Press Start 2P', cursive; 
  font-size: 0.75em;
}
.navlogsign a:hover, .navlogsign a:focus {
  color: #d44c5c;
}
</style>