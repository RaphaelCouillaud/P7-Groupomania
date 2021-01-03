<template>
     <article>
        <Navbar></Navbar>
        
          <div class="blocsignup">
			<h2>Derniers messages</h2>  
          </div> 
          <Flow></Flow> 
     </article> 
</template>


<script>
import Navbar from '../components/Navbar'
import Flow from '../components/Flow'
export default {
    name: 'List',
    components: {
        Navbar,
        Flow
    },
}

</script>
  




<style lang="css">
section {
     border: 3px solid red;
    
}


</style>