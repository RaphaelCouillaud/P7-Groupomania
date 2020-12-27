//const connectmysql = require('../configdb/connectmysql'); // Connection base de données //
const { Answer } = require('../models/index');

//router.post('/', auth, multer, answerControl.createAnswer);//
//router.get('/', auth, answerControl.getAllAnswers);//
//router.delete('/:id', auth, answerControl.deleteAnswer);//

// Création d'une réponse //
exports.createAnswer = (req, res, next) => {
    const answerContent = req.body.content; // Extraction de l'objet JSON //
    const userId = req.body.userId;
    const messageId = req.body.messageId;
    Answer.create({
        UserId: userId,
        MessageId: messageId,
        answerContent: content
    })
        .then((newAnswer) => res.status(201).json({ message: 'Réponse enregistrée !' }))
        .catch(error => res.status(400).json({ error }));
};

// Obtention des réponses //
exports.getAllAnswers = (req, res, next) => {
    Answer.findAll()
        .then((answers) => res.status(200).json(answers))
        .catch(error => res.status(400).json({ error }));
};

// Suppression d'une réponse //
exports.deleteAnswer = (req, res, next) => {
    Answer.findOne({ id: req.params.id }) // On trouve l'objet dans la base de données //
        .then((answer) => {
            if (req.answerId == req.params.id) { // Une fois la suppression, on l'indique à la base de données //
                Answer.destroy() // Méthode delete //
                    .then(() => res.status(200).json({ message: 'Réponse supprimée' }))
                    .catch(error => res.status(400).json({ error }));
            } else {
                res.status(400).json({ error })
            }
        });
};


