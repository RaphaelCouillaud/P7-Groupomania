<template>
     
          <div class="blocsignup">
          <Navbar></Navbar>
          <Giffinder></Giffinder>
            <h2>Exprimez-vous !</h2>
            <form v-on:submit.prevent="sendMessage" id="form-signup" >
              <div class="form-group">
                <label for="title">Titre du message :</label>
                <input type="text" id="title" name="title" class="form-control" required v-model="inputMessage.title"/>
              </div>
              <div class="form-group">
                <label for="image">Lien :</label>
                <input type="url" id="image" name="image" class="form-control" required v-model="inputMessage.image"/>
              </div>
                                     
            </form> 
             
             <button type="submit">Envoyer</button> 
             
          </div> 
</template>

<script>
import Navbar from '../components/Navbar'
import Giffinder from '../components/Giffinder'
export default {
    name: 'Message',
    components: {
        Navbar,
        Giffinder
    },
    
    data: () => {
        return {
            inputMessage : {
                title: "",
                image: ""
            }
        }
    },
    methods: {
        sendMessage() {
            let url = "http://localhost:3000/api/messages"
            let options = {
                method: "POST",
                body: JSON.stringify(this.inputMessage),
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                    'Content-Type': 'application/json'
                }
            }
            fetch(url, options)
                .then(res => res.json())
                .then(res => {
                    if(res.ok) {
                        this.inputMessage = {}
                    }           
                })
            .catch(error => console.log(error))
            }
        }
    }

</script>