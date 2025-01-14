'use strict';

const { Reviewimage } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // Define your schema in the options object for the production environment
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await Reviewimage.bulkCreate([
      {
        reviewId: 1,
        url: "https://cdn.pixabay.com/photo/2015/05/11/14/51/heart-762564_1280.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        reviewId: 2,
        url: "https://cdn.pixabay.com/photo/2019/10/30/15/45/thumbs-up-4589867_1280.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        reviewId: 3,
        url: "https://cdn.pixabay.com/photo/2016/12/27/15/58/omg-1934214_1280.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], { validate: true });
  },

  async down(queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Reviewimages', {
      url: { [Op.in]: ["https://example.com/image1.jpg", "https://example.com/image2.jpg", "https://example.com/image3.jpg"] }
    }, {});
  }
};
