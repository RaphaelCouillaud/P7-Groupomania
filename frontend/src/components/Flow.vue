<template>

  <section>
      <div v-for="message in messages" v-bind:key="message.id">
        <div class="blocsignup">  
            <h3><i class="far fa-user-circle"></i> {{ Message.User.firstname }} {{ Message.User.lastname }} </h3>
            <div class="blocjob">  
                <p><i class="far fa-building"></i> {{ Message.User.jobtitle }} </p>  
                <p><i class="far fa-clock"></i> {{ Message.createdAt }} </p>
            </div>
            <h4> {{ Message.title }} </h4>
            <p> {{ Message.content }} </p>
            <div class="blocactions">
                <button v-if="message.userId == userId" type="button" @click="deletePost(messageId)">
                <i class="fas fa-backspace"></i></button>
                <a v-on:click="showAnswers(messageId)"><i class="fab fa-stack-exchange"></i></a>
            </div> 
        </div>
      </div>   


        <div v-for="answer in messages.answers" v-bind:key="answer.id">
          <div class="blocsignup">  
            <h3><i class="far fa-user-circle"></i> {{ Answer.User.firstname }} {{ Answer.User.lastname }} </h3>
            <p> {{ Answer.content }} </p>          
          </div>
        </div>
        

        <div v-if="message.displayAnswer">
          <textarea type="text" id="content" name="content" rows="5" class="form-control" v-model="answer" 
          placeholder="Commentez..."></textarea>
          <a v-on:click="sendAnswer(messageId)"><i class="far fa-paper-plane"></i></a>          
        </div>

        
      
  </section>
  
</template>

<script>
export default {
    name: "Flow",
}
</script>

<style lang="css">


</style>