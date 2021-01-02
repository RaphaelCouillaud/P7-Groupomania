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
    
    position: fixed;
   
    margin: auto;
    box-shadow: inset 0px 0px 0px 10px white;
  border: 8px solid #d44c5c;
  border-radius: 30px;
  padding: 15px;
  background-color:#0c2444;
  opacity: 0.9;
  margin-top: 25px;
  margin-left: 25px;

}
#navbar i {
    font-size: 2.5em;
    color: white;
}
@media screen and (max-width: 768px) {
	#navbar {
    height: auto;
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: relative;
    margin: auto;
    left: 0;
    
}

}
@media screen and (max-width: 450px) {
	#navbar {
    box-shadow: inset 0px 0px 0px 8px white;
  border: 5px solid #d44c5c;
}
#navbar i {
    font-size: 2em;
}
}


</style>