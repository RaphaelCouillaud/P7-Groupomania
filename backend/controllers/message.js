//const connectmysql = require('../configdb/connectmysql'); // Connection base de données //
const fs = require ('fs'); // Création et gestion des fichiers //

//router.post('/', auth, multer, messageControl.createMessage);
//router.delete('/:id', auth, messageControl.deleteMessage);//
//router.get('/:id', auth, messageControl.getOneMessage);//
//router.get('/', auth, messageControl.getAllMessages);//
//router.put('/:id', auth, multer, messageControl.modifyMessage);//

// Création d'un message //
exports.createMessage = (req, res, next) => {
    const title = req.params.title;
    const content = req.params.content;
    // Protocole, nom d'hôte, images, nom du fichier //
    const image = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
    const userId = req.params.userId;

    let createQuery = "INSERT INTO messages (title, content, image, date, userId) VALUES (?, ?, ?, ?, ? )";
    let messageQuery = [title, content, image, date, userId];
    dbConnection.query(createQuery, messageQuery, (error, rows, fields) => {
        if (error) {
            return res.status(400).json({ error: 'Message non posté' });
        }
        res.status(201).json({ message: 'Message posté' });
    });
};

// Suppression d'un message //
exports.deleteMessage = (req, res, next) => {
    const id = req.params.id;       
    let deleteQuery = "DELETE FROM messages WHERE id=?";
    let messageQuery = [id];
    dbConnection.query(deleteQuery, messageQuery, (error, rows, fields) => {
        if (error) {
            return res.status(400).json({ error: 'Message non supprimé' });
        }
        res.status(201).json({ message: 'Message supprimé' });
    });
};

// Obtention d'un message //
exports.getOneMessage = (req, res, next) => {
    const id = req.params.id;
    let chooseQuery = "SELECT id, title, content, image, date, userId FROM messages WHERE id=?";
    let messageQuery = [id];
    dbConnection.query(chooseQuery, messageQuery, (error, rows, fields) => {
        if (error) {
            return res.status(400).json({ error: 'Message non obtenu' });
        }
        res.status(201).json({ message: 'Message obtenu' });
    });
};

// Obtention des messages //
exports.getAllMessages = (req, res, next) => {     
    let listQuery = "SELECT * FROM messages";    
    dbConnection.query(listQuery, (error, rows, fields) => {
        if (error) {
            return res.status(400).json({ error: 'Messages non obtenus' });
        }
        res.status(201).json({ message: 'Messages obtenus' });
    });
};

// Création d'un message //
exports.modifyMessage = (req, res, next) => {
    const title = req.params.title;
    const content = req.params.content;
    // Protocole, nom d'hôte, images, nom du fichier //
    const image = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
    const id = req.params.id;

    let modifyQuery = "UPDATE messages SET title = ?, content = ?, image = ? WHERE id = ?";
    let updateQuery = [title, content, image, id];
    dbConnection.query(modifyQuery, updateQuery, (error, rows, fields) => {
        if (error) {
            return res.status(400).json({ error: 'Message non posté' });
        }
        res.status(201).json({ message: 'Message posté' });
    });
};

