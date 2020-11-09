const connectmysql = require('../config/connectmysql'); // Connection base de données //


// Suppression d'un compte //
exports.deleteAccount = (req, res, next) => { 
    Sauce.findOne({ _id: req.params.id }) // On trouve l'objet dans la base de données //
        .then((sauce) => {
            const filename = sauce.imageUrl.split('/images/')[1]; // Qd on le trouve, on extrait le nom du fichier //
            fs.unlink(`images/${filename}`, () => { // On le supprime avec fs.unlink //
                Sauce.deleteOne({ _id: req.params.id }) // Une fois la suppression, on l'indique à la base de données //
                    .then(() => res.status(200).json({ message: 'Sauce supprimée !' }))
                    .catch(error => res.status(400).json({ error }));
            });
        })
        .catch(error => res.status(500).json({ error }));
};

// Obtention d'un compte //
exports.getOneAccount = (req, res, next) => { 
    Sauce.findOne({ _id: req.params.id })
        .then((sauce) => res.status(200).json(sauce))
        .catch(error => res.status(404).json({ error }));
};

// Obtention des comptes //
exports.getAllAccounts = (req, res, next) => { 
    Sauce.find()
        .then((sauces) => res.status(200).json(sauces))
        .catch(error => res.status(400).json({ error }));
};

// // Modification d'un compte //
exports.modifyAccount = (req, res, next) => { 
    const sauceObject = req.file ? // Si on trouve un fichier, on utilise la même logique qu'auparavant //
        {
            ...JSON.parse(req.body.sauce), // On récupére les infos de l'objet contenues dans cette requête //
            imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}` // On modifie l'imageurl //
        } : { ...req.body }; // Sinon on prend le corps de la requête //
    Sauce.updateOne({ _id: req.params.id }, { ...sauceObject, _id: req.params.id }) // On prend l'objet créé et on modifie son identifiant pour correspondre à l'id des paramètres de requêtes //
        .then(() => res.status(201).json({ message: 'Sauce modifiée !' }))
        .catch(error => res.status(400).json({ error }));
}; 

