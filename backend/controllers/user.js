const bcrypt = require('bcrypt'); // Hashage de passwords //
const jwt = require('jsonwebtoken'); // Sécurisation de la connection grâce à des tokens uniques //
//const connectmysql = require('../configdb/connectmysql'); // Connection base de données //
const { User } = require('../models/index'); // Importation du modèle User //

// Voir regex - front ou back ?//


// Exportation des fonctions //
// Fonction signup, sauvegarde d'un nouvel utilisateur //
exports.signup = (req, res, next) => {
    //res.status(201).json(req.body)//
    if (req.body.email == null || req.body.password == null || req.body.lastname == null || req.body.firstname == null) {
        return res.status(400).json({ 'error': 'Données incomplètes' });
    } //Vérification de la présence des paramètres dans la requête//
        User.findOne({
        attributes: ['email'],
        where: { email: req.body.email }
    }) //Vérification si un utilisateur corresponde déjà à l'email de la DB//
        .then((user) => {
            if (!user) {
    bcrypt.hash(req.body.password, 10)  //Fonction pour hasher un mot de passe fonction async//
        .then(hash => { // On récupére le hash //
            console.log(hash)           
             const signUser = User.create ({//On prend ce mot de passe crypté pour créer un nouvel utilisateur //
                email: req.body.email, // Avec l'adresse mail passé - Payload, on renseigne tout ce qui nous intéresse//
                password : hash,
                lastname : req.body.lastname,
                firstname : req.body.firstname,
                jobtitle : req.body.jobtitle,
                isAdmin: req.body.isAdmin // Rajout Admin à renseigner en DB//
            })
                .then((user) => {
                    console.log(user) 
                    res.status(201).json({ message: 'Utilisateur créé !' })
                });
        })
                .catch(error => res.status(400).json({ error }));
        }})
        
        .catch(error => res.status(500).json({ 'error': 'Utilisateur déjà existant' }));
};

// Fonction login //
exports.login = (req, res, next) => {
    User.findOne({ where : {email: req.body.email }}) // Trouver si un utilisateur correspond à l'adresse envoyé dans la requête //
        .then(user => {
            if (!user) { // Pas d'user trouvé //
                return res.status(401).json({ error: 'Utilisateur inconnu !' });
            }
            bcrypt.compare(req.body.password, user.password) // On compare le password envoyé avec la password hashé //
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }
                    res.status(200).json({ // Si comparaison ok, on renvoit un objet JSON contenant //
                        userId: user.id, // L'userId + //
                        token: jwt.sign( // Un token - Fonction sign de JsonWebToken//
                            { userId: user.id }, // 1er argument : données à encoder //
                            'RANDOM_TOKEN_SECRET', // 2ème : clé secréte encodage //
                            { expiresIn: '24h' }// 3 :argument de configuration //
                        ),
                        isAdmin: user.isAdmin // Rajout Admin //
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })

        .catch(error => res.status(500).json({ error }));
};

    
// Suppression d'un compte //
exports.deleteAccount = (req, res, next) => {
    User.findOne({ where: { id: req.params.id }})  // On trouve l'objet dans la base de données //
      .then((user) => {
          User.destroy({ where: { id: req.params.id }}) // Méthode //
                    .then(() => res.status(200).json({ message: 'Compte supprimé' }))
                    .catch(error => res.status(400).json({ error }));
                })
            .catch (error => res.status(500).json({ error }));
            };
        
// Obtention d'un compte //
exports.getOneAccount = (req, res, next) => {
    User.findOne({ where: { id: req.params.id }})
        .then((user) => res.status(200).json(user))
        .catch(error => res.status(404).json({ error }));
};

// Modification d'un compte //
exports.modifyAccount = (req, res, next) => { 
    User.findOne({ where: { id: req.params.id }})
        .then((user) => {
            //if (req.userId == req.params.id) { 
           // email = req.body.email; // Avec l'adresse mail passé //
            //password : hash; On ne peut pas modifier le mot de passe ?//
            lastname = req.body.lastname;
            firstname = req.body.firstname;
            jobtitle = req.body.jobtitle;
            User.update()         
        .then(() => res.status(201).json({ message: 'Compte modifié !' }))
        .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

exports.getAllAccounts = (req, res, next) => {
    User.findAll()
        .then((users) => res.status(200).json(users))
        console.log(users)
        .catch(error => res.status(400).json({ error }));
};