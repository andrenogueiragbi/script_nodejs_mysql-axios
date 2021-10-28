

const select = 'SELECT * FROM teste;';

const InsertInto = 'INSERT INTO teste (nome,telefone) VALUES(?,?);'
const arrayInto = ['Ze maria', '546985'];

const deleteData = 'DELETE FROM teste WHERE id = 100'

const updateSet = 'UPDATE teste SET nome=?, telefone=? WHERE id =?;';
const dataUpdate = { nome: 'teste3', telefone: 'teste3', cond: 1 };


async function searchClient() {
    const clients = await db.select(select);
    console.log(clients);
}


async function salveClient() {
    const salveclients = await db.insert(InsertInto, arrayInto)
    console.log(salveclients);

}

async function deleteClient() {
    const confirma = true;
    const deleteClients = await db.delete(deleteData, confirma);
    console.log(deleteClients);
}

async function updateClient() {
    const updateClients = await db.update(updateSet, dataUpdate);
    console.log(updateClients);

}


//searchClient();
//salveClient();
//deleteClient();
//updateClient();

//metrica projeto orientao á objetos

