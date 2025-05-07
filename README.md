# WanderLust - Phase 1 Part C

WanderLust is a travel property listing web application built with Node.js, Express.js, MongoDB, and EJS. It allows users to view, create, edit, and delete travel property listings.



## Phase 1 Part C Overview

In this phase, the project structure and user interface were significantly improved. Modular view layouts were implemented, reusable partials (like navbar and footer) were added, and custom styling was introduced to enhance the visual design.



## Features Implemented in Part C

* Added `boilerplate.ejs` layout for consistent page structure
* Introduced reusable partials: `navbar.ejs` and `footer.ejs`
* Created a `public/css/style.css` file for custom styles
* Integrated Bootstrap for responsive UI
* Applied consistent card-based layout for listings
* Enhanced readability and maintainability of views using EJS includes



## Tech Stack

* **Backend:** Node.js, Express.js
* **Frontend:** EJS (Embedded JavaScript), Bootstrap, Custom CSS
* **Database:** MongoDB (Mongoose ODM)



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



## Updated Project Directory Structure

```
WanderLust/
├── app.js
├── init/
│   ├── data.js
│   └── index.js
├── models/
│   └── listing.js
├── public/
│   └── css/
│       └── style.css
├── views/
│   ├── includes/
│   │   ├── footer.ejs
│   │   └── navbar.ejs
│   ├── layouts/
│   │   └── boilerplate.ejs
│   └── listings/
│       ├── edit.ejs
│       ├── index.ejs
│       ├── new.ejs
│       └── show.ejs
```



## API Routes Overview

| Method | Path                 | Description                |
|  | -- | -- |
| GET    | `/`                  | Root Route                 |
| GET    | `/listings`          | Display all listings       |
| GET    | `/listings/new`      | Form to add a new listing  |
| POST   | `/listings`          | Create a new listing       |
| GET    | `/listings/:id`      | View details of a listing  |
| GET    | `/listings/:id/edit` | Edit an existing listing   |
| PUT    | `/listings/:id`      | Update an existing listing |
| DELETE | `/listings/:id`      | Delete a listing           |



## Listing Model Schema

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



## UI/UX Enhancements

* Reusable EJS layout via `boilerplate.ejs`
* Navigation and footer included on all pages
* Centered cards, spacing, and shadow effects using custom CSS
* Static files served from `public` directory

