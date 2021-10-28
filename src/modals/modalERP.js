const connect = require("../database/dbERP");


module.exports = {
    async select(querySelect) {
        try {
            const conn = await connect();
            const [rows] = await conn.query(querySelect);
            return {
                staus: 1,
                mesage: 'Success to search in DB.',
                data: rows
            };
        } catch (error) {
            console.log('failure to search in DB.');
            return {
                staus: 0,
                message: error.message,
                data: null
            }

        };

    }
}
