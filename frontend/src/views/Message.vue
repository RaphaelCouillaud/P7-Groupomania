<template>
     <section>
         <Navbar></Navbar>
          <Giffinder></Giffinder>
          <div class="blocsignup">
          
            <h2>Exprimez-vous !</h2>
            <form v-on:submit.prevent="sendMessage" id="form-signup" >
              <div class="form-group">
                <label for="title">Titre du message :</label>
                <input type="text" id="title" name="title" class="form-control" required v-model="inputMessage.title"/>
              </div>
              <div class="form-group">
                <label for="content">Contenu :</label>
                <textarea type="text" id="content" name="content" rows="10" class="form-control" required v-model="inputMessage.content"></textarea>
              </div>
                                     
            </form> 
             
             <button type="submit">Envoyer</button> 
             
          </div> 
     </section> 
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
                content: ""
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

<style lang="css">
section {
    display: flex;
    margin: auto;
}
textarea {
    height: auto;
    resize:none;
}
@media screen and (max-width: 768px) {
	section {
    flex-direction: column;
    margin-top: 25px;
}
}

</style>