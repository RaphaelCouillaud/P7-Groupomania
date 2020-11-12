<template>
    <form v-on:submit.prevent="login" method="post" action="/user/login" class="form">
   
       <label for="email">Votre email :</label>
       <input v-model="email" name="email" type="email" id="email" required/>       
       <br />
       <p class="errorpassword" v-show="ErrorPassword">Mot de passe incorrect !</p>
       <label for="password">Votre mot de passe :</label>
       <input v-model="password" name="password" type="password" id="password" required/>
       <button type="submit" name="button" class="buttonlogin"></button>
       <div class="noaccount">
           <p><router-link to="signup">Pas de compte ? inscrivez-vous !</router-link></p>
       </div>
   
</form>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
      return {
        email: "",
        password: "",
        userId: "",
        ErrorPassword: false,
      };
},
    props: {},
    methods: {
        login () {
            this.axios
            .post("http://localhost:3000/user/login", {
            email: this.email,
            password: this.password,
            })
        .then((res) => {
          if (
            typeof res.data.message !== "undefined" &&
            res.data.message === "utilisateur non trouvé!"
          ) {
              this.isError= true;
          } else {
            sessionStorage.setItem("jwt", res.data.token);
            sessionStorage.setItem("userId", res.data.userId);
            sessionStorage.setItem("isAdmin", res.data.isAdmin);
            this.isError= false;
            window.location.href = "/";
          }
        })
        .catch((err) => {
          console.log(err);
          this.isError= true;
        });
    },
  },
};


</script>