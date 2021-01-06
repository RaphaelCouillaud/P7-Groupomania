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
            <div class="blocactions">
                <button v-if="userOrAdmin(message)" type="button" @click="deleteMessage(message.id)">
                <i class="fas fa-times"></i>
                </button>
            </div>
        <!--v-if="userOrAdmin(message)" à rajouter au button--> 
        <Answers :messageId="message.id" :messageUserId="message.userId" />
      </div>   
  </div>

  
</template>





<script>
import Answers from "@/components/Answers.vue";
export default {
    name: "ListMessages",
    components: {
    Answers
  },

data () {
    return {
      firstname: "",
      lastname: "",
      jobtitle: "",
      userId: "",
      isAdmin: "",
      messages: []
      
    }
  },
mounted() {
    this.userId = JSON.parse(localStorage.getItem("userId")); 
    this.isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
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
                     console.log(this.messages)
                         
                })
                .catch(error => console.log(error))
        },

  methods: {
       userOrAdmin(message) {
      return message.userId == localStorage.getItem("userId")  
      || localStorage.getItem("isAdmin") == 1;
      },

///////////////////DELETE MESSAGE/////////////////////
       deleteMessage(messageid) {
           let url = `http://localhost:3000/api/messages/${ messageid }`; //PB pour détecter l'id du message sinon OK//
           let options = {
                method: "DELETE",
                headers: {
                   'Authorization': 'Bearer ' + localStorage.getItem("token"), 
                    }
            };
            fetch(url, options)
                .then((response) => {
                console.log(response);
                alert("Suppression du message confirmé ! 😢");
                // window.location.reload(); A rajouter si DELETE OK//
            })
               .catch(error => console.log(error))
        },
    },

}
             




</script>

<style lang="css">
h4 {
  text-transform: uppercase;
}
.blocjob {
  display: flex;
  flex-direction: row;
  margin: auto;
  justify-content: center;
}
</style>