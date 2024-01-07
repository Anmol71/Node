/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable padded-blocks */
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user',
   {
    username: DataTypes.STRING,
    password: DataTypes.STRING

   },   
   {
    freezeTableName: true
   });
   return User;
}
