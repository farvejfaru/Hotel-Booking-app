# Wanderlust

## 1. Project Overview

Wanderlust is a full-featured web application for travel accommodation listings, similar to Airbnb or Booking.com. It allows users to browse accommodations, create their own listings, and leave reviews. The platform features a comprehensive user authentication system, secure authorization for resource management, and a clean, responsive user interface.

## 2. Features

- **User Authentication**: Complete signup, login, and logout functionality with secure password handling
- **Listing Management**: Full CRUD operations (Create, Read, Update, Delete) for property listings
- **Review System**: Add, view and delete reviews with a 5-star rating system
- **Authorization**: Role-based permissions ensure users can only modify their own content
- **Form Validation**: Comprehensive server-side validation using Joi
- **Flash Messages**: Contextual success and error notifications
- **Responsive Design**: Mobile-friendly user interface
- **Session Management**: Persistent user sessions with secure cookie handling
- **Error Handling**: Robust error management with custom error classes

## 3. Technical Architecture

### Core Technologies

- **Backend Framework**: Node.js with Express.js (v5.1.0)
- **Database**: MongoDB with Mongoose ODM (v8.13.3)
- **View Engine**: EJS (v3.1.10) with EJS-Mate (v4.0.0) layouts
- **Authentication**: Passport.js with Local Strategy
- **Form Validation**: Joi (v17.13.3) 
- **Session Management**: Express-session (v1.18.1) with Connect-Mongo store
- **Flash Notifications**: Connect-flash (v0.1.1)
- **Method Override**: Support for PUT/DELETE in forms with method-override

## 4. Project Structure

The application follows a clean MVC (Model-View-Controller) architecture:

```
MajorProject/
├── app.js                # Application entry point and configuration
├── middleware.js         # Custom middleware functions
├── schema.js             # Joi validation schemas
├── models/               # Database models
│   ├── listing.js        # Listing model with relationship handling
│   ├── review.js         # Review model with validation
│   └── user.js           # User model with Passport integration
├── routes/               # Route handlers (controllers)
│   ├── listing.js        # Listing CRUD operations
│   ├── review.js         # Review management
│   └── user.js           # Authentication routes
├── public/               # Static assets
│   ├── css/              # Stylesheets
│   └── js/               # Client-side JavaScript
├── utils/                # Utility functions
│   ├── ExpressError.js   # Custom error handling class
│   └── wrapAsync.js      # Async error wrapper
└── views/                # EJS templates
    ├── layouts/          # Page layouts and templates
    ├── listings/         # Listing-related views
    ├── users/            # Authentication views
    ├── partials/         # Reusable view components
    └── error.ejs         # Error page
```

## 5. Data Models

The application uses Mongoose schemas to define the data structure:

### User Model

```javascript
const userSchema = new Schema({
  email: {
    type: String,
    required: true
  }
  // username & password fields are automatically added by passport-local-mongoose
});
```

The User model leverages passport-local-mongoose for:
- Secure password hashing and salting
- Username validation
- Authentication methods

### Listing Model

```javascript
const listingSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  image: {
    type: String,
    default: "default-image-url"
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review"
    }
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});
```

The Listing model includes:
- Required title field
- Default image handling
- Relationship with reviews (one-to-many)
- Owner reference for authorization

### Review Model

```javascript
const reviewSchema = new Schema({
  comment: String,
  rating: {
    type: Number,
    min: 1,
    max: 5
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});
```

The Review model features:
- Rating system (1-5 scale)
- Timestamp tracking
- Author reference for user attribution

## 6. API Endpoints

### Listings

| Method | Endpoint | Description | Authentication |
|--------|----------|-------------|----------------|
| GET | /listings | List all accommodations | None |
| GET | /listings/new | Display new listing form | Required |
| POST | /listings | Create a new listing | Required |
| GET | /listings/:id | View a specific listing | None |
| GET | /listings/:id/edit | Edit listing form | Required + Owner |
| PUT | /listings/:id | Update a listing | Required + Owner |
| DELETE | /listings/:id | Delete a listing | Required + Owner |

### Reviews

| Method | Endpoint | Description | Authentication |
|--------|----------|-------------|----------------|
| POST | /listings/:id/reviews | Add a review | Required |
| DELETE | /listings/:id/reviews/:reviewId | Delete a review | Required + Author |

### Authentication

| Method | Endpoint | Description | Authentication |
|--------|----------|-------------|----------------|
| GET | /signup | Display registration form | None |
| POST | /signup | Register a new user | None |
| GET | /login | Display login form | None |
| POST | /login | Authenticate user | None |
| GET | /logout | Log out user | Required |

## 7. Security Features

Wanderlust implements several security measures to protect user data and prevent common vulnerabilities:

- **Password Security**: Passwords are hashed using bcrypt via passport-local-mongoose
- **Authentication**: Complete session-based authentication system
- **Authorization Middleware**: Protects routes based on authentication status and resource ownership
- **Input Validation**: Joi schema validation prevents malicious data submission
- **Session Protection**: Secure session configuration with httpOnly cookies
- **MongoDB Security**: Data validation at the model level
- **Error Handling**: Custom error classes and global error handler prevent information leakage

## 8. Development Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/wanderlust.git
   cd wanderlust
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure MongoDB:
   - Ensure MongoDB is running locally
   - Default connection string: `mongodb://127.0.0.1:27017/wanderlust`

4. Start the application:
   ```bash
   node app.js
   ```

5. Access the application:
   - Open your browser and navigate to: `http://localhost:8080`

### Environment Variables (if applicable)

For production deployment, consider setting these environment variables:
- `PORT`: Server port (default: 8080)
- `MONGO_URL`: MongoDB connection string
- `SESSION_SECRET`: Secret for session encryption

## 9. Error Handling

The application includes a robust error handling system:

- **Custom Error Class**: `ExpressError` extends JavaScript's Error with status codes
- **Async Wrapper**: `wrapAsync` utility captures errors in async route handlers
- **Validation Middleware**: Pre-validates inputs before processing
- **Global Error Handler**: Central error processing middleware
- **404 Handling**: Custom handling for undefined routes

## 10. Future Enhancements

Potential features for future development:

- User profile management
- Image upload functionality
- Search and filtering options
- Payment integration
- Booking system
- Admin dashboard
- Email notifications
- Social media authentication
- Maps integration

## 11. License

Can use this for reference if needed.

## 12. Acknowledgements

- This project was created as part of a web development learning journey
- Special thanks to all open-source libraries that made this project possible

---

*Last updated: May 2025*
