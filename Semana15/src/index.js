const express = require("express");
const axios = require('axios');
const { buscaPostNaAPI } = require("./jsonplaceholder/detail-post");
const { createPostNaAPI } = require("./jsonplaceholder/create-post");
const app = express();

app.use(express.static('public'));

app.use(express.urlencoded());

app.post('/detalhar', async (req, res) => {
    const { postId } = req.body;
    const resultado = await buscaPostNaAPI(postId);
    if (resultado) {
        return res.send({ resultado });
    }
    return res.send("ooops, id nao encontrado");
})

app.post('/criar', async (req, res) => {
    const { title, text } = req.body;
    const resultado = await createPostNaAPI({ title, text });
    if (resultado) {
        return res.send({ resultado });
    }
    return res.send("ooops,  nao consegui cadastrar ");
})

app.get('/', async (req, res) => {

    // https://swapi.dev/api/films/NUMERO

    // const numero = Math.floor(1 + Math.random() * 6);
    const urlBusca = `https://swapi.dev/api/films/${req.query.filme}`; 

    try {
        const responseApi = await axios.get(urlBusca);

        res.send({
            // numero,
            urlBusca,
            statusBusca: responseApi.status,
            dataBusca: responseApi.data
        });
    } catch (error) {
        console.log({error})
        if (error.response.status == 404)
            res.send('NAO FOI POSSIVEL LOCALIZAR O RECURSO NA API');
        else
            res.send('ERRO DESCONHECIDO...');
    }
    
});

app.listen(3000, () => console.log("Escutando na porta 3000"));