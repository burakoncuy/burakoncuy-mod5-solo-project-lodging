'use strict';

const { SpotImage } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await SpotImage.bulkCreate([
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-1303122243672833910/original/f45bbb56-1c76-4c7a-bb7a-7e765d4094fd.jpeg?im_w=1200&im_format=avif',
        preview: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-1303122243672833910/original/45167d6e-27f5-4d28-b3d1-320bd678c0ea.jpeg?im_w=1440&im_format=avif',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-1303122243672833910/original/489b2717-e4ac-45bd-a61d-ba777f269ea6.jpeg?im_w=1440&im_format=avif',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-1303122243672833910/original/16389fc1-07f7-4866-a1d1-4ad4ebcb8d45.jpeg?im_w=1440&im_format=avif',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-1303122243672833910/original/019615c1-687d-493c-aaad-d367f02c44e6.jpeg?im_w=1440&im_format=avif',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/9b04b01e-3244-4f1a-b2ae-934590a87fd2.jpg?im_w=1200&im_format=avif',
        preview: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-21409981/original/a8fa243d-dac8-4238-93e5-f7aa33072ff8.jpeg?im_w=1200&im_format=avif',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 2,
        url: 'https://images.pexels.com/photos/1510173/pexels-photo-1510173.jpeg',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/7e1b66b8-47f8-41a6-bcb5-084b81b27674.jpg?im_w=1440&im_format=avif',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/9d4fd7b8-cbb0-4f92-b71f-369da01bdfe8.jpg?im_w=1440&im_format=avif',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1301544634447481843/original/e14b8b21-889d-4b75-ab76-368a8ee7c3a3.jpeg?im_w=1440&im_format=avif',
        preview: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1301544634447481843/original/2d96d104-fdf3-4a54-9efa-8535385bc2f8.jpeg?im_w=1440&im_format=avif',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1301544634447481843/original/264d36ff-f586-4de8-b469-0f76448c9cc5.jpeg?im_w=1440&im_format=avif',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1301544634447481843/original/41de89c3-1665-45d6-b01d-7ba18fc2dcab.jpeg?im_w=1440&im_format=avif',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1301544634447481843/original/609986ea-ed7d-4f6c-9667-4c4da89b9a25.jpeg?im_w=1440&im_format=avif',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-982015015526224217/original/35c6248f-175c-4782-90d1-27a38f955b7c.jpeg?im_w=1200&im_format=avif',
        preview: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-982015015526224217/original/94544f66-db5b-42e1-bbf2-0703d5146897.jpeg?im_w=1200&im_format=avif',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-982015015526224217/original/13ee0430-fe66-4565-918d-530ed6fe3889.jpeg?im_w=1440&im_format=avif',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-982015015526224217/original/e45f2017-79f4-4f41-886f-2c5ae7af6142.jpeg?im_w=1440&im_format=avif',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-982015015526224217/original/c8c17858-c46c-4864-80fc-cdda1586d282.png?im_w=1440&im_format=avif',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-982015015526224217/original/d67ac93f-842a-468e-999e-1fdc24767319.jpeg?im_w=1440&im_format=avif',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-585542978749767728/original/c824e029-08a5-4960-b514-dceb6ea9bc90.jpeg?im_w=1200&im_format=avif',
        preview: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-585542978749767728/original/fe752728-928d-4d35-83c8-d835afa44546.jpeg?im_w=1440&im_format=avif',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-585542978749767728/original/0c0619e3-11a2-4d82-b41c-70bf944216ef.jpeg?im_w=1440&im_format=avif',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-585542978749767728/original/def381cf-804e-4f28-ba7c-9a5ac98dee1b.jpeg?im_w=1440&im_format=avif',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-585542978749767728/original/a1c3fb01-be72-405a-b990-3ec976788576.jpeg?im_w=1440&im_format=avif',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-1098942743638221845/original/cceed6d6-7023-4034-841a-a56b8b94756f.jpeg?im_w=1200&im_format=avif',
        preview: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-1098942743638221845/original/f11a7520-78bd-4f8e-8a20-ca1d5dac9c8c.jpeg?im_w=1440&im_format=avif',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-1098942743638221845/original/daaa772a-5b30-4180-a4cd-2dbdfdc6d6fa.jpeg?im_w=1440&im_format=avif',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-1098942743638221845/original/292a0314-3dfb-4959-9608-9d34897695b7.jpeg?im_w=1440&im_format=avif',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-1098942743638221845/original/b347cddd-85d6-4f6e-aa2d-923da8790348.jpeg?im_w=1440&im_format=avif',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/d5529c23-133b-4a60-a815-5d8ed75ccb5b.jpg?im_w=1200&im_format=avif',
        preview: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/2eefe09e-1809-46e1-b5ee-685caf9e8042.jpg?im_w=1440&im_format=avif',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/39e1302d-54ff-468c-9377-6079498705ce.jpg?im_w=1440&im_format=avif',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/c01b2a3a-43f5-49af-b3f9-3bc750087fdf.jpg?im_w=1440&im_format=avif',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/5c0d557a-05ee-4034-a11d-9ab0e1648c23.jpg?im_w=1440&im_format=avif',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-578961204095259842/original/f4af6040-c6c4-4b5b-b3ad-bb394babdbbc.jpeg?im_w=1440&im_format=avif',
        preview: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-578961204095259842/original/45b9becf-812a-4a02-9985-e14447f9f2fb.jpeg?im_w=1440&im_format=avif',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-578961204095259842/original/de900ab6-569c-4eb0-ac56-71fe0e8ef228.jpeg?im_w=1440&im_format=avif',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-578961204095259842/original/888dae24-31a8-4abe-bd02-861b71361923.jpeg?im_w=1440&im_format=avif',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-578961204095259842/original/0e07ac81-94bf-4a60-a9be-f8eebb4fd269.jpeg?im_w=1440&im_format=avif',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], { validate: true });
  },

  async down(queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('SpotImages', {
      url: {
        [Op.in]: [
          'https://images.pexels.com/photos/463734/pexels-photo-463734.jpeg',
          'https://images.pexels.com/photos/158228/home-farmhouse-old-house-old-farmhouse-158228.jpeg',
          'https://images.pexels.com/photos/221502/pexels-photo-221502.jpeg',
          'https://images.pexels.com/photos/442116/pexels-photo-442116.jpeg',
          'https://images.pexels.com/photos/577697/pexels-photo-577697.jpeg',
          'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
          'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg',
          'https://images.pexels.com/photos/1510173/pexels-photo-1510173.jpeg',
          'https://images.pexels.com/photos/533157/pexels-photo-533157.jpeg',
          'https://images.pexels.com/photos/9139178/pexels-photo-9139178.jpeg',
          'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
          'https://images.pexels.com/photos/462205/pexels-photo-462205.jpeg',
          'https://images.pexels.com/photos/247937/pexels-photo-247937.jpeg',
          'https://images.pexels.com/photos/7535020/pexels-photo-7535020.jpeg',
          'https://images.pexels.com/photos/7545789/pexels-photo-7545789.jpeg',
          'https://cdn.pixabay.com/photo/2016/08/16/03/47/exterior-1597094_1280.jpg',
          'https://cdn.pixabay.com/photo/2016/07/13/23/43/chefs-kitchen-1515844_1280.jpg',
          'https://cdn.pixabay.com/photo/2016/08/16/03/39/home-1597079_1280.jpg',
          'https://images.pexels.com/photos/238377/pexels-photo-238377.jpeg',
          'https://cdn.pixabay.com/photo/2016/08/16/03/47/exterior-1597096_1280.jpg',
          'https://cdn.pixabay.com/photo/2017/06/13/22/42/kitchen-2400367_1280.jpg',
          'https://cdn.pixabay.com/photo/2022/10/09/02/16/haunted-house-7508035_1280.jpg',
          'https://cdn.pixabay.com/photo/2020/03/18/17/01/old-house-4944818_1280.jpg',
          'https://cdn.pixabay.com/photo/2015/02/08/09/47/urban-628274_1280.jpg',
          'https://cdn.pixabay.com/photo/2021/08/27/14/08/abandoned-house-6578755_1280.jpg',
          'https://images.pexels.com/photos/3714192/pexels-photo-3714192.jpeg',
          'https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg',
          'https://images.pexels.com/photos/1328032/pexels-photo-1328032.jpeg',
          'https://images.pexels.com/photos/322316/pexels-photo-322316.jpeg',
          'https://images.pexels.com/photos/2131853/pexels-photo-2131853.jpeg',
          'https://images.pexels.com/photos/2138921/pexels-photo-2138921.jpeg',
          'https://images.pexels.com/photos/19573734/pexels-photo-19573734/free-photo-of-facade-of-a-building.jpeg',
          'https://images.pexels.com/photos/19573751/pexels-photo-19573751/free-photo-of-an-entrance-to-the-building.jpeg',
          'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg',
          'https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg',
          'https://images.pexels.com/photos/3837464/pexels-photo-3837464.jpeg',
          'https://images.pexels.com/photos/14998334/pexels-photo-14998334/free-photo-of-facade-of-white-apartment-building-under-white-sky.jpeg',
          'https://images.pexels.com/photos/6758782/pexels-photo-6758782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          'https://images.pexels.com/photos/6758785/pexels-photo-6758785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          'https://images.pexels.com/photos/6758786/pexels-photo-6758786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          'https://images.pexels.com/photos/6758787/pexels-photo-6758787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        ]
      }
    }, {});
  }
};
