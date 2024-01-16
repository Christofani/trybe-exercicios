// src/models/user.model.js

const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNum: DataTypes.STRING,
  });
  (async () => {
    await sequelize.sync({ force:true});
    // as funções vão aqui 
    const sara = User.create({
      fullname: 'Sara Silvio Santos',
      email: 'sara.ss@trybe.com',
    });
 
    await sara.save();
    console.log(sara instanceof User);
    console.log(sara.fullName);
  })();

  return User;
};

module.exports = UserModel;