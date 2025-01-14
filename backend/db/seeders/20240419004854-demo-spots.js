'use strict';

const { Spot } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await Spot.bulkCreate([
      {
        ownerId: 4,
        address: "309 Windor Pl",
        city: "Macungie",
        state: "PA",
        country: "United States of America",
        lat: 37.7645358,
        lng: -122.4730327,
        name: "Modern Nordic Designed Cabin",
        description: "Newly designed Modern Nordic Cabin. Escape to the tranquility of the mountains and lakes.",
        price: 215,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 2,
        address: "411 Webster St",
        city: "Rhinebeck",
        state: "NY",
        country: "United States of America",
        lat: 37.832492,
        lng: -122.283468,
        name: "CArchitectural wonder in the woods",
        description: "Unique experience, secluded.Enjoy a weekend or a few days eco-friendly retreat in an architectural, geometric masterpiece on 30 preserved acres just minutes from all that Rhinebeck and the Hudson Valley have to offer.",
        price: 325,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 1,
        address: "2030 Rolling Meadow  Dr",
        city: "Tulum",
        state: "PA",
        country: "Mexico",
        lat: 34.052235,
        lng: -118.243683,
        name: "New penthouse with private pool.",
        description: "you will enjoy the perfect balance of tranquility and convenience. Whether you are here to relax or explore, this penthouse is the ultimate getaway.",
        price: 385,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 5,
        address: "512 Musk Dr",
        city: "Las Vegas",
        state: "NV",
        country: "United States of America",
        lat: 31.056235,
        lng: -116.245683,
        name: "One of a Kind Luxury Studio",
        description: "Come experience the most upgraded studio unit @Palms Place with over $60k in tasteful upgrades! Located on the 32th floor with beautiful mountain views",
        price: 725,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        ownerId: 1,
        address: "4 Monhegan",
        city: "Hurricane",
        state: "UT",
        country: "United States of America",
        lat: 32.256383,
        lng: -114.243683,
        name: "9 Bedrooms -Huge Private Pool -Indoor Sports Court",
        description: "Welcome to the Grand Desert Oasis, your very own private resort near Zion National Park and Sand Hollow Resort. With 9 spacious bedrooms, 10 bathrooms, 2 full kitchens, and a detached casita, this 10,500 sq ft home offers plenty of space for everyone",
        price: 485,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {

        ownerId: 6,
        address: "13 Lehigh St",
        city: "East Hampton",
        state: "NY",
        country: "United States of America",
        lat: 37.256383,
        lng: -110.243683,
        name: "Glass Villa",
        description: "Experience unparalleled luxury at the Glass Villa in East Hampton. Enjoy serene beauty with lush foliage, breathtaking views, and absolute privacy",
        price: 520,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 5,
        address: "456 Cellar Rd",
        city: "New York",
        state: "NY",
        country: "United States of America",
        lat: 32.256383,
        lng: -117.243683,
        name: "Private, Beautiful Brownstone Guest Suite",
        description: "We offer a luxurious, quiet, clean, private 700 square ft space for you to relax in. The space is a guest suite that is part of our own  larger space where we live.",
        price: 395,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 1,
        address: "Dal Sokak",
        city: "Istanbul",
        state: "TR",
        country: "Turkey",
        lat: 31.256383,
        lng: -115.243683,
        name: "Amazing Bosphorus View",
        description: "The flat is on the 3rd floor and can accommodate up to 5 people. The building and the flat itself maintain it's magical 19th century spirit.",
        price: 285,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], { validate: true });
  },

 async down(queryInterface, Sequelize) {
    options.tableName = 'Spots';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      address: { [Op.in]: [
        '123 Victory Circle',
        '123 Maple Grove Lane, Suite 4B',
        '465 Elmwood Ave',
        '5897 Woodhaven Circle',
        '1313 Eerie Hollow Lane',
        '123 Seaside Ln',
        '456 Brickstone Ave, Apt 12B',
        '789 Lone Star Lane, Apt 5C'
      ]}
    }, {});
  }
};