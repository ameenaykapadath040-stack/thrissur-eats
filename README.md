# Thrissur Eats - Authentic Kerala Cuisine

A modern, full-stack food delivery application built with React, Node.js, and MongoDB.

## 🥘 Features
- **Dynamic Menu**: Real-time menu items fetched from MongoDB Atlas.
- **Cart System**: Fully functional shopping cart with quantity management.
- **Order Flow**: Automated checkout process saving orders to the database.
- **Responsive Design**: Premium UI optimized for all devices.

## 🚀 How to Run Locally

To get the project running on your machine, follow these two steps. You will need two terminal windows open.

### 1. Start the Backend Server
1.  Navigate to the `server` directory:
    ```bash
    cd server
    ```
2.  Install dependencies (if not already done):
    ```bash
    npm install
    ```
3.  Start the server:
    ```bash
    npm run dev
    ```
    *The server will run on `http://localhost:5000`.*

### 2. Start the Frontend (Vite)
1.  Go to the project root directory.
2.  Install dependencies (if not already done):
    ```bash
    npm install
    ```
3.  Start the frontend:
    ```bash
    npm run dev
    ```
    *The app will be available at `http://localhost:5173`.*

## 📂 Project Structure
- `/src`: Frontend React application.
- `/server`: Express.js backend and database models.
- `/server/seed.js`: Script to populate the database with initial menu items.

## 🛠️ Tech Stack
- **Frontend**: React, Vite, Tailwind CSS, Lucide Icons.
- **Backend**: Node.js, Express, Mongoose.
- **Database**: MongoDB Atlas.

---
*Created for Thrissur Eats - Bringing specific Kerala flavors to your home.*
