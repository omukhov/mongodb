# Movie API - Express & MongoDB REST API

A RESTful API application built with **Node.js**, **Express.js**, and **MongoDB using Mongoose**.

This project connects to the MongoDB **sample_mflix** database and provides API endpoints for working with movies, comments, and users.

The application demonstrates:

- REST API architecture
- CRUD operations
- MongoDB data validation
- MongoDB indexes
- Mongoose schemas and models
- Express routing and controllers

---

# Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript (ES Modules)
- dotenv

---

# Database

This application uses the MongoDB **sample_mflix** database.

Collections used:

- `movies`
- `comments`
- `users`

The database contains sample data provided by MongoDB.
Each collection contains more than five sample documents to demonstrate the application's use cases.

---

# Project Structure

```
movie-api/
│
├── controllers/
│   ├── movies.js
│   ├── comments.js
│   └── users.js
│
├── models/
│   ├── movie.js
│   ├── comment.js
│   └── user.js
│
├── routes/
│   ├── movies.js
│   ├── comments.js
│   └── users.js
│
├── db/
│   └── conn.js
│
├── server.js
├── package.json
└── .env
```

---

# Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project folder:

```bash
cd movie-api
```

Install dependencies:

```bash
npm install
```

---

# Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

`MONGO_URI` should contain your MongoDB connection string.

Example:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/sample_mflix
```

---

# Running the Application

Start the server:

```bash
node server.js
```

or with nodemon:

```bash
npm run dev
```

The application will run on:

```
http://localhost:3000
```

---

# API Endpoints

## Movies API

### Get first 10 movies

```
GET /movies
```

Returns the first 10 movies from the database.

---

### Get movie by ID

```
GET /movies/:id
```

Example:

```
GET /movies/573a1390f29313caabcd4135
```

Returns a single movie by MongoDB ObjectId.

---

### Create a movie

```
POST /movies
```

Example request body:

```json
{
  "title": "New Movie",
  "plot": "Movie description",
  "year": 2026,
  "genres": ["Action"]
}
```

Creates a new movie document.

---

### Update movie

```
PUT /movies/:id
```

Example request body:

```json
{
  "title": "Updated Movie Title"
}
```

Updates an existing movie.

---

### Delete movie

```
DELETE /movies/:id
```

Deletes a movie by ID.

---

# Comments API

### Get first 10 comments

```
GET /comments
```

Returns the first 10 comments.

---

# Users API

### Get first 10 users

```
GET /users
```

Returns the first 10 users.

---

# MongoDB Data Validation

Mongoose validation rules were added to ensure data consistency.

## Movie validation examples

### Required movie title

```javascript
title: {
  type: String,
  required: true,
  minlength: 1,
  maxlength: 200
}
```

The movie must have a title.

---

### Year validation

```javascript
year: {
  type: Number,
  min: 1800,
  max: new Date().getFullYear()
}
```

The movie year must be between 1800 and the current year.

---

### IMDb rating validation

```javascript
rating: {
  type: Number,
  min: 0,
  max: 10
}
```

IMDb rating must be between 0 and 10.

---

# MongoDB Indexes

Indexes were added to improve query performance.

## Movies collection indexes

```javascript
movieSchema.index({ title: 1 });
movieSchema.index({ year: 1 });
movieSchema.index({ genres: 1 });
movieSchema.index({ "imdb.rating": -1 });
```

Purpose:

- Faster movie search by title
- Faster filtering by year
- Faster genre queries
- Faster sorting by IMDb rating

---

## Comments collection indexes

```javascript
commentSchema.index({ name: 1 });
commentSchema.index({ email: 1 });
commentSchema.index({
  movie_id: 1,
  date: -1,
});
```

Purpose:

- Faster searching by user information
- Faster retrieving comments for a movie
- Faster sorting comments by newest date

---

## Users collection indexes

```javascript
usersSchema.index({ name: 1 });
usersSchema.index({ email: 1 });
```

Purpose:

- Faster user lookup by name
- Faster user lookup by email

---

# Error Handling

The API uses HTTP status codes:

| Status Code | Description                    |
| ----------- | ------------------------------ |
| 200         | Successful request             |
| 201         | Resource created               |
| 400         | Bad request / validation error |
| 404         | Resource not found             |
| 500         | Server error                   |

---

# Application Features

Implemented:

Express REST API
MongoDB database connection
Mongoose models
Movie CRUD operations
MongoDB validation rules
MongoDB indexes
Sample database integration
Error handling
MVC-style project structure

---

# Future Improvements

Possible improvements:

- Add authentication and authorization
- Add pagination
- Add movie search functionality
- Add user CRUD operations
- Add Swagger API documentation
- Add automated testing

---

# Author

ARTEM OMUKHOV
Created as a backend development project using Express.js and MongoDB.
