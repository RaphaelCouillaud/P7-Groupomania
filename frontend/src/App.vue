<template>
  <div id="app">
    
    <header>
        <img src="./assets/logo.png" id="logoconnect" alt="Logo Groupomania Connect" />
    </header>
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
}
#app {
  height: 100%;
  font-family: 'Montserrat', sans-serif;
  background-color: #d4d4d4;
  font-size: 0.8em;
    
}
footer {
bottom: 0;
position: absolute;
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
header {
 background-image: url("assets/head.jpg");
 background-size: cover;
 width: 100%;
 height: 100px;
 display: flex;
 flex-direction: row;
 justify-content: space-around;
 color: white;
 border-bottom: 8px solid #d44c5c;
 font-size: 1.25em;
 display: flex;
 flex-direction: row;
 
}
header a{
text-decoration: none;
color: white;
margin: auto;
}
header img {
  width: 22%;
  margin: auto;
}
</style>
