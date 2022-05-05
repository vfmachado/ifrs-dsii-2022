const express = require('express');
const { Image } = require('./models/Image');
const app  = express();

const multer  = require('multer');
const upload = multer({ dest: 'public/images' });

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static('public'));

// PAGINA INICIAL
app.get('/', async (req, res) => {

    const images = await Image.findAll();
    console.log({ quantImages: images.length });
    res.render('initial', { images: images});
});

// PUBLICAR NOVA FOTO
app.post('/', upload.single('image'), async (req, res) => {
    console.log('CHEGUEI NA POSTAGEM');
    console.log({ body: req.body, file: req.file});
    // imagem?
    await Image.create({
        title: req.body.title,
        description: req.body.description,
        url: 'images/' + req.file.filename
    })
    
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Listening at 3000');
})