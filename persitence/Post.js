const db = require('./db')
const Post = db.sequelize.define('usuarios', {
    nome: {type: db.Sequelize.STRING},
    idade: {type: db.Sequelize.INTEGER}
})
Post.sync({force: false})
module.exports = Post