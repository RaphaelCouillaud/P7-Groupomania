<template>
  <div id="app">
    
    <header>
        <img src="./assets/logo.png" id="logoconnect" alt="Logo Groupomania Connect" />
    </header>
    <router-view></router-view>


    
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
  border-bottom: 6px solid #d44c5c;
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

@media screen and (max-width: 768px) {
  header img {
    width: 35%;
  }
}
@media screen and (max-width: 450px) {
  header img {
    width: 50%;
  }
}
</style>
