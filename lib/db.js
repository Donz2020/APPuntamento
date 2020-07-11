const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '46.252.181.108',
  user: 'ulqhw0vamakiqolm',
  database: 'btxwalttiqzp06etgmgl',
  password: 'v5p7sAMPOi4GHPxLEvQj'
});
connection.connect();
module.exports = connection;