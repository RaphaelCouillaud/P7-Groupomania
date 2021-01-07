<template>
     <section>
        <Navbar></Navbar>
        
         <div class="blocsignup">               
               <p class="parametres">Pour signaler tout message ne respectant pas la charte et les valeurs de Groupomania : <br>
               <a><i class="far fa-envelope"></i></a> admin@groupomania.com</p>
         </div>
         <div class="blocsignup"> 
               <p class="parametres"><a><i class="fas fa-cog"></i></a> Politique de confidentialité</p>
         </div>
         <div class="blocsignup"> 
               <p class="parametres"><a><i class="fas fa-bullhorn"></i></a> Conditions d’utilisation</p>
         </div>
     </section> 
</template>


<script>
import Navbar from '../components/Navbar'
export default {
    name: 'Infos',
    components: {
        Navbar,
   },
}
</script>

<style lang="css">

</style>