<template>
  <div class="home">
      <Messages msg="Bienvenue sur Connect !"/> <!--Component-->
  </div>
</template>

<script>
import Messages from '../components/Messages.vue';

export default {
  name: 'Home',
  components: {
    Messages,
  },
};
</script>

<style>

</style>
