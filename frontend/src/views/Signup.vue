<template>
     
          <div class="blocsignup">          
            <h2>Pour rejoindre la communauté, merci de remplir ce formulaire</h2>
            <form v-on:submit.prevent="signup" id="form-signup" >
              <div class="form-group">
                <label for="lastname">Nom :</label>
                <input type="text" id="lastname" name="lastname" class="form-control" required 
                pattern="^[^&amp;<>@&quot;()'!_$*€£`+=\/;?#]+$" v-model="inputSignup.lastname"/>
              </div>
              <div class="form-group">
                <label for="firstname">Prénom :</label>
                <input type="text" id="firstname" name="firstname" class="form-control" required 
                pattern="^[^&amp;<>@&quot;()'!_$*€£`+=\/;?#]+$" v-model="inputSignup.firstname"/>
              </div>
              <div class="form-group">
                <label for="jobtitle">Fonction :</label>
                <input type="text" id="jobtitle" name="jobtitle" class="form-control" required
                pattern="^[^&amp;<>@&quot;()'!_$*€£`+=\/;?#]+$" v-model="inputSignup.jobtitle"/>
              </div> 
              <div class="form-group">
                <label for="email">E-mail :</label>
                <input type="email" id="email" name="email" class="form-control" required 
                pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}" v-model="inputSignup.email"/>
              </div>
              <div class="form-group">
                <label for="password">⚠️ Mot de passe :</label>
                <input type="password" id="password" name="password" class="form-control" required
                pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" v-model="inputSignup.password"/>
              </div>  
              <p>⚠️ Minimum 8 caractères dont 1 Majuscule, 1 minuscule et un chiffre</p>
              <button>Connect</button>                                       
            </form> 
             
              <nav class="navlogsign"><p>Vous avez déjà un compte ? <router-link to="/">Connectez-vous</router-link></p></nav> 
          </div> 
</template>


<script>

export default {
    name: 'Signup',

    data() {
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
        signup() {
            let inputDatas = {
                "lastname": this.inputSignup.lastname,
                "firstname": this.inputSignup.firstname,
                "jobtitle": this.inputSignup.jobtitle,
                "email": this.inputSignup.email,
                "password": this.inputSignup.password
            }
            console.log(inputDatas)
            let url = "http://localhost:3000/api/auth/signup"
            let options = {
                method: "POST",
                body: JSON.stringify(inputDatas),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            console.log(options)
            fetch(url, options)
                .then(res => res.json())
                .then((res) => {
                    /*if (res.userId && res.token){*/
                    localStorage.setItem("userId", res.userId);
                    localStorage.setItem("token", res.token);
                    console.log(localStorage)
                    this.$router.push("/");
                    alert(" 🙋‍♂️ Bienvenue sur Groupomania Connect ! Connectez-vous dès à présent ! 🙋‍♀️");

                    /*} */
                })
                .catch(error => console.log(error))
        }
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
  margin: 15px 0px 25px 0px;
  background-color: white;
  color: #0c2444;
}
button:hover {
  transform: scale(1.15);
	opacity: .85;
	-webkit-transition: .3s ease-in;
	transition: .3s ease-out;
}
label {
  display: block;
  width: 25%; 
  text-align: right; 
  font-size: 1.5em;
  margin: auto;
  
}
input, textarea {
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
input:focus, textarea:focus {
  border-color: white;
  box-shadow: 0px 0px 20px #d44c5c;
}
.form-group {
  display: flex;
  justify-content: flex-start;
  padding-bottom: 15px;
  margin: auto;
 }
.blocsignup {
  color: white;
  margin: auto;
  width: 60%; 
	opacity: 0.95;
	padding-top: 20px;
	box-shadow: inset 0px 0px 0px 6px white;
  border: 6px solid #d44c5c;
  border-radius: 30px;
  text-align: center;
  margin-top: 20px;
  background-image: url("../assets/groupback.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
}
.blocsignup p, .blocsignup h2 {
	color: white;
  padding: 0 15px 0 15px;
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
@media screen and (max-width: 768px) {
    .blocsignup {
      width: 80%; 
  }
}
@media screen and (max-width: 450px) {
	.blocsignup {
  width: 90%; 
  box-shadow: inset 0px 0px 0px 8px white;
  border: 5px solid #d44c5c;
  font-size: 0.7em;
}
 .form-group {
  display: flex;
  flex-direction: column;
   
 }
label, input, textarea {
  width: 75%;
  text-align: center;
  }
}
</style>