const Sequelize = require('sequelize')
// conexao com banco
const sequelize = new Sequelize('db_node', 'root', '9320', {
    host: 'localhost', dialect: 'mysql'
})
module.exports = {
    sequelize: sequelize,
    Sequelize: Sequelize
}