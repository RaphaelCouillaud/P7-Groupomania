//const connectmysql = require('../configdb/connectmysql'); // Connection base de données //
const { Answer } = require('../models/index');

//router.post('/', auth, multer, answerControl.createAnswer);//
//router.get('/', auth, answerControl.getAllAnswers);//
//router.delete('/:id', auth, answerControl.deleteAnswer);//
//router.get('/:id', auth, answerControl.getOneAnswer);//

// Création d'une réponse //
exports.createAnswer = (req, res, next) => {
    const answerContent = req.body.content; // Extraction de l'objet JSON //
    console.log(req.body.content)
    const userId = req.body.userId;
    console.log(userId)
    const messageId = req.body.messageId;
    console.log(messageId)
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

// Obtention d'une réponse //
exports.getOneAnswer = (req, res, next) => {
    Answer.findOne({ where: { id: req.params.id } })
        .then((answer) => res.status(200).json(message))
        .catch(error => res.status(404).json({ error }));
};

// Suppression d'une réponse //
exports.deleteAnswer = (req, res, next) => {
    Answer.findOne({ where: { id: req.params.id } }) // On trouve l'objet dans la base de données //
        .then((answer) => {
            Answer.destroy({ where: { id: req.params.id } }) // Méthode //
                .then(() => res.status(200).json({ message: 'Réponse supprimée' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

