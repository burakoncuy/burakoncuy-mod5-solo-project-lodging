#   Lodging

![Lodging Logo](frontend/public/logo.png)

Welcome to Lodging, your ultimate platform for discovering and managing home rentals.

## Introduction

Lodging is a comprehensive full-stack web application modeled after Airbnb. It recreates essential features of the popular platform, enabling users to explore, book, and review listings. Powered by a robust Express.js backend and an interactive React-Redux frontend, the application delivers a smooth and responsive user experience.

## Features

- Secure User Authentication 🔒
- Manage Spots: Create, Read, Update, Delete 🏠
- Responsive Design 📱
- Reviews and Ratings Feature ⭐
- Advanced Search and Filtering Options 🔍
- Comprehensive Spot Details ℹ️
- Personalized User Profiles 👤

## Technologies Used

- Express 🚀 
- Sequelize  🔀 
- React ⚛️
- Redux 🔁
- CSS 🎨 
- Render 🖥️ 

## Setup

⚙️ To set up the project locally, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/Lodging.git

1. Install dependencies:

   ```sh
    npm install
   ```

1. Create a `.env` file in the root directory and add the following variables:

   ```plaintext
   DB_USERNAME=your_db_username
   DB_PASSWORD=your_db_password
   DB_NAME=your_db_name
   DB_HOST=your_db_host
   JWT_SECRET=your_jwt_secret
   ```

1. Set up the backend database, start the frontend and backend server, and open your browser :

- Navigate to the backend directory:

   ```sh
   cd backend
   ```

- Create the database:

   ```sh
   npx sequelize-cli db:create
   ```

- Run migrations:

   ```sh
   npx sequelize-cli db:migrate
   ```

- Seed the database (optional):

   ```sh
   npx sequelize-cli db:seed:all
   ```

- Start the backend server:

   ```sh
   npm start
   ```

- Navigate to the frontend directory:

    ```sh
    cd frontend
    ```

- Start the frontend development server:

    ```sh
    npm run dev
    ```

- Open your browser and navigate to [http://localhost:5173](http://localhost:5173) to view the application.

## Usage

🖥️ You can access the deployed application at [Lodging on Render](https://lodging.onrender.com).


# mod5-solo-project-lodging
