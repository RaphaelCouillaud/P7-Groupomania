<template>
<div>    
    <!-- Répondre  -->
     <div class="blocanswer">
          <textarea type="text" id="content" name="content" rows="2" class="form-control" v-model="content" 
          placeholder="Commentez..."></textarea>
          <a v-on:click="createAnswer()"><i class="far fa-paper-plane" title="Envoyer"></i></a>          
    </div>



   <!-- Liste des réponses  -->
       
        <div class="blocanswers"> 
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


<script >

    export default {
        name: "Answers",


        data() {
            return {
              
                answers: []
               
            }
        },
        //Passer des données aux composants enfants avec les props//
        props: {
            messageId: Number,
            messageUserId: Number,
        },
        mounted() {
            ///////////////////GET ANSWERS/////////////////////
             let url = "http://localhost:3000/api/answers/" + this.messageId + "/display";
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
        

        methods: {
               
            ///////////////////CREATE ANSWER///////////////////// 
            createAnswer() {
                let inputContent = {
                    "content": this.content,
                    "messageId": this.messageId
                }
                let url = "http://localhost:3000/api/answers/new"
                let options = {
                    method: "POST",
                    body: JSON.stringify(inputContent),
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    }
                }
                fetch(url, options)
                    .then(res => res.json())
                    .then((res) => {
                        console.log(res)
                        if (res.ok) {
                            this.content = {}
                        } else {
                            alert("Réponse envoyée 🖅");
                        }
                    })

                    //.then(window.location.reload())
                    .catch(error => console.log(error))
            }
        },


    } 
    </script>

<style lang="css">
h4 {
  text-transform: uppercase;
}
.blocanswer {
   
  margin: 0 auto;
  border-radius: 30px; 
  display: flex;
  flex-direction: row;
  align-items: center;
}
.blocanswers {

  width: 90%;
  margin: 0 auto;
  border-radius: 30px; 
  border: 6px solid white;
  box-shadow: inset 0px 0px 0px 4px grey;

}

.blocanswer i {
    color: #d44c5c;
    font-size: 1.75em;
    padding-right: 45px;
    text-shadow: -1px 0 1px white, 0 1px 1px white, 1px 0 1px white, 0 -1px 15px white;
}
.blocanswer textarea {
  width: 70%;
  height: 5em;
  box-sizing: border-box;  
  outline: none;
  
  border-radius: 30px;
  padding: 10px;
  margin: auto;
  
}

.blocanswer textarea:focus {
  border-color: white;
  box-shadow: 0px 0px 20px grey;
}
</style>