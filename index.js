const moment = require('moment')
const nome = "";
const idade = 33;

console.log({ nome, idade, hoje: moment().format("DD/MM/YYYY") })