// Logique métier //
const Message = require('../models/Message'); // Importation du modèle message car on va l'utiliser //
const fs = require('fs');

exports.createMessage = (req, res, next) => { // Création d'un message //
    const messageObject = JSON.parse(req.body.message); // Extraction de l'objet JSON //
    delete messageObject._id;
    const message = new message({
        ...messageObject,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`, // Protocole, nom d'hôte, images, nom du fichier //        
    });
    message.save()
        .then(() => res.status(201).json({ message: 'Message enregistré !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.deleteMessage = (req, res, next) => { // Suppression d'une sauce //
    Message.findOne({ _id: req.params.id }) // On trouve l'objet dans la base de données //
        .then((message) => {
            const filename = message.imageUrl.split('/images/')[1]; // Qd on le trouve, on extrait le nom du fichier //
            fs.unlink(`images/${filename}`, () => { // On le supprime avec fs.unlink //
                Message.deleteOne({ _id: req.params.id }) // Une fois la suppression, on l'indique à la base de données //
                    .then(() => res.status(200).json({ message: 'Message supprimé !' }))
                    .catch(error => res.status(400).json({ error }));
            });
        })
        .catch(error => res.status(500).json({ error }));
};
