//const connectmysql = require('../configdb/connectmysql'); // Connection base de données //
const { Message } = require('../models/index');
const fs = require ('fs'); // Création et gestion des fichiers //

//router.post('/', auth, multer, messageControl.createMessage);
//router.delete('/:id', auth, messageControl.deleteMessage);//
//router.get('/:id', auth, messageControl.getOneMessage);//
//router.get('/', auth, messageControl.getAllMessages);//
//router.put('/:id', auth, multer, messageControl.modifyMessage);//

// Création d'un message //
exports.createMessage = (req, res, next) => {
    const messageObject = JSON.parse(req.body.message); // Extraction de l'objet JSON //
    delete messageObject.id; // on retire le champ id du corps de la requête//
    const message = new Message({
        ...messageObject, //...raccourci pour prendre en compte tous les éléments du body de la requête//
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`, // Protocole, nom d'hôte, images, nom du fichier //        
    });
    Message.create()
        .then(() => res.status(201).json({ message: 'Message enregistré !' }))
        .catch(error => res.status(400).json({ error }));
};

// Suppression d'un message //
exports.deleteMessage = (req, res, next) => {
    Message.findOne({ where: { id: req.params.id }}) // On trouve l'objet dans la base de données //
        .then((message) => {
            const filename = message.imageUrl.split('/images/')[1]; // Qd on le trouve, on extrait le nom du fichier //
            fs.unlink(`images/${filename}`, () => { // On le supprime avec fs.unlink //
                Message.destroy({ where: { id: req.params.id }}) // Une fois la suppression, on l'indique à la base de données //
                    .then(() => res.status(200).json({ message: 'Message supprimé !' }))
                    .catch(error => res.status(400).json({ error }));
            });
        })
        .catch(error => res.status(500).json({ error }));
};

// Obtention d'un message //
exports.getOneMessage = (req, res, next) => {
    Message.findOne({ where: { id: req.params.id }})
        .then((message) => res.status(200).json(message))
        .catch(error => res.status(404).json({ error }));
};

// Obtention des messages //
exports.getAllMessages = (req, res, next) => {     
    Message.findAll()
        .then((messages) => res.status(200).json(messages))
        .catch(error => res.status(400).json({ error }));
};

// Création d'un message //
exports.modifyMessage = (req, res, next) => {
    const messageObject = req.file ? // Si on trouve un fichier, on utilise la même logique qu'auparavant //
        {
            ...JSON.parse(req.body.message), // On récupére les infos de l'objet contenues dans cette requête //
            imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}` // On modifie l'imageurl //
        } : { ...req.body }; // Sinon on prend le corps de la requête //
    Message.update({ where: { id: req.params.id }}, { ...messageObject, id: req.params.id }) // On prend l'objet créé et on modifie son identifiant pour correspondre à l'id des paramètres de requêtes //
        .then(() => res.status(201).json({ message: 'Message modifié !' }))
        .catch(error => res.status(400).json({ error }));
}; 


