'use strict';

const { Review} = require('../models')

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // Define your schema in the options object for the production environment
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
  
    await Review.bulkCreate([
      {
        spotId: 1,
        userId: 1,
        review: "We had a great time and really enjoyed our time in the cabin. Everything was as described and we couldn't be happier with the accommodations",
        stars: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 2,
        userId: 2,
        review: "Amazing architecture in a secluded forest. Uses sustainable energy for electricity and heating. Hits both our aesthetic senses and personal values. Highly recommended.",
        stars: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 3,
        userId: 6,
        review: "I would definitely come back. The loft is beautiful, I didn't need to leave the property as I had everything I was looking for to relax. Privacy was what I valued most about my stay. ",
        stars: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 4,
        userId: 5,
        review: "This property was beautiful and impressively clean, exactly as shown in the photos.",
        stars: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
 {
        spotId: 3,
        userId: 1,
        review: "It was quite, beautiful light and just what I was looking for to feel at home,",
        stars: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
  {
        spotId: 6,
        userId: 3,
        review: "Beautiful property, well maintained and with everything you need to enjoy a great vacation.",
        stars: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 7,
        userId: 4,
        review: "Absolutely perfect and a great gem that I would recommend to others. Definitely would book again the next time",
        stars: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 8,
        userId: 5,
        review: "This is the coolest place I have ever stayed. If this is what I could live in all the time, I would. The care that went into this renovation is readily apparent",
        stars: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 9,
        userId: 2,
        review: "The house was super amazing even better than the pictures. The host was easy to get in contact with and always very helpful! Our group had an amazing time everyone loved the house!",
        stars: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], { validate: true });
  },

  async down(queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    options.tableName = 'Reviews';
    return queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [1, 2, 3, 4, 6, 7, 8] }
    });
  }
};
