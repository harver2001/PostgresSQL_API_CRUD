const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "student",
    password: "abcd1234",
    port: 5433,
});

module.exports = pool;
