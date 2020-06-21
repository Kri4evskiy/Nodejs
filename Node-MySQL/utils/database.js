const Sequelize = require('sequelize')

const DB_NAME = 'node-todo'
const USER_NAME = 'root'
const PASSWORD = 'USE_YOR_PSWD_FOR_MYSQL'

const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize