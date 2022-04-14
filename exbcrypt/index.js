/*
no terminal:
    npm init --yes
    npm i bcrypt

dentro da pasta
    criar index.js
*/

const bcrypt = require('bcrypt');

console.log("Rodando meu teste com bcrypt")

const senha = "adminadmin"
const cript = bcrypt.hashSync(senha, 10);

console.log({senha, cript});

const compCerto = bcrypt.compareSync(senha, cript);
const compErrado = bcrypt.compareSync("qlqr outra senha", cript);

console.log({
    compCerto, compErrado
});