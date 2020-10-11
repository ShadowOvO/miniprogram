const mysql = require('think-model-mysql');

module.exports = {
    handle: mysql,
    database: 'hiolabsDB',
    prefix: 'hiolabs_',
    encoding: 'utf8mb4',
    host: '114.115.179.0',
    port: '3307',
    user: 'root',
    password: '12345678',
    dateStrings: true
};
