<template>
<div>

     <!-- Liste des messages + infos -->   
      <div v-for="message in messages" :key="message.id" class="blocsignup">
        <div class="blocauthor">
            <h3><i class="far fa-user-circle"></i> {{ message.user.firstname }} {{ message.user.lastname }} </h3>
            <div class="blocjob">  
                <p><i class="far fa-building"></i> {{ message.user.jobtitle }} </p>  
                <p><i class="far fa-clock"></i> {{ message.createdAt | moment("DD.MM.YY HH:mm:ss") }} </p>
            </div>
       </div>
        <div class="blocmessage">
            <h4><i class="fas fa-angle-double-right"></i> {{ message.title }} </h4>
            <h5 class="pmessage"><i class="fas fa-angle-right"></i>" {{ message.content }} "</h5>
        </div>  
        <div class="blocactions">
              <button v-if="userOrAdmin(message)" type="button" @click="deleteMessage(message.id)" class="accountbutton">
              Supprimez votre message
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
  font-size: 1.25em;
  text-decoration: underline;
   
}
.blocjob {
  display: flex;
  flex-direction: row;
  margin: auto;
  width: 50%;
  
}
.blocauthor i {
  color: #0c2444;
    font-size: 1.75em;
  
}

.blocauthor {
  width: 90%;
  background-color: grey;
  border: 6px solid white;
  
  
  margin: 0 auto;
  border-radius: 30px; 
  display: flex; 
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}
.blocauthor h3 {
  font-size: 1.5em;
  margin: 0;
  
  width: 50%;
}
.blocmessage {
  width: 90%;
  margin: 0 auto;
  border-radius: 30px; 
  border: 6px solid white;
  box-shadow: inset 0px 0px 0px 4px grey;
}
.blocmessage  h5 {
  font-style: italic;

}
h5 i, h4 i {
  font-size: 2em;
  color: #d44c5c;
  
}
</style>