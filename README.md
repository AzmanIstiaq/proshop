# ProShop 🛒
### Access the website through this link:- https://proshop-wljf.onrender.com

A full-stack **eCommerce web application** built with the **MERN stack**, featuring user authentication, product management, shopping cart, checkout flow, and payment integration.

> This project was built to demonstrate real-world full-stack development skills, scalable architecture, and clean React + API design.

---

## 🚀 Features

### User
- User registration & authentication (JWT)
- User profile management
- Product browsing & search
- Shopping cart with persistent state
- Checkout flow (shipping, payment, order summary)
- Order history

### Admin
- Admin dashboard
- Product CRUD (create, update, delete)
- User management
- Order management & delivery status

### Payments
- PayPal payment integration

---

## 🛠 Tech Stack

### Frontend
- React
- Redux Toolkit
- React Router
- React Bootstrap

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

### DevOps / Tools
- Git & GitHub
- REST APIs
- Environment-based configuration

## 📁 Project Structure
---

proshop/

├── backend/

│ ├── config/

│ ├── controllers/

│ ├── data/

│ ├── middleware/

│ ├── models/

│ ├── routes/

│ └── server.js

│

├── frontend/

│ ├── public/

│ └── src/

│ ├── components/

│ ├── pages/

│ ├── slices/

│ ├── store.js

│ └── main.jsx

│

└── README.md

---

## ⚙️ Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/AzmanIstiaq/proshop.git
cd proshop
```
### 2. Install dependencies
```bash
npm install
cd frontend
npm install
```
### 3. Environment Variables
Create a ```.env``` file in the root directory:
```bash
NODE_ENV=development
PORT=5000
MONGO_URI=YOUR_MONGO_URI
JWT_SECRET=YOUR_JWT_SECRET
PAYPAL_CLIENT_ID=YOUR_PAYPAL_CLIENT_ID
PAGINATION_LIMIT=8
PAYPAL_APP_SECRET=YOUR_PAYPAL_APP_SECRET
PAYPAL_API_URL=https://api-m.sandbox.paypal.com
```
### ▶️ Running the App
Run backend & frontend together
```bash
npm run dev
```
Frontend: http://localhost:3000

Backend API: http://localhost:5000
###📌 Key Learnings
Building scalable REST APIs with Express

State management using Redux Toolkit

Secure authentication using JWT

Handling payments and order workflows

Full eCommerce user + admin lifecycle

### Admin Dashboard
<img width="1917" height="790" alt="image" src="https://github.com/user-attachments/assets/57db856c-7baa-429f-8fa0-586517641949" />
<img width="1905" height="622" alt="image" src="https://github.com/user-attachments/assets/beb3046b-df21-432b-812f-593150154c01" />
<img width="1919" height="705" alt="image" src="https://github.com/user-attachments/assets/6e2a6028-89a6-4642-ae20-3727ecdc5833" />


### 📈 Future Improvements
Product reviews & ratings

Wishlist functionality

Stripe payment integration

Role-based access control

Improved UI with Tailwind or Chakra UI

CI/CD pipeline
### 👤 Author
Azman Istiaq

Software Engineering Undergraduate

GitHub: https://github.com/AzmanIstiaq

