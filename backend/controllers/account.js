const connectmysql = require('../config/connectmysql'); // Connection base de données //


// Suppression d'un compte //
exports.deleteAccount = (req, res, next) => { 
    const id = req.params.id; // On trouve l'objet dans la base de données //
    let deleteQuery = "DELETE FROM users WHERE id=?"; 
    let delQuery = [id];
    dbConnection.query(deleteQuery, delQuery, (error, rows, fields) => {
        if (error) {
            return res.status(400).json({ error: 'Utilisateur non supprimé' });
        }
        res.status(201).json({ message: 'Utilisateur supprimé' });
    });
};

// Obtention d'un compte //
exports.getOneAccount = (req, res, next) => { 
    const id = req.params.id;
    let selectQuery = "SELECT id, email, password, lastname, firstname, jobtitle FROM users WHERE id=?"; 
    let oneQuery = [id];
    dbConnection.query(selectQuery, oneQuery, (error, rows, fields) => {
        if (error) {
            return res.status(400).json({ error: 'Utilisateur non obtenu' });
        }
        res.status(201).json({ message: 'Utilisateur obtenu' });
    });
};

// Obtention des comptes //
exports.getAllAccounts = (req, res, next) => { 
    let selectListQuery = "SELECT id, email, password, lastname, firstname, jobtitle FROM users"; 
    dbConnection.query(selectListQuery, (error, rows, fields) => {
        if (error) {
            return res.status(400).json({ error: 'Utilisateurs non obtenus' });
        }
        res.status(201).json({ message: 'Utilisateurs obtenus' });
    });
};

// // Modification d'un compte //
exports.modifyAccount = (req, res, next) => { 
    const id = req.params.id;   
    const lastname = req.body.lastname;
    const firstname = req.body.firstname;
    const jobtitle = req.body.jobtitle;
    let updateQuery = "UPDATE users SET lastname=?, firstname=?, jobtitle=? WHERE id=?"; 
    let changeQuery = [id, lastname, firstname, jobtitle];
    dbConnection.query(updateQuery, changeQuery, (error, rows, fields) => {
        if (error) {
            return res.status(500).json({ error: 'Modification non effectuée' });
        }
        res.status(201).json({ message: 'Modification effectuée' });
    });
};

