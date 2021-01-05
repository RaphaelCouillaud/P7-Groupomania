<template>
<div>    
    <!-- Répondre  -->
     <div class="blocanswer">
          <textarea type="text" id="content" name="content" rows="2" class="form-control" v-model="content" 
          placeholder="Commentez..."></textarea>
          <a v-on:click="createAnswer(messageId)"><i class="far fa-paper-plane"></i></a>          
    </div>



   <!-- Liste des réponses  -->
       
        <div class="blocsignup"> 
            <div v-for="answer in answers" :key="answer.id">
                <h3><i class="far fa-user-circle"></i> {{ answer.firstname }} {{ answer.lastname }} </h3>
                <p> {{ answer.content }} </p> 
                <button type="button" @click="deleteAnswer(answer.id)">
                <i class="fas fa-times"></i>
                <!--v-if="userOrAdmin(message)" à rajouter au button--> 
                </button>       
            </div>
        </div>

</div>

  
</template>


<script>

export default {
    name: "Answers",


data () {
    return {
      answer: "",
      answers: []      
    }
  },
  //Passer des données aux composants enfants avec les props//
  props: {
    messageId: Number,
    messageUserId: Number,
  },
mounted() {
   
        },

  methods: {
    
///////////////////GET ANSWERS/////////////////////
        getAllAnswers() {
            let url = `http://localhost:3000/api/answers${ this.messageId }`;
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
                      this.answers = data;
                        console.log(this.answers)
                            
                    })
                    .catch(error => console.log(error))
            },
            
    },
      
     ///////////////////CREATE ANSWER///////////////////// 
   createAnswer() {
          
         let url = "http://localhost:3000/api/answers/new"
            let options = {
                method: "POST",
               
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                    'Content-Type': 'application/json'
                }
            }
           fetch(url, options)
                .then(res => res.json())
               .then((res) => {
                    console.log(res)
                    if(res.ok) {
                        this.content = {}
                    }  else {
                         alert("Réponse envoyée 🖅");
                   }         
                })
                
                .then(window.location.reload())               
            .catch(error => console.log(error))
            }
        }

 ///////////////////DELETE ANSWER PAS GRAVE SI PAS FAIT///////////////////// 












    
  


  




// Fetch POST createAnswer



// Fetch DELETE deleteAnswer




</script>

<style lang="css">
h4 {
  text-transform: uppercase;
}

</style>