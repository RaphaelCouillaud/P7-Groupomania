<template>
     <section>
         <Navbar></Navbar>
          <Bulb></Bulb>
          <div class="blocsignup">          
            <h2>Exprimez-vous ! Partagez !</h2>
            <form id="form-signup" >
              <div class="form-group">
                <label for="title">Titre du message :</label>
                <input type="text" id="title" name="title" class="form-control" required v-model="inputMessage.title"/>
              </div>
              <div class="form-group">
                <label for="content">Contenu :</label>
                <textarea type="text" id="content" name="content" rows="10" class="form-control" required v-model="inputMessage.content"></textarea>
              </div>
            </form>              
             <button v-on:click="sendMessage" >Envoyer</button> 
          </div> 
            
     </section> 
</template>

<script>
import Navbar from '../components/Navbar'
import Bulb from '../components/Bulb'
export default {
    name: 'Message',
    components: {
        Navbar,
        Bulb
    },

    data() {
        return {
            inputMessage: {
                title: "",
                content: "",
            },
            userId: ""
        }
    },

    mounted() {
        this.userId = JSON.parse(localStorage.getItem("userId"));
        console.log(this.userId)
    },

    methods: {
        sendMessage() {
            let deliverMessage = {
                "title": this.inputMessage.title,
                "content": this.inputMessage.content,
                "userId": this.userId
            }
            console.log(deliverMessage)
            let url = "http://localhost:3000/api/messages/new"
            let options = {
                method: "POST",
                body: JSON.stringify(deliverMessage),
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
                        window.location.reload();
                        this.inputMessage = {} // Retour à 0 des inputs //
                    } else {
                        alert("Message bien reçu 🖅");
                    }
                })
                .then(this.$router.push("/list"))
                .catch(error => console.log(error))
        }
    }
}
</script>

<style lang="css">
section {
    display: flex;
    margin: auto;
    flex-direction: column;
}
.parametres {
    margin-top: 0;
    margin-bottom: 25px;
}
a {
    cursor: pointer;
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