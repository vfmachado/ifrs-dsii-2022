const { dbcon } = require('./connection');
const { User } = require("./User");

(async () => {
    await dbcon();
    const result = await User.findAll();
    console.log(result);
})();