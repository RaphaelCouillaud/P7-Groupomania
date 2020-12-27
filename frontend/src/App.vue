<template>
  <div id="app">
    
<router-view></router-view>

    <footer>
       <p><a href="politique">Politique de confidentialité</a></p>
      <p><img src="./assets/iconwhite.png"  alt="Logo Groupomania" /></p>
      <p><a href="mentions">Mentions légales</a></p>
    </footer>
</div>
  
</template>

<script>
</script>

<style lang="scss">
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
 
}
#app {
  background-image: url("./assets/groupback.jpg");
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
}
footer {
position:fixed;
 bottom: 0;
 background-image: url("assets/foot.jpg");
 background-size: cover;
 width: 100%;
 height: 80px;
 display: flex;
 flex-direction: row;
 justify-content: space-around;
 color: white;
 border-top: 8px solid #d44c5c;
 font-size: 1.25em;
}
footer a{
text-decoration: none;
color: white;
margin: auto;
}
footer img {
  width: 20%;
  margin: auto;
}
footer p {
  display: flex;

}
</style>
