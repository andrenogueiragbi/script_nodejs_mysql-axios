module.exports = async () => {
    
    if(global.connectionERP && global.connectionERP.state !== 'disconnected')
    return global.connectionERP;

    const mysql = require("mysql2/promise");
    const connectionERP = await mysql.createConnection("mysql://root:senha@ip:port/database");
    //console.log("Conectou no MySQL ERP!");
    global.connectionERP = connectionERP;
    return connectionERP;
}




