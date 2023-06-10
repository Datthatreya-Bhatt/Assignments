const { Sequelize, DataTypes } = require('sequelize');


const sequelize = new Sequelize('expense', 'root', '1pl@teGolibaje', {
    host: 'localhost',
    dialect: 'mysql',
  });


const User = sequelize.define('user', {
  // Define the columns of the table
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement:true,
    unique:true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    // validate: {
    //   isEmail: true,
    // },
  },
  password: {
    type: DataTypes.STRING,
    allowNull:false,

  }
});




const Expense = sequelize.define('userexepense', {
    // Define the columns of the table
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement:true,
      unique:true
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    category: {
      type: DataTypes.STRING,
      allowNull:false,
      
    }
  });
  


// Create the table in the database
async function createTable(obj) {
  try {
    await obj.sync({ force: false });
    console.log('Table created successfully.');
  } catch (error) {
    console.error('Unable to create table:', error);
  }
}


User.hasMany(Expense,{foreignKey: 'userId'});
Expense.belongsTo(User,{foreignKey:'userId'});

createTable(User);
createTable(Expense);

module.exports = {
    User:User,
    Expense:Expense
};
