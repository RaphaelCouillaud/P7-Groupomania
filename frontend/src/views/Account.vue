<template>
     <section>
         <Navbar></Navbar>

            <div class="blocsignup">
                <h2>Gestion du compte de {{ userAccount.firstname }} {{ userAccount.lastname }}</h2>
                <p>Vous êtes inscrit depuis le <span>{{ userAccount.createdAt | moment("DD.MM.YY") }}</span> en tant que {{ userAccount.jobtitle }}.</p>
                <button @click="deleteAccount" class="accountbutton">Supprimez votre compte</button>  
            </div>  
     </section>
</template>

<script >
    import Navbar from '../components/Navbar'
export default {
    name: 'Account',
    components: {
        Navbar
    },
    data() {
        return {
            userAccount: {
                userId: localStorage.getItem("userId"),
                firstname: "",
                lastname: "",
                createdAt: "",
                jobtitle: ""
            },
            inputAccount: {
                lastname: "",
                firstname: "",
                jobtitle: ""
            }
        }
    },
    mounted() {
        let url = `http://localhost:3000/api/auth/${ this.userAccount.userId }`;
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
                this.userAccount.firstname = data.firstname;
                this.userAccount.lastname = data.lastname;
                this.userAccount.createdAt = data.createdAt;
                this.userAccount.jobtitle = data.jobtitle;
            })

            .catch(error => console.log(error))
    },

    methods: {
        getOneAccount() {
            let url = `http://localhost:3000/api/auth/${ this.userAccount.userId }`;
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
                    this.userAccount.firstname = data.firstname;
                    this.userAccount.lastname = data.lastname;
                    this.userAccount.jobtitle = data.jobtitle;
                })
                .catch(error => console.log(error))
        },

        deleteAccount() {
            let url = `http://localhost:3000/api/auth/${ this.userAccount.userId }`;
            let options = {
                method: "DELETE",
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                }
            };
            fetch(url, options)
                .then((response) => {
                    console.log(response);
                    localStorage.clear();
                    alert("Suppression du compte confirmée ! 😢");
                })
                .then(this.$router.push("/signup"))
                .catch(error => console.log(error))
        },
    },
} 
</script>

<style lang="css">
.accountbutton {
    width: auto;
    margin: 10px 10px 50px 10px;
}


</style>