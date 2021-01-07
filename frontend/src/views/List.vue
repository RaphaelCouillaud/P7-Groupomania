<template>
     <section>
        <Navbar></Navbar>
        
          <div class="blocsignup">
			<h1>"Carpe Diem : Profitez du jour présent mes amis, que votre vie soit extraordinaire."</h1> 
            <p> - Philibert Groupeau (1913-1997), fondateur de la société Groupomania.</p>                
          </div> 

          <ListMessages/> 
     </section> 
</template>


<script>
import Navbar from '../components/Navbar'
import ListMessages from '../components/ListMessages'
export default {
    name: 'List',
    components: {
        Navbar,
        ListMessages
    },
}
</script>
  
<style lang="css">
.blocsignup h1 {
   margin-top: 0;
   padding: 10px;
}
</style>