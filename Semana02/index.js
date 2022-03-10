// npm init  -> isso vai gerar o package.json
// "dev": "node index.js" -> scripts no package.json
// npm run dev -> para executar o script

/*
INSTALAÇÃO DE PACOTES

  npm i nome  => instalar dependencia
  npm i --save-dev => instalar dep de desenvolvimento

*/

const users = [];

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const { 
    query, 
    params,
    baseUrl,
    path,
   } = req;
  res.send(`
    <h1>Vini</h1>
    <h3>Minha pagina com express e nodemon!!!</h3>`); 
    // <pre>
    //   QUERY: ${JSON.stringify(query, null, 2)}
    //   PARAMS: ${JSON.stringify(params, null, 2)}
    //   BASEURL: ${JSON.stringify(baseUrl, null, 2)}
    //   PATH: ${JSON.stringify(path, null, 2)}
    // </pre>
    // `);
});

// request para /fatorial?value=X   onde X é um número
app.get('/fatorial', (req, res) => {
  const { value } = req.query;
  // const value = req.query.value
  const number = Number(value);
  if (isNaN(number)) {
    return res.send('O usuario mandou o um valor invalido');
  } 

  let fat = 1;
  for (let i = 1; i <= number; i++) {
    fat *= i;
  }
  return res.send(`${number}! = ${fat}`);
});

app.get('/fat/:numero', (req, res) => {
  const { numero } = req.params;
  console.log(`O usuario enviou request para o numero ${numero}`);
  return res.send(`Fat de ${numero}`);
}); 

app.get('/msg/:quantidade/:texto', (req, res) => {
  // ENVIA DE VOLTA PARA O USUÁRIO O TEXTO REPETIDO QUANTIDADE VEZES
  const { quantidade, texto } = req.params;
  let quant = Number(quantidade);
  // let resposta = "";
  // for (let i = 0; i < quant; i++) {
  //   resposta += texto + '\n';
  // }
  // res.send(resposta);
  res.send(`${texto}<br>`.repeat(quant));
});

app.get('/envia', (req, res) => {
  const { name, age } = req.query;
  users.push({
    name,
    age
  });
  return res.send(`usuario ${name} com ${age} anos`);
});

app.get('/lista', (req, res) => {
  res.send(`<pre>${JSON.stringify(users, null, 2)}</pre>`);
});

app.get('/lista/:id', (req, res) => {
  // RETORNA O USUÁRIO NA POSIÇÃO INDICADA PELO ID
});

// (req, res) => {}
// function(req, res) {}

app.listen(3000, () => {
  console.log(`Server iniciado!`);
});
