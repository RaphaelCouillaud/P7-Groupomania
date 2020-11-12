<template>
  <div id="app">
    <header>
      <router-link v-if="userToken" to="/">Home</router-link>
      <img src="../src/assets/logo.png" alt="Logo Groupomania Connect" id="logo" />
      <router-link class="signup" v-if="!userToken" to="/signup">Sign Up</router-link>
      <router-link class="login" v-if="!userToken" to="/login">Sign In</router-link>   
      <a href="logout" v-if="userToken" v-on:click.prevent ="logout" to="/">Log Out</a>
    </header>
    <router-view/>

    <footer>
      <p>Application développée par <a href="agenceweb">CONNECT-E</a></p>
      <p><a href="mentions">Mentions légales</a></p>
    </footer>

  </div>
</template>

<script>
export default {
  data () {
      return {
        userToken: sessionStorage.getItem("jwt") !==null
      }
    },
  methods: {
    logout () {
      sessionStorage.clear();
      window.location.href = "/login";
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
  
}

header {
  background-color: #0c2444;
  

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
