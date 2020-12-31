<template>
     
               <div class="blocsignup">
            <Navbar></Navbar>
            <h2>Gestion du compte de {{ userAccount.firstname }} {{ userAccount.lastname }}</h2>
            <form id="form-login" >
              
              <div class="form-group">
                <label for="lastname">Modifiez votre nom :</label>
                <input type="text" id="lastname" name="lastname" class="form-control" v-model="inputAccount.lastname"/>
              </div>
              <div class="form-group">
                <label for="firstname">Modifiez votre prénom :</label>
                <input type="text" id="firstname" name="firstname" class="form-control" v-model="inputAccount.firstname"/>
              </div>
              <div class="form-group">
                <label for="jobtitle">Modifiez votre fonction :</label>
                <input type="text" id="jobtitle" name="jobtitle" class="form-control" required v-model="inputAccount.jobtitle"/>
              </div>                                         
            </form>             
             
             <button @click="updateAccount" class="accountbutton">Actualisez votre compte</button> 
             <button @click="deleteAccount" class="accountbutton">Supprimez votre compte</button> 
             
          </div>  
</template>

<script>
import Navbar from '../components/Navbar'
export default {
    name: 'Account',
    components: {
        Navbar
    },
      
   data () {
        return {
            userAccount: {
                userId: localStorage.getItem("userId"),
                firstname: "",
                lastname: "",
                 jobtitle: ""
            },
            inputAccount: {
                lastname: "",
                firstname: "",
                jobtitle: ""
            }
        }
    },
    methods: {
        checkAccount() {
            let url = `http://localhost:3000/api/auth/${ this.userAccount.userId }`;
            let options = {
                method: "GET",
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token")}
            }
            console.log(options)
            fetch(url, options)
                .then(response => response.json())
                .then(data => {
                    this.userAccount.firstname = data[0].firstname; //premier nom//
                    this.userAccount.lastname = data[0].lastname;
                    this.userAccount.jobtitle = data[0].jobtitle;
                })
                .catch(error => console.log(error))
        },
        updateAccount() {
            let url = `http://localhost:3000/api/auth/${ this.userAccount.userId }`;
            let options = {
                method: "PUT",
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.inputAccount),
            };
            fetch(url, options)
                .then(res => res.text())          // convert to plain text
                .then(text => console.log(text))
                .then(data => {
                    this.userAccount = data[0];
                    this.inputAccount = {}
                })
                .catch(error => console.log(error))
        },
        deleteProfile() {
            let url = `http://localhost:3000/api/auth/${ this.userAccount.userId }`;
            let options = {
                method: "DELETE",
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                }
            };
            fetch(url, options)
                .then(res => res.json())
                .then(this.$router.push("/signup"))
                .catch(error => console.log(error))
        }
    }
}
</script>

<style lang="css">
.accountbutton {
    width: auto;
    margin: 10px 10px 50px 10px;
}

</style>