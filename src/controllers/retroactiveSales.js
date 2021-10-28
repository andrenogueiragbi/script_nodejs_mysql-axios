const dbERP = require('../modals/modalERP');
const db178_6 = require('../modals/modal178_6')

const check = require('../controllers/validNumber');

const qtdade = 0


const select2 = `SELECT
sc.data_con as data_venda,
c.codcli as codigo_cliente,
c.nome_cli as nome_cliente,
c.celular as celular,
cid.nome_cid as cidade,
ex.valor as perfil
from servicos_cli sc 
JOIN clientes c ON c.codcli =  sc.codcli 
JOIN cidades cid on c.cidade = cid.cidade
JOIN status st ON st.codest = sc.codest
JOIN dados_pop un ON sc.codpop=un.codpop
JOIN servicos s ON sc.codser=s.codser
join valor_campo_extra ex on ex.codigo = sc.codsercli 
LEFT JOIN servicos_pant sp on sp.codser = sc.codser 
JOIN historico_cliente hc ON hc.codsercli=sc.codsercli 
WHERE TRUE 
AND sc.codsercli_p = '' /*'!= Mudança Plano'*/
AND st.codest != '020IN0W6LU' /*Cancelado*/ 
AND s.autentica_radius = 'S'
AND sc.codven != ''
AND s.codser != 'GXJ911AQPJ' /*REMOVIDO PONTO DE ACESSOS*/
AND c.codcli != '6859' /*ELITESOFT*/
AND sc.data_con BETWEEN CURRENT_DATE() -120 AND CURRENT_DATE()
#AND sc.data_con  = CURRENT_DATE()
GROUP by sc.codsercli;`;


async function searchSales() {
    dataFull = await dbERP.select(select2);

    if (dataFull.data) {
        for (const item of dataFull.data) {
            const dataNumber = await check.ValidNumber(item.celular);


            if (dataNumber.status != 0) {
                const whatsapp = await check.whatsapp(dataNumber.phone);

                if (whatsapp.exist) {
                    number = dataNumber.phone
                    77999770606

                    let numberformat = '('+number.substr(0, 2)+')'+' '+number.substr(2,5)+'-'+number.substr(7);

                    console.log(dataNumber.phone+"--"+numberformat);



                    let insert = 'INSERT INTO clientes (nome,cod_cliente,perfil,cidade,cel,email,zap_valido,ultima_pesquisa,data_venda) VALUES(?,?,?,?,?,?,?,?,?);'
                    let values = [item.nome_cliente.trim(), item.codigo_cliente, 'Geral', item.cidade, numberformat, null, 'sim', null, item.data_venda];
                    console.log(values);
                    const result = await db178_6.insert(insert, values);
                    

                } else {

                    console.log(item.nome_cliente.trim() + ' ' + dataNumber.phone + ' não é whatzapp', whatsapp.exist);
                }

            } else {
                console.log(item.nome_cliente.trim() + ' ' + dataNumber.phone + ' é formato inválido');
            }
        };

    } else {
        console.log(dataFull);
    }



}

module.exports = searchSales