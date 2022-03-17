const filmes = [];

const { nanoid } = require('nanoid');

class FilmesController {

    async listar(req, res) {
        // LISTAGEM DE TODOS OS FILMES MOSTRANDO O NOME
        // O NOME É CLICAVEL E REDIRECIONA PARA O DETALHAR DO FILME
        // let html = '';
        // filmes.forEach(filme => {
        //     html += `<a href="/filmes/${filme.id}">${filme.nome}</a><br></br>`
        // })
        
        // return res.send(html);
        return res.render('listagem', { filmes: filmes });
    }

    async detalhar(req, res) {
        const { id } = req.params;
        // for  / filter
        for (let index = 0; index < filmes.length; index++) {
            if (filmes[index].id == id) {
                // retorna esse cara!
            }
        }

        const filmeFiltrado = filmes.filter(f => f.id == id);
        if (filmeFiltrado.length > 0) {
            // return res.send(`<pre>
            //     ${JSON.stringify(filmeFiltrado[0], null, 2)}
            // </pre>`)
            return res.render('detalhar', { filme: filmeFiltrado[0] });
        } else {
            return res.send('FILME NAO ENCONTRADO');
        }

        // MOSTRA TODOS OS DADOS DO FILME
        //return res.send('Essa deveria detalhar um filme ' + req.params.id);
    }

    async cadastrar(req, res) {
        //DEPOIS DE CADASTRAR, REDIRECIONA PARA A LISTAGEM
        console.log(`Cadastrando um filme`);
        console.log({ body: req.body });
        filmes.push({
            id: nanoid(8),
            ...req.body
        });
        console.log(filmes)
        return res.redirect('/filmes');
        // return res.send('Deveria cadastrar um filme');
    }
}

module.exports = { FilmesController }