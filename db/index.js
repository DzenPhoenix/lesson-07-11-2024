const { Pool } = require('pg');
const dbConfig = require('./dbconfig.json');

const pool = new Pool(dbConfig);

module.exports = pool;
