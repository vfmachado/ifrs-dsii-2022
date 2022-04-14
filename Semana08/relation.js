const { dbcon, sequelize } = require('./connection');
const { User } = require("./User");
const { Post } = require("./Post");

(async () => {
    // INICIALIZACAO
    await dbcon();

    User.hasMany(Post);
    Post.belongsTo(User);

    await sequelize.sync();

    // O QUE QUEREMOS FAZER
    // const result = await User.findAll();
    // console.log(result);

    const user = await User.findOne({
        where: {
            email: 'vinicius.machado@riogrande.ifrs.edu.br'
        },
        include: Post 
    });
    // await user.getPost();
    
    console.log({ user });

    // await  Post.create({
    //     title: 'Teste SEQ',
    //     text: 'E java tbm',
    //     userId: user.id
    // });

})();