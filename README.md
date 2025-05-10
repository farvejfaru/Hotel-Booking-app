
# Hotel Booking App – Phase-2 Part D

A hotel property listing web application built using Node.js, Express.js, MongoDB, and EJS. In this phase, we continue from previous improvements and focus on enhanced layout, UI modularity, and styling.



## 🚀 Phase-2 Part D Highlights

- Integrated custom CSS (`style.css`) for consistent UI design
- Implemented reusable layout template (`boilerplate.ejs`)
- Added partials (`navbar.ejs`, `footer.ejs`) for clean and reusable HTML sections
- Updated all listing views to use the new layout and styling
- Server updated to serve static files using Express middleware



## 💻 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Templating:** EJS
- **Styling:** CSS, Bootstrap utility classes



## 🛠️ Installation Instructions

1. **Clone the repository**
```bash
git clone https://github.com/farvejfaru/Hotel-Booking-app.git
cd Hotel-Booking-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Start MongoDB**
```bash
mongod
```

4. **Seed the database**
```bash
node init/index.js
```

5. **Run the app**
```bash
node app.js
```

6. **Visit**
```
http://localhost:8080
```



## 📁 Folder Structure

```
Hotel-Booking-app/
├── app.js
├── index.js
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
│   │   ├── navbar.ejs
│   │   └── footer.ejs
│   ├── layouts/
│   │   └── boilerplate.ejs
│   └── listings/
│       ├── index.ejs
│       ├── show.ejs
│       ├── new.ejs
│       └── edit.ejs
├── package.json
└── README.md
```



## 🌐 Routes

| Method | Path                  | Description                    |
|--|--|--|
| GET    | /listings             | Show all listings              |
| GET    | /listings/new         | Form to create new listing     |
| POST   | /listings             | Submit new listing             |
| GET    | /listings/:id         | Show single listing details    |
| GET    | /listings/:id/edit    | Form to edit listing           |
| PUT    | /listings/:id         | Update listing                 |
| DELETE | /listings/:id         | Delete listing                 |



## 📦 Listing Model Schema

```js
{
  title: String (required),
  description: String,
  image: String (with default),
  price: Number,
  location: String,
  country: String
}
```



## 📌 Phase-2 Part D Enhancements

- Improved design consistency
- Reusable layouts and components
- Easier maintenance with modular templates
- Better frontend styling with static CSS



## 📜 License

This project is for educational use and open development.



## 👤 Author

[@farvejfaru](https://github.com/farvejfaru)
