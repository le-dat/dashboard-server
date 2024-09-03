# Beincom API

This project provides a basic authentication API using Node.js, Express, TypeScript, and MongoDB with Mongoose.

It includes endpoints for

- user (registration, login, logout, and token refresh).
- post (CRUD post, filter post, CRUD comment ).

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [License](#license)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/le-dat/beincom-social-service
   ```

2. Install dependencies:

   ```sh
   npm install | yarn install
   ```

3. Create a `.env` file in the root directory

   ```plaintext
    PORT=4000

    # JWT
    ACCESS_TOKEN_SECRET=secretkeytaiday
    REFRESH_TOKEN_SECRET=secretkeytaiday

    # MONGO DATABASE
    DATABASE_NAME=beincom-server
    USERNAME_DB=le-dat
    PASSWORD_DB=le-dat
    CLIENT_ID=AXlfyJ2QROzOTSv_v9dNbFStavQmkh0HAhaVSB7cTJARukMq30pIKUUGuHrw1mMPu7zrHqj4LuKYjXrT
   ```

## Configuration

Ensure you have a MongoDB instance running. You can configure the MongoDB URI in the `.env` file.

## Usage

1. Start the development server:

   ```sh
   npm start | yarn start | yarn dev
   ```

2. The server will start on `http://localhost:4000`.

## API Endpoints

### Register

- **URL:** `/register`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "email": "user@example.com",
    "name": "John Doe",
    "password": "password123"
  }
  ```
- **Response:**
  - `201 Created` on success
  - `400 Bad Request` if the email already exists
  - `500 Internal Server Error` on server error

### Login

- **URL:** `/login`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  - `200 OK` with tokens on success
  - `400 Bad Request` if the email or password is incorrect
  - `500 Internal Server Error` on server error

### Logout

- **URL:** `/logout`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "refreshToken": "your_refresh_token"
  }
  ```
- **Response:**
  - `204 No Content` on success
  - `500 Internal Server Error` on server error

### Refresh Token

- **URL:** `/refresh-token`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "refreshToken": "your_refresh_token"
  }
  ```
- **Response:**
  - `200 OK` with new tokens on success
  - `400 Bad Request` if the refresh token is invalid or user not found
  - `500 Internal Server Error` on server error

## Error Handling

All endpoints return appropriate HTTP status codes and error messages in case of failures. Common error responses include:

- `400 Bad Request`: Invalid input or missing required fields.
- `500 Internal Server Error`: An unexpected error occurred on the server.

## Author

Le Quoc Dat. See the [Website Portfolio](https://ledat-portfolio.vercel.app/) for details.
