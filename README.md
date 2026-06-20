# 🎉 Agenda Event Management System

A professional Event Management Web Application built using **Node.js, Express.js, MongoDB, Mongoose, EJS, Multer, and MVC Architecture**.

This project allows administrators to manage events efficiently with complete CRUD operations including event creation, viewing, editing, and deletion.

---

## 🚀 Features

### Event Management

* Add New Event
* View All Events
* Edit Existing Events
* Delete Events
* Upload Event Images

### Website Pages

* Home Page
* About Page
* Blog Page
* Blog Details Page
* Tours Page
* Videos Page
* Discography Page
* Contact Page

### Technical Features

* MVC Architecture
* MongoDB Database Integration
* Image Upload using Multer
* Dynamic EJS Templates
* Responsive UI Design
* Reusable Header & Footer
* Clean Folder Structure

---

# 🛠️ Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* EJS
* Multer
* Nodemon
* HTML5
* CSS3
* Bootstrap

---

# 📂 Project Structure

```bash
MVC-PROJECT
│
├── config
│   └── db.js
│
├── controllers
│   └── eventController.js
│
├── models
│   └── eventModel.js
│
├── routes
│   └── eventRoutes.js
│
├── public
│   └── assets
│       ├── css
│       ├── js
│       ├── images
│       └── uploads
│
├── views
│   ├── partials
│   │   ├── header.ejs
│   │   └── footer.ejs
│   │
│   ├── index.ejs
│   ├── about.ejs
│   ├── blog.ejs
│   ├── blog-details.ejs
│   ├── contact.ejs
│   ├── discography.ejs
│   ├── tours.ejs
│   ├── videos.ejs
│   ├── addEvent.ejs
│   ├── viewEvent.ejs
│   └── editEvent.ejs
│
├── app.js
├── package.json
└── package-lock.json
```

---

# ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Navigate to Project Folder

```bash
cd MVC-PROJECT
```

### Install Dependencies

```bash
npm install
```

### Required Packages

```bash
npm install express
npm install ejs
npm install mongoose
npm install multer
npm install nodemon
```

---

# ▶️ Run Project

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
node app.js
```

Server URL:

```bash
http://localhost:9000
```

---

# 🗄️ Database

Database Name:

```bash
event_management
```

Collection:

```bash
events
```

---

# 📋 Event Fields

| Field          | Type   |
| -------------- | ------ |
| Event Name     | String |
| Organizer Name | String |
| Event Date     | Date   |
| Event Time     | String |
| Location       | String |
| Category       | String |
| Ticket Price   | Number |
| Total Seats    | Number |
| Description    | String |
| Status         | String |
| Event Image    | String |

---

# 📸 Screenshots

### Home Page

<img width="1902" height="981" alt="Screenshot 2026-06-20 134723" src="https://github.com/user-attachments/assets/22670fdc-5364-4632-bd57-599b79361c33" />


### Add Event Page

<img width="1904" height="989" alt="Screenshot 2026-06-20 134753" src="https://github.com/user-attachments/assets/84ddfe41-2fe8-44f9-80c4-7496d4bb88b8" />


### View Event Page

<img width="1906" height="978" alt="Screenshot 2026-06-20 134809" src="https://github.com/user-attachments/assets/35e4c28a-faad-45b4-a92e-f46e3204e0d5" />


---

# 🎯 Learning Outcomes

* Understanding MVC Architecture
* MongoDB Database Integration
* CRUD Operations
* File Upload Handling with Multer
* Dynamic Rendering with EJS
* Express Routing
* Mongoose Schema Design

---

# 👨‍💻 Developed By

**Saiyam Doshi**

Full Stack Web Development Project

---

# 📜 License

This project is developed for educational and learning purposes.
