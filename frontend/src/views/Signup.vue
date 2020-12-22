<template>
    
          <div class="blocsignup">
            <h2>Pour rejoindre la communauté Groupomania, merci de remplir ce formulaire</h2>
            <form v-on:submit.prevent="signup" id="formsignup" >
              <div class="form-group">
                <label for="lastname">Nom :</label>
                <input type="text" id="lastname" name="lastname" class="form-control" required  v-model="inputDatas.lastname"/>
              </div>
              <div class="form-group">
                <label for="firstname">Prénom :</label>
                <input type="text" id="firstname" name="firstname" class="form-control" required v-model="inputDatas.firstname"/>
              </div>
              <div class="form-group">
                <label for="jobtitle">Fonction :</label>
                <input type="text" id="jobtitle" name="jobtitle" class="form-control" required v-model="inputDatas.jobtitle"/>
              </div> 
              <div class="form-group">
                <label for="email">E-mail :</label>
                <input type="email" id="email" name="email" class="form-control" required v-model="inputDatas.email"/>
              </div>
              <div class="form-group">
                <label for="password">Mot de passe :</label>
                <input type="password" id="password" name="password" class="form-control" required v-model="inputDatas.password"/>
              </div>  
              <button>Valider</button>                         
            </form>            
          </div>        
           
       
</template>


<script>
export default {
    name: 'Signup',
    data () {
        return {
            inputDatas: {
                lastname: "",
                firstname: "",
                jobtitle: "",
                email: "",
                password: ""
            }
        }
    },
    methods: {
        signup () {
            
        }
    }
}

</script>