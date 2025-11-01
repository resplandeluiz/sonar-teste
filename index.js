const moment = require('moment')
const nome = "";
const idade = 23;

console.log({ nome, idade, hoje: moment().format("DD/MM/YYYY") })