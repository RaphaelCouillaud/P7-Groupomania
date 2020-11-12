<template>
    <form v-on:submit.prevent="signup" method="post" action="/user/signup" class="form">
   
       <label for="firstname">Votre prénom :</label>
       <input v-model="firstname" name="firstname" type="text" id="firstname" required/>       
       <br />
       <label for="lastname">Votre nom :</label>
       <input v-model="lastname" name="lastname" type="text" id="lastname" required/>       
       <br />   
       <label for="jobtitle">Votre fonction :</label>
       <input v-model="jobtitle" name="jobtitle" type="text" id="jobtitle" required/>       
       <br />   
       <label for="email">Votre email :</label>
       <input v-model="email" name="email" type="email" id="email" required/>       
       <br />       
       <label for="password">Votre mot de passe :</label>
       <input v-model="password" name="password" type="password" id="password" required/>
       <button type="submit" name="button" class="buttonlogin"></button>
       
   
</form>
</template>

<script>
export default {
  name: 'SignupForm',
  data () {
      return {
        firstname : "",
        lastname : "",
        jobtitle : "",
        email: "",
        password: "",
      };
},
    props: {},
    methods: {
        signup () {
            this.axios
            .post("http://localhost:3000/user/signup", {
            firstname : this.firstname,
            lastname : this.lastname,
            jobtitle : this.jobtitle,            
            email: this.email,
            password: this.password,
            })
        .then((res) => {
          if (
            typeof res.data.message !== "undefined" &&
            res.data.message === "utilisateur créé!"
          ) {
            window.location.href = "/";
          } else {
            alert ("utilisateur non créé!");           
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};


</script>