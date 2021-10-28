const db = require('./modals/modal178_6');
const sales = require('./controllers/retroactiveSales')
const CronJob = require('cron').CronJob
const teste = require('./controllers/validNumber');


const data = new Date();

/*
1º asterisco representa os segundos (0-59)
2º os minutos (0-59)
3º as horas (0-23)
4º os dias (1-31)
5º os meses (0-11)
6º os dias da semana*/



const job = new CronJob('00 */1 * * * *', () => {
   const data = new Date();
    sales();

    console.log('Rodou!!!');
}, null, true, 'America/Bahia')
