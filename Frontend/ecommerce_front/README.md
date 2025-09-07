# 🛒 Fullstack E-Commerce App

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)  
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)  
![TanStack Query](https://img.shields.io/badge/TanStack_Query-5-FF4154?logo=reactquery&logoColor=white)  
![Material UI](https://img.shields.io/badge/MUI-5-007FFF?logo=mui&logoColor=white)  
![Node.js](https://img.shields.io/badge/Node.js-20-339933?logo=node.js&logoColor=white)  
![Express](https://img.shields.io/badge/Express-4-000000?logo=express&logoColor=white)  
![MongoDB](https://img.shields.io/badge/MongoDB-7-47A248?logo=mongodb&logoColor=white)

A modern, full-stack **E-Commerce web application** built with **React, Material-UI, TanStack Query, Node.js, Express, and MongoDB**.  
It provides seamless product browsing, cart management, and checkout experience

---

## 🚀 Features

### 🔹 Frontend (React + Vite + TypeScript + TanStack Query)

- ✅ **Product Listing Page** with grid layout, spin loader while fetching
- ✅ **Product Details Page** with spinner loader, responsive image + details
- ✅ **Reusable Cart Buttons** → Add, Increase, Decrease, Delete
- ✅ **Cart Page** → displays all items with image, title, quantity, and price
- ✅ **Sticky Checkout Section** → total price and checkout button fixed at the bottom
- ✅ **Checkout Page** → simple "Thank You for Shopping" message

### 🔹 Backend (Node.js + Express + MongoDB)

- ✅ **REST APIs** for cart management:
  - `GET /api/cart` → fetch cart
  - `POST /api/cart` → add product to cart
  - `PATCH /api/cart/:id/increase` → increase quantity
  - `PATCH /api/cart/:id/decrease` → decrease quantity
  - `DELETE /api/cart/:id` → remove item
- ✅ **MongoDB with Mongoose** for data storage
- ✅ **Error handling**
- ✅ **Environment variables** with dotenv

---

## 🛠️ Tech Stack

### **Frontend:**

- React + Vite + TypeScript
- Material-UI (MUI v5)
- TanStack Query (for server state management)
- Axios (API calls)
- React Router

### **Backend:**

- Node.js
- Express.js
- MongoDB Atlas + Mongoose
- Nodemon + ES Modules

---

