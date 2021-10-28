module.exports = async () => {
    if(global.connection178_6 && global.connection178_6.state !== 'disconnected'){
        console.log('Mysql informa: retonando conexão ja existente')
        return global.connection178_6;

    }
    

    const mysql = require("mysql2/promise");
    const connection178_6 = await mysql.createConnection("mysql://root:senha@ip:port/database");
    console.log('Mysql informa: Iniciando nova conexão!')
    global.connection178_6 = connection178_6;
    return connection178_6;
}


