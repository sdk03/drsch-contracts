const mysql = require('mysql2');

// CHANGE WHILE DEPLOY - feelzUser, Feelz@123?

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user:  process.env.DB_USERNAME || 'root',
  password:  process.env.DB_PASSWORD || 'Bijnor@123?',
  database:  process.env.DB_DATABASE || 'dc',
  port: process.env.DB_PORT || 3306
});

// CHECKING DB CONNECTION
db.connect(error => {
    if(error){console.log(error)}
    else{console.log('DB SUCCESS CONNECTION')}
});

module.exports = db;