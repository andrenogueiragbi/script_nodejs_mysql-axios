const request = require('request-promise')
const axios = require('axios')

async function ValidNumber(phone) {
    let phoneNumber = phone.replace(/[^0-9]/g, '');
    if (phoneNumber.length == 11) {
        return {
            status: 1,
            message: 'Format number Ok!',
            phone: phoneNumber
        }


    } else if (phoneNumber.length == 10) {
        phoneNumber = phoneNumber.substr(0, 2) + '9' + phoneNumber.substr(2,);;

        return {
            status: 1,
            message: 'Format edit add number 9!',
            phone: phoneNumber
        }
    } else {
        return {
            status: 0,
            message: 'Format invalid!',
            phone: phoneNumber
        }
    }
}



async function whatsapp(phone,nome) {

    const config = {
        method: 'post',
        url: 'http://172.17.1.253:3333/existe',
        headers: {},
        data: {
            "usuario": "user",
            "senha": "senha",
            "numero": phone
        }
    }

    let res = await axios(config)

    //console.log(res.data,nome+' '+phone);

    if(res.data && res.data.numero_existe){
        return {
            status: 1,
            exist: true
        }
    }else{
        return{
            status: 0,
            exist: false
        }

    }
 
}

//whatsapp('77999770606');

module.exports = { ValidNumber,whatsapp }




