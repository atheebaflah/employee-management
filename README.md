# Employee Management System

A full-stack Employee Management System built with a modern tech stack. The system provides secure authentication, role-based access, and complete CRUD operations for managing employees and departments.

---

## Project Overview

This application allows administrators to manage employee records efficiently, including adding, updating, viewing, and deleting employee information. It also supports department hierarchy management using a self-referential relationship in the database.

The system is designed with a scalable backend architecture and a responsive frontend admin dashboard.

---

## Features

- Secure authentication using JWT  
- Role-based access control  
- Full CRUD operations for employees  
- Department management with hierarchical structure  
- Responsive admin dashboard  
- Search and filter employees  
- RESTful API architecture  

---

## Tech Stack

### Backend
- Spring Boot 3  
- Spring Security  
- JPA / Hibernate  
- JWT Authentication  
- MySQL Database  

### Frontend
- React  
- TypeScript  
- Axios  
- React Router  

---

## Architecture Overview

- Frontend communicates with backend via REST APIs  
- Backend handles authentication, business logic, and database operations  
- MySQL stores employee and department data  
- JWT is used for securing API endpoints  

---

## Database Design

The system uses a relational MySQL database with a self-referential relationship for departments.

### Tables

#### Employee Table
- id  
- name  
- email  
- position  
- salary  
- department_id  

#### Department Table
- id  
- name  
- parent_department_id (self-referencing field)  

This allows hierarchical department structures such as:
- Head Office  
  - IT Department  
  - HR Department  
  - Finance Department  

---

## API Features (Backend)

- POST /api/auth/login – User authentication  
- GET /api/employees – Get all employees  
- GET /api/employees/{id} – Get employee by ID  
- POST /api/employees – Create employee  
- PUT /api/employees/{id} – Update employee  
- DELETE /api/employees/{id} – Delete employee  

---

## Frontend Features

- Login page with JWT authentication  
- Dashboard with employee table  
- Add/Edit employee forms  
- Department hierarchy view  
- Responsive UI for all screen sizes  

---

## Security

- JWT-based authentication  
- Protected REST endpoints  
- Password encryption using BCrypt  
- Role-based authorization  

---

## Project Structure

```bash
employee-management/
│
├── backend/               # Spring Boot backend
│   ├── controller/
│   ├── service/
│   ├── repository/
│   ├── model/
│   └── security/
│
├── frontend/              # React + TypeScript frontend
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── routes/
│
└── README.md
