/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Sequelize } from 'sequelize'
import dbConfig from '../config/db.config'
// eslint-disable-next-line no-labels, @typescript-eslint/no-unused-expressions
database: 'db'
// eslint-disable-next-line no-labels, @typescript-eslint/no-unused-expressions
username: 'anmol'
// eslint-disable-next-line no-labels
password: '123@1b'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const sequelize = new Sequelize(dbConfig.DATABASE, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
}
)

export const db = {}
db.sequelize = sequelize
db.models = {}
// db.models.User = require('./user')(sequelize, Sequelize.DataTypes)
// module.exports = db

try {
  await sequelize.authenticate()
  console.log('Connection has been established successfully.')
} catch (error) {
  console.error('Unable to connect to the database:', error)
}
