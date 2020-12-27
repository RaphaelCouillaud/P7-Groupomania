<template>
     
          <div class="blocsignup">
           <NavDisconnected></NavDisconnected>
            <h2>Pour rejoindre la communauté Groupomania, merci de remplir ce formulaire</h2>
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
             <button></button> 
          </div>  
</template>


<script>
import NavDisconnected from '../components/NavDisconnected.vue'
export default {
    name: 'Signup',
    components: { NavDisconnected },   
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
            
        }
    }
}

</script>

<style lang="css">

form {
	margin-top: 25px;
}
button {
    width:80px;
    height:80px;
    box-shadow: inset 0px 0px 0px 4px white;
  border: 6px solid #d44c5c;
  border-radius: 50%;
  background-image: url("../assets/iconconnect.jpg");
 background-size: contain;
 margin: 15px 0 30px 0;
}
label {
    display: block;
  width: 15%; 
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
}
.blocsignup p {
	color: white;
}
</style>