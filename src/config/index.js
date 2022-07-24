const DatabaseSecrets = require("./databaseSecrets");
const {jwt} = require('./envManager');


module.exports = {
    database: DatabaseSecrets,
    jwt
}