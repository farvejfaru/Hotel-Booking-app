
# WanderLust - Phase 1 Part A

WanderLust is a travel property listing web application built with Node.js, Express.js, MongoDB, and EJS. It allows users to view, create, edit, and delete travel property listings.


## Phase 1 Part A Overview

In this phase, the basic CRUD functionality of the WanderLust application is built. Users can add, edit, view, and delete property listings. The application connects to a MongoDB database and uses EJS templates to dynamically render views.


## Features Implemented

- View all property listings
- Add new listings
- Edit existing listings
- Delete listings
- Seed database with sample listings
- Dynamic templates using EJS
- Method-override to support PUT and DELETE HTTP methods



## Tech Stack

- **Backend:** Node.js, Express.js
- **Frontend:** EJS (Embedded JavaScript)
- **Database:** MongoDB (Mongoose ODM)


## Installation Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

3. Start MongoDB server locally:
   ```bash
   mongod
   ```

4. Seed the database with initial sample data:
   ```bash
   node init/index.js
   ```

5. Start the server:
   ```bash
   node app.js
   ```

6. Open the application in a browser:
   ```
   http://localhost:8080/
   ```



## Project Directory Structure

```
WanderLust/
├── app.js
├── init/
│   ├── data.js
│   └── index.js
├── models/
│   └── listing.js
├── views/
│   └── listings/
│       ├── edit.ejs
│       ├── index.ejs
│       ├── new.ejs
│       └── show.ejs
```



## API Routes Overview

| Method | Path                  | Description                    |
|--------|-----------------------|--------------------------------|
| GET    | `/`                   | Root Route                     |
| GET    | `/listings`           | Display all listings           |
| GET    | `/listings/new`       | Form to add a new listing      |
| POST   | `/listings`           | Create a new listing           |
| GET    | `/listings/:id`       | View details of a listing      |
| GET    | `/listings/:id/edit`  | Edit an existing listing       |
| PUT    | `/listings/:id`       | Update an existing listing     |
| DELETE | `/listings/:id`       | Delete a listing               |



## Database Schema (Listing Model)

```javascript
{
  title: String (required),
  description: String,
  image: String (default value if not provided),
  price: Number,
  location: String,
  country: String
}
```



## Important Implementation Details

- **Method-override** is used to simulate PUT and DELETE HTTP methods from HTML forms.
- A **default image URL** is automatically assigned if no image is provided.
- **Sample data** features various travel properties like beach cottages, villas, and mountain cabins.




## Author

- Created with ❤️ for learning and development.
