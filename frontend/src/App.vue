<template>
  <div id="app">
    
<router-view />

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
body {
 background-image: url("./assets/groupback.jpg");
background-size: cover;
}

footer {
position:fixed;
 bottom:0;
 background-image: url("assets/foot.jpg");
 background-size: cover;
 width: 100%;
 height: 125px;
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
  width: 35%;
  margin: auto;
}
footer p {
  display: flex;

}
body {
  margin: 0;
}
</style>
