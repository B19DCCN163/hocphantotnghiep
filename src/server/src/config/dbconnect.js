const mysql = require('mysql2');

const pool = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '12345679',
    database: 'shopdan',
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0

});

const promisePool = pool.promise();

module.exports = promisePool
