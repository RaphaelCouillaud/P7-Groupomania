<template>
  <div id="app">
    
    <router-view/>

    <footer>
       <p><a href="politique">Politique de confidentialité</a></p>
      <p>Application développée par <a href="agenceweb">CONNECT-E</a></p>
      <p><a href="mentions">Mentions légales</a></p>
    </footer>

  </div>
</template>

<script>
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

footer {
position:fixed;
 bottom:0;
 background-image: url("assets/foot.jpg");
 background-size: cover;
 width: 100%;
 height: 100px;
 display: flex;
 flex-direction: row;
 justify-content: space-around;
 color: white;
 border-top: 10px solid #d44c5c;
}
footer a{
text-decoration: none;
color: white;
}
footer p {
  margin: auto;
}
body {
  margin: 0;
}
</style>
