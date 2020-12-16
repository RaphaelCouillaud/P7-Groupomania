const connectmysql = require('../configdb/connectmysql'); // Connection base de données //

//router.post('/', auth, multer, answerControl.createAnswer);//
//router.get('/', auth, answerControl.getAllAnswers);//
//router.delete('/:id', auth, answerControl.deleteAnswer);//

// Création d'une réponse //
exports.createAnswer = (req, res, next) => {
    const userId = req.params.userId;
    const messageId = req.params.messageId;
    const content = req.params.content;   
    

    let createQuery = "INSERT INTO answers (userId, messageId, content, date) VALUES (?, ?, ?, ? )";
    let messageQuery = [userId, messageId, content, date];
    dbConnection.query(createQuery, messageQuery, (error, rows, fields) => {
        if (error) {
            return res.status(400).json({ error: 'Réponse non postée' });
        }
        res.status(201).json({ message: 'Réponse postée' });
    });
};

// Obtention des réponses //
exports.getAllAnswers = (req, res, next) => {
    let listQuery = "SELECT * FROM answers";
    dbConnection.query(listQuery, (error, rows, fields) => {
        if (error) {
            return res.status(400).json({ error: 'Réponses non obtenues' });
        }
        res.status(201).json({ message: 'Réponses obtenues' });
    });
};

// Suppression d'une réponse //
exports.deleteAnswer = (req, res, next) => {
    const id = req.params.id;
    let deleteQuery = "DELETE FROM answers WHERE id=?";
    let messageQuery = [id];
    dbConnection.query(deleteQuery, messageQuery, (error, rows, fields) => {
        if (error) {
            return res.status(400).json({ error: 'Message non supprimé' });
        }
        res.status(201).json({ message: 'Message supprimé' });
    });
};


