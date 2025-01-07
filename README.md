# Hotel Reservation System
![image](https://github.com/user-attachments/assets/5eb8245b-1d0e-460f-aa7e-06a8b2f1dfe7)
![image](https://github.com/user-attachments/assets/c2b5aff2-8f4e-4a38-ba70-11458bacf92f)

## Overview

This is a Full Stack Hotel Reservation System built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Bootstrap for responsive design, Razorpay for payment processing, and Nodemailer for email communication. The system allows users to search and book hotels, manage reservations, and make secure payments.

## Features

- Hotel Search and Booking: Users can browse available hotels and book their stay.

- User Authentication:

  - Passwords are securely hashed using bcrypt.js.

  - Email-based authentication with Nodemailer for account verification.

- Payment Gateway: Integrated with Razorpay for secure online payments.

- Responsive Design: Fully responsive layout using Bootstrap, ensuring a seamless experience across devices.

## Tech Stack

### Frontend

- React.js

- Bootstrap

- Axios (for API requests)

### Backend

- Node.js

- Express.js

- MongoDB (Database)

### Additional Libraries/Services

- bcrypt.js: For password hashing.

- Nodemailer: For sending verification emails.

- Razorpay: Payment gateway integration.

## Installation and Setup

### Prerequisites

- Node.js (v14 or higher)

- MongoDB (local or cloud-based)

## Steps to Run the Project

- ## Clone the repository:

```git clone <repository_url>```
```cd hotel-reservation-system```

- ## Install dependencies:

For backend:

```cd backend```
```npm install```

For frontend:

``cd frontend
npm install``

Set up environment variables:
Create a .env file in the backend folder and configure the following:

``PORT=5000
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
RAZORPAY_KEY_ID=<your_razorpay_key_id>
RAZORPAY_KEY_SECRET=<your_razorpay_key_secret>
EMAIL_HOST=<smtp_host>
EMAIL_PORT=<smtp_port>
EMAIL_USER=<your_email>
EMAIL_PASS=<your_email_password>``

Run the server:

``cd backend
npm start``

Run the frontend:

``cd frontend
npm start``

Access the application:
Open your browser and go to http://localhost:3000.

Usage

Register and Login:

New users can sign up with email verification.

Login using email and password.

Search for Hotels:

Browse hotels by location, date, and other filters.

Make a Reservation:

Select a hotel, choose dates, and confirm booking.

Secure Payment:

Complete the payment through Razorpay.

Manage Bookings:

View and manage your reservations.
