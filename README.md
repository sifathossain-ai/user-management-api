# User Management API (NestJS)

A fully structured and production-ready REST API built with NestJS. This project demonstrates clean architecture using DTOs, validation pipes, middleware, TypeORM, and PostgreSQL.

---

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Overview

This API allows you to manage users with full CRUD operations. It follows best practices including:

- Global Validation Pipes
- Route Middleware
- Proper DTO Structure
- Entity-based Database Design
- PostgreSQL Integration with TypeORM
- Clean and Scalable Code Structure

---

## Tech Stack

- NestJS (Backend Framework)
- TypeScript
- TypeORM (ORM)
- PostgreSQL (Database)
- class-validator & class-transformer (Validation)

---

## Installation

1. Clone the repository
2. Install dependencies:

npm install

---

## Run the Project

Development mode:

npm run start:dev

Production mode:

npm run start:prod

---

## Base URL

http://localhost:3002

---

## Features

- Create User
- Get All Users
- Get Single User by ID
- Update User (Partial Update Supported)
- Delete User
- Unique Email Validation
- Global Validation Handling
- Middleware Logging

---

## Project Structure

- DTO: Handles request validation and data structure
- Entity: Defines database schema using TypeORM
- Service: Contains business logic
- Controller: Handles HTTP requests
- Middleware: Executes logic before request reaches controller
- Pipes: Validates incoming data globally

---

## Validation

Global ValidationPipe is used to ensure:

- Only allowed fields are accepted (whitelist)
- Invalid data is rejected
- Email format is validated
- Required fields are enforced

Example DTO:

- username: string
- email: valid email format
- role: string

---

## Database

- PostgreSQL is used as the database
- TypeORM handles database operations
- Entities define table structure
- UUID is used as primary key
- Email field is unique and non-nullable

---

## API Endpoints

### 1. Root API

GET /

Response:
"Hello World!"

---

### 2. Create User

POST /users

Request Body:
{
"username": "Sifat Hossain",
"email": "[sifat@gmail.com](mailto:sifat@gmail.com)",
"role": "user"
}

Response:

- Returns created user with ID

Errors:

- Email already exists

---

### 3. Get All Users

GET /users

Response:

- Returns array of users

---

### 4. Get Single User

GET /users/:id

Example:
/users/d7f57ebe-f6a6-45b5-af07-e860142387c4

Response:

- Returns user object

Error:

- User not found

---

### 5. Update User

PUT /users/:id

Example:
/users/de13e8f7-5d39-47fe-9862-c20df0c9285b

Request Body (partial allowed):
{
"username": "Updated Name"
}

Response:

- Returns updated user

Note:

- Existing values (like email) are preserved if not provided

---

### 6. Delete User

DELETE /users/:id

Example:
/users/f3e60232-39aa-46f1-bc6d-4c5dc0cc4838

Response:
{
"message": "User deleted successfully"
}

Error:

- User not found

---

## Middleware

Custom middleware is applied globally or per route to:

- Log incoming requests
- Handle pre-processing logic

---

## Best Practices Used

- DTO for strict data validation
- Service layer for business logic
- Repository pattern via TypeORM
- Error handling with exceptions
- Clean and modular architecture

---

## Future Improvements

- JWT Authentication
- Role-based Authorization
- Pagination & Filtering
- Swagger API Documentation
- Soft Delete Feature

---

## Author

Sifat Hossain

---
