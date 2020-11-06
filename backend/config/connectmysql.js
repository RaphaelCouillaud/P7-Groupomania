const mysql = require("mysql"); //On initialise le module dans une variable avec require()//

const connectmysql = mysql.createConnection({

    host: "localhost",

    user: "root",

    password: "bloodredshoes",

    database: "groupomaniadb",

    multipleStatements: true
});

connectmysql.connect(function (err) {
    if (err) throw err;
    console.log("Connecté à la base de données groupomaniadb !");
});

module.exports = connectmysql;

