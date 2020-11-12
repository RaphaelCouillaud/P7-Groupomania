<template>
  <div class="login">
    <SignupForm msg="Bienvenue sur Connect !"/> <!--Component-->
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue';

export default {
  name: 'Signup',
  components: {
    SignupForm,
  },
};
</script>
