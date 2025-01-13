'use strict';

const { User } = require('../models');
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate([
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
        firstName: 'Demo',
        lastName: 'Littion'
      },
      {
        email: 'user1@user.io',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password2'),
        firstName: 'polat',
        lastName: 'Alemdar'
      },
      {
        email: 'user2@user.io',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password3'),
        firstName: 'Suleyman',
        lastName: 'Cakir'
      },
      {
        email: 'demo@demo.io',
        username: 'DemoUser',
        hashedPassword: bcrypt.hashSync('password'),
        firstName: 'Demo',
        lastName: 'User'
      },
      {
        email: 'pb@user.io',
        username: 'hero',
        hashedPassword: bcrypt.hashSync('password'),
        firstName: 'memati',
        lastName: 'Bas'
      },
      {
        email: 'maleficent@user.io',
        username: 'sikko',
        hashedPassword: bcrypt.hashSync('password'),
        firstName: 'gullu',
        lastName: 'Erhan'
      }
    ], { validate: true });
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2', 'DemoUser', 'hero', 'sikko'] }
    }, {});
  }
};
