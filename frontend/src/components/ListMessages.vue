<template>
<section>
  
      <div v-for="message in messages" v-bind:key="message.id" class="blocsignup">
          <h3><i class="far fa-user-circle"></i> {{ message.firstname }} {{ message.lastname }} </h3>
          <div class="blocjob">  
                <p><i class="far fa-building"></i> {{ message.jobtitle }} </p>  
                <p><i class="far fa-clock"></i> {{ message.createdAt | moment("DD.MM.YY HH:mm:ss") }} </p>
          </div>  
          <h4> {{ message.title }} </h4>
          <p> {{ message.content }} </p>
          <div class="blocdelete">
            <button @click.prevent="deleteMessage(message.id)" v-if="isAdmin(message)"><i class="fas fa-backspace"></i></button>
          </div>
        <ListAnswers v-bind:messageId="message.id" v-bind:messageUserId="message.userId" />
      </div>
  

  </section>
  
</template>





<script>
export default {
    name: "ListMessages",

data () {
    return {
    }
}
}
</script>

<style lang="css">


</style>