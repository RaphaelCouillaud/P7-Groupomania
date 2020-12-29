<template>
        <nav id="navbar">
            <router-link to="/message"><i class="far fa-edit"></i></router-link> 
             <router-link to="/list"><i class="far fa-comments"></i></router-link>
            <router-link to="/account"><i class="far fa-address-card"></i></router-link>
            <i @click="deconnect" class="fas fa-door-open"></i>
        </nav>
</template>

<script>
export default {
    name: "Navbar",
    methods: {
        deconnect() {
            localStorage.clear();
            this.$router.push("/");
        }
    }
}
</script>

<style lang="css">
#navbar {
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: absolute;
    left: 2%;
    margin: auto;
    box-shadow: inset 0px 0px 0px 4px white;
  border: 6px solid #d44c5c;
  border-radius: 30px;
  padding: 15px;
  background-color:#0c2444;
  opacity: 0.9;

}
#navbar i {
    font-size: 2em;
    color: white;
}

</style>