<template>
  <div class="login">
    <LoginForm msg="Re-Bienvenue sur Connect !"/> <!--Component-->
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue';

export default {
  name: 'Login',
  components: {
    LoginForm,
  },
};
</script>
