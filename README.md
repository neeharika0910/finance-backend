# 💰 Finance Dashboard Backend API

## 📌 Overview

This project is a backend system for managing financial records with role-based access control. It supports user authentication, CRUD operations, and dashboard analytics.

---

## 🚀 Live API

https://finance-backend-9qkw.onrender.com

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* JWT Authentication

---

## 🔐 Features

### 👤 User Management

* Register and login users
* Role-based access (Admin, Analyst, Viewer)

### 💰 Financial Records

* Create, update, delete records
* Filter by type and category

### 📊 Dashboard

* Total income
* Total expenses
* Net balance

### 🔒 Security

* Password hashing (bcrypt)
* JWT authentication
* Role-based middleware

---

## 🧪 API Endpoints

### Auth

* POST /api/auth/register
* POST /api/auth/login

### Records

* POST /api/records
* GET /api/records

### Dashboard

* GET /api/dashboard

---

## ⚙️ Setup

```bash
npm install
npm start
```

---

## 📌 Key Highlights

* Middleware-based role authorization
* MongoDB aggregation for analytics
* Error handling for duplicate users

---

## 👩‍💻 Author

Neeharika N
