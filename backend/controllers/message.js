//const connectmysql = require('../configdb/connectmysql'); // Connection base de données //
const db = require('../models');
const { Message } = require('../models/index');
//const fs = require ('fs'); // Création et gestion des fichiers //

//router.post('/', auth, multer, messageControl.createMessage);
//router.delete('/:id', auth, messageControl.deleteMessage);//
//router.get('/:id', auth, messageControl.getOneMessage);//
//router.get('/', auth, messageControl.getAllMessages);//
//router.put('/:id', auth, multer, messageControl.modifyMessage);//

// Création d'un message //
exports.createMessage = (req, res, next) => {
    const message = {
        userId: req.body.userId,
        title: req.body.title,
        content: req.body.content
    }; 
    Message.create(message)
        .then(() => res.status(201).json({ message: "Message envoyé!" }))
        .catch(error => res.status(400).json({ error }));
};

    //const messageObject = JSON.parse(req.body.message); // Extraction de l'objet JSON //
   // console.log(req.body.message)
    //delete messageObject.id; // on retire le champ id du corps de la requête//
    //const message = new Message({
   //     ...messageObject, //...raccourci pour prendre en compte tous les éléments du body de la requête//
    //    image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`, // Protocole, nom d'hôte, images, nom du fichier //        
   // });
   // Message.create()
   //     .then(() => res.status(201).json({ message: 'Message enregistré !' }))
    //    .catch(error => res.status(400).json({ error }));


// Suppression d'un message //
exports.deleteMessage = (req, res, next) => {
    Message.findOne({ where: { id: req.params.id }}) // On trouve l'objet dans la base de données //
        .then((message) => {
            Message.destroy({ where: { id: req.params.id } }) // Méthode //
                .then(() => res.status(200).json({ message: 'Message supprimé' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

// Obtention d'un message //
exports.getOneMessage = (req, res, next) => {
    db.Messages.findByPk(req.params.id,
        {
            include: [
                {
                    model: db.Users,
                    attributes: ['firstname', 'lastname']
                },
                {
                    model: db.Answers,
                    attributes: ['content'],
                    include: { model: db.Users, attributes: ['firstname', 'lastname'] }
                },
            ]
        }
    )
        .then(message => res.status(200).json(message))
        .catch(error => res.status(404).json({ error }));
};

// Obtention des messages //
exports.getAllMessages = (req, res, next) => {     
    Message.findAll({
        include: ["user", "answers"]
    }
    )
        .then((messages) => res.status(200).json(messages))
        .catch(error => res.status(400).json({ error }));
};

// Création d'un message //
exports.modifyMessage = (req, res, next) => {
    Message.update({ where: { id: req.params.id }}, { ...messageObject, id: req.params.id }) // On prend l'objet créé et on modifie son identifiant pour correspondre à l'id des paramètres de requêtes //
        .then(() => res.status(201).json({ message: 'Message modifié !' }))
        .catch(error => res.status(400).json({ error }));
}; 


