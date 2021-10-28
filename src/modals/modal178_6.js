const connect = require("../database/db178_6");


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

    },

    async insert(queryInsert, values) {

        try {
            const conn = await connect();
            await conn.query(queryInsert, values);
            return {
                status: 1,
                message: 'Success to save in DB.'
            };

        } catch (error) {
            return {
                status: 0,
                message: error.message,
            };


        }


    },

    async delete(queryDelete, confirm) {

        const conn = await connect();
        if (typeof (confirm) == 'boolean' && confirm) {
            try {
                await conn.query(queryDelete);
                return {
                    status: 1,
                    message: 'Success to delete in DB.'
                };


            } catch (error) {
                return {
                    status: 0,
                    message: error.message,
                };

            }

        }
        return {
            status: 0,
            message: 'Check datas please.',
        };


    },
    async update(queryUpdate, values) {
        data = [values.nome, values.telefone, values.cond]
        const conn = await connect();
        return await conn.query(queryUpdate, data);
        conn.close();

    },


    



}
