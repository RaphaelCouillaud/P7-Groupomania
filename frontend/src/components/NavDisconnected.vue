<template>
    <header>
        <img src="../assets/logo.png" id="logoconnect" alt="Logo Groupomania Connect" />
        <nav>
            <router-link to="/login" class="navlinks">Se connecter</router-link>
            <router-link to="/signup" class="navlinks">S'inscrire</router-link>
        </nav>
    </header>
</template>

<script>
export default {
    name: "NavDisconnected",
};
</script>

<style scoped>

header {
position: absolute;
 top: 0;
 left: 0;
 background-image: url("../assets/head.jpg");
 background-size: cover;
 width: 100%;
 height: 125px;
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
  width: 25%;
  margin: auto;
}
nav {
    margin: auto;
    display: flex;
    justify-content: space-around;
    width: 20%;
    position: absolute;
 top: 0;
 right: 0;
}



</style>