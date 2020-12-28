<template>
     
          <div class="blocsignup">
          
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
             <p v-if="modifyMessage.length >= 1">{{ modifyMessage }}</p>
             <button type="submit">Envoyer</button> 
             
          </div> 
</template>

<script>

export default {
    name: 'Message',
    
    data: () => {
        return {
            inputMessage : {
                title: "",
                image: ""
            },
            modifyMessage : ""
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
                    this.modifyMessage = res.message;                    
                })
            .catch(error => {
                this.errorMessage = error
            })
        }
    }
}
</script>