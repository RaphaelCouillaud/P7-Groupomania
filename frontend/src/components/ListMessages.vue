<template>
<div>

     <!-- Liste des messages + infos -->   
      <div v-for="message in messages" :key="message.id" class="blocsignup">
        
            <h3><i class="far fa-user-circle"></i> {{ message.user.firstname }} {{ message.user.lastname }} </h3>
            <div class="blocjob">  
                <p><i class="far fa-building"></i> {{ message.user.jobtitle }} </p>  
                <p><i class="far fa-clock"></i> {{ message.createdAt | moment("DD.MM.YY HH:mm:ss") }} </p>
            </div>
            <h4> {{ message.title }} </h4>
            <p> {{ message.content }} </p>
            <!--<div class="blocactions">
                <button v-if="userOrAdmin(message)" type="button" @click="deleteMessage(message.id)">
                <i class="fas fa-backspace"></i>
                </button>
            </div> -->
        
      </div>   

  
       <!-- <div v-for="answer in message.answers" v-bind:key="answer.id">
          <div class="blocsignup">  
            <h3><i class="far fa-user-circle"></i> {{ Answer.User.firstname }} {{ Answer.User.lastname }} </h3>
            <p> {{ Answer.content }} </p> 
            <button v-if="userOrAdmin(answer)" type="button" @click="deleteAnswer(answer.id)">
            <i class="fas fa-backspace"></i>
            </button>         
          </div>
        </div>

  
        <div class="blocanswer">
          <textarea type="text" id="content" name="content" rows="5" class="form-control" v-model="content" 
          placeholder="Commentez..."></textarea>
          <a v-on:click="createAnswer(messageId)"><i class="far fa-paper-plane"></i></a>          
        </div> -->



  </div>

  
</template>





<script>
export default {
    name: "ListMessages",

data () {
    return {
      firstname: "",
      lastname: "",
      jobtitle: "",
      userId: "",
      messages: [],
      content: ""
    }
  },
mounted() {
    this.userId = JSON.parse(localStorage.getItem("userId")); 
    console.log(localStorage);

     let url = "http://localhost:3000/api/messages";
              let options = {
                  method: "GET",
                  headers: {
                      'Authorization': 'Bearer ' + localStorage.getItem("token"),
                      }
              };
        fetch(url, options)
                  .then(response => response.json())
                  .then(data => {
                    console.log(data)
                   this.messages = data; 
                         
                })
                .catch(error => console.log(error))
        },

 
             



    
  


  
// Fetch GET getAllMessages



// Fetch DELETE deleteMessage

// Fetch POST createAnswer

// Fetch GET getAllAnswers

// Fetch DELETE deleteAnswer


userOrAdmin (message) {
      return message.userId == localStorage.getItem("userId")  
      || 1 == localStorage.getItem("isAdmin");
    },

}

</script>

<style lang="css">
h4 {
  text-transform: uppercase;
}

</style>