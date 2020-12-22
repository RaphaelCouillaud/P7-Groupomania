<template>
    <header>
        <img src="../assets/logo.png" alt="Logo Groupomania Connect" />
        <nav>
            <router-link to="/login">Connexion</router-link>
            <router-link to="/signup">Déconnexion</router-link>
        </nav>
    </header>
</template>



<script>
export default {
    name: "NavDisconnected",
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
header {
    font-family: 'Press Start 2P', cursive;
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
</style>