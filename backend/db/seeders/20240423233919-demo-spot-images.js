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
        url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1270271121470508084/original/32a04d8d-f720-4ed9-8626-876ce43b0d90.jpeg?im_w=1440&im_format=avif',
        preview: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1270271121470508084/original/1541148b-45f0-48d7-a31e-3365485099f1.jpeg?im_w=1440&im_format=avif',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1270271121470508084/original/9e526730-eeda-42f9-8a30-ed60cef26f42.jpeg?im_w=1200&im_format=avif',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1270271121470508084/original/5e7a5c79-3eca-4b44-b2cf-af8cce039e7f.jpeg?im_w=1440&im_format=avif',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1270271121470508084/original/30fbbf71-99c5-4ae9-ab01-1477eef6b994.jpeg?im_w=1440&im_format=avif',
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
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-53970983/original/e4c1e526-8278-48f1-946d-6e11e7c0206e.jpeg?im_w=1440&im_format=avif',
        preview: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-53970983/original/e38bc6a2-c48f-4ee9-99e8-a09d0f31bfd5.jpeg?im_w=1440&im_format=avif',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-53970983/original/333644d8-4492-4071-992e-95042b126bb7.jpeg?im_w=1440&im_format=avif',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-53970983/original/876348ee-1683-4634-b374-af4d73125afe.jpeg?im_w=1440&im_format=avif',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-53970983/original/45a0a102-0026-4490-aacd-23c30de8ff84.jpeg?im_w=1440&im_format=avif',
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
          'https://a0.muscache.com/im/pictures/miso/Hosting-53970983/original/45a0a102-0026-4490-aacd-23c30de8ff84.jpeg?im_w=1440&im_format=avif',
          'https://a0.muscache.com/im/pictures/miso/Hosting-53970983/original/876348ee-1683-4634-b374-af4d73125afe.jpeg?im_w=1440&im_format=avif',
          'https://a0.muscache.com/im/pictures/miso/Hosting-53970983/original/333644d8-4492-4071-992e-95042b126bb7.jpeg?im_w=1440&im_format=avif',
          'https://a0.muscache.com/im/pictures/miso/Hosting-53970983/original/e38bc6a2-c48f-4ee9-99e8-a09d0f31bfd5.jpeg?im_w=1440&im_format=avif',
          'https://a0.muscache.com/im/pictures/miso/Hosting-53970983/original/e4c1e526-8278-48f1-946d-6e11e7c0206e.jpeg?im_w=1440&im_format=avif',
          'https://a0.muscache.com/im/pictures/miso/Hosting-578961204095259842/original/0e07ac81-94bf-4a60-a9be-f8eebb4fd269.jpeg?im_w=1440&im_format=avif',
          'https://a0.muscache.com/im/pictures/miso/Hosting-578961204095259842/original/888dae24-31a8-4abe-bd02-861b71361923.jpeg?im_w=1440&im_format=avif',
          'https://a0.muscache.com/im/pictures/miso/Hosting-578961204095259842/original/de900ab6-569c-4eb0-ac56-71fe0e8ef228.jpeg?im_w=1440&im_format=avif',
          'https://a0.muscache.com/im/pictures/miso/Hosting-578961204095259842/original/de900ab6-569c-4eb0-ac56-71fe0e8ef228.jpeg?im_w=1440&im_format=avif',
          'https://a0.muscache.com/im/pictures/miso/Hosting-578961204095259842/original/45b9becf-812a-4a02-9985-e14447f9f2fb.jpeg?im_w=1440&im_format=avif',
          'https://a0.muscache.com/im/pictures/miso/Hosting-578961204095259842/original/f4af6040-c6c4-4b5b-b3ad-bb394babdbbc.jpeg?im_w=1440&im_format=avif',
          'https://a0.muscache.com/im/pictures/5c0d557a-05ee-4034-a11d-9ab0e1648c23.jpg?im_w=1440&im_format=avif',
          'https://a0.muscache.com/im/pictures/c01b2a3a-43f5-49af-b3f9-3bc750087fdf.jpg?im_w=1440&im_format=avif',
          'https://a0.muscache.com/im/pictures/39e1302d-54ff-468c-9377-6079498705ce.jpg?im_w=1440&im_format=avif',
          'https://a0.muscache.com/im/pictures/2eefe09e-1809-46e1-b5ee-685caf9e8042.jpg?im_w=1440&im_format=avif',
          'https://a0.muscache.com/im/pictures/d5529c23-133b-4a60-a815-5d8ed75ccb5b.jpg?im_w=1200&im_format=avif',
          'https://a0.muscache.com/im/pictures/prohost-api/Hosting-1098942743638221845/original/b347cddd-85d6-4f6e-aa2d-923da8790348.jpeg?im_w=1440&im_format=avif',
          'https://a0.muscache.com/im/pictures/prohost-api/Hosting-1098942743638221845/original/292a0314-3dfb-4959-9608-9d34897695b7.jpeg?im_w=1440&im_format=avif',
          'https://a0.muscache.com/im/pictures/prohost-api/Hosting-1098942743638221845/original/daaa772a-5b30-4180-a4cd-2dbdfdc6d6fa.jpeg?im_w=1440&im_format=avif',
          'https://a0.muscache.com/im/pictures/prohost-api/Hosting-1098942743638221845/original/f11a7520-78bd-4f8e-8a20-ca1d5dac9c8c.jpeg?im_w=1440&im_format=avif',
          'https://a0.muscache.com/im/pictures/prohost-api/Hosting-1098942743638221845/original/cceed6d6-7023-4034-841a-a56b8b94756f.jpeg?im_w=1200&im_format=avif',
          'https://a0.muscache.com/im/pictures/miso/Hosting-585542978749767728/original/a1c3fb01-be72-405a-b990-3ec976788576.jpeg?im_w=1440&im_format=avif',
          'https://a0.muscache.com/im/pictures/miso/Hosting-585542978749767728/original/def381cf-804e-4f28-ba7c-9a5ac98dee1b.jpeg?im_w=1440&im_format=avif',
          'https://a0.muscache.com/im/pictures/miso/Hosting-585542978749767728/original/0c0619e3-11a2-4d82-b41c-70bf944216ef.jpeg?im_w=1440&im_format=avif',
          'https://a0.muscache.com/im/pictures/miso/Hosting-585542978749767728/original/fe752728-928d-4d35-83c8-d835afa44546.jpeg?im_w=1440&im_format=avif',
          'https://a0.muscache.com/im/pictures/miso/Hosting-585542978749767728/original/c824e029-08a5-4960-b514-dceb6ea9bc90.jpeg?im_w=1200&im_format=avif',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-982015015526224217/original/d67ac93f-842a-468e-999e-1fdc24767319.jpeg?im_w=1440&im_format=avif',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-982015015526224217/original/c8c17858-c46c-4864-80fc-cdda1586d282.png?im_w=1440&im_format=avif',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-982015015526224217/original/e45f2017-79f4-4f41-886f-2c5ae7af6142.jpeg?im_w=1440&im_format=avif',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-982015015526224217/original/13ee0430-fe66-4565-918d-530ed6fe3889.jpeg?im_w=1440&im_format=avif',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-982015015526224217/original/94544f66-db5b-42e1-bbf2-0703d5146897.jpeg?im_w=1200&im_format=avif',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-982015015526224217/original/35c6248f-175c-4782-90d1-27a38f955b7c.jpeg?im_w=1200&im_format=avif',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-1301544634447481843/original/609986ea-ed7d-4f6c-9667-4c4da89b9a25.jpeg?im_w=1440&im_format=avif',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-1301544634447481843/original/41de89c3-1665-45d6-b01d-7ba18fc2dcab.jpeg?im_w=1440&im_format=avif',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-1301544634447481843/original/264d36ff-f586-4de8-b469-0f76448c9cc5.jpeg?im_w=1440&im_format=avif',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-1301544634447481843/original/2d96d104-fdf3-4a54-9efa-8535385bc2f8.jpeg?im_w=1440&im_format=avif',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-1301544634447481843/original/e14b8b21-889d-4b75-ab76-368a8ee7c3a3.jpeg?im_w=1440&im_format=avif',
          'https://a0.muscache.com/im/pictures/9d4fd7b8-cbb0-4f92-b71f-369da01bdfe8.jpg?im_w=1440&im_format=avif',
          'https://a0.muscache.com/im/pictures/7e1b66b8-47f8-41a6-bcb5-084b81b27674.jpg?im_w=1440&im_format=avif',
          'https://images.pexels.com/photos/1510173/pexels-photo-1510173.jpeg',
          'https://a0.muscache.com/im/pictures/miso/Hosting-21409981/original/a8fa243d-dac8-4238-93e5-f7aa33072ff8.jpeg?im_w=1200&im_format=avif',
          'https://a0.muscache.com/im/pictures/miso/Hosting-1303122243672833910/original/f45bbb56-1c76-4c7a-bb7a-7e765d4094fd.jpeg?im_w=1200&im_format=avif',
          'https://a0.muscache.com/im/pictures/miso/Hosting-1303122243672833910/original/45167d6e-27f5-4d28-b3d1-320bd678c0ea.jpeg?im_w=1440&im_format=avif',
          'https://a0.muscache.com/im/pictures/miso/Hosting-1303122243672833910/original/489b2717-e4ac-45bd-a61d-ba777f269ea6.jpeg?im_w=1440&im_format=avif',
          'https://a0.muscache.com/im/pictures/miso/Hosting-1303122243672833910/original/16389fc1-07f7-4866-a1d1-4ad4ebcb8d45.jpeg?im_w=1440&im_format=avif',
          'https://a0.muscache.com/im/pictures/miso/Hosting-1303122243672833910/original/019615c1-687d-493c-aaad-d367f02c44e6.jpeg?im_w=1440&im_format=avif',
        ]
      }
    }, {});
  }
};
