# Event Management System

A full-stack Event Management System built using Node.js, Express.js, MongoDB Atlas, EJS, and Bootstrap. The application enables event organizers to create, manage, update, and delete events through an intuitive web interface while maintaining event details in a cloud database.

## Features

* Create and manage events
* Upload event images
* View all available events
* Update event information
* Delete events
* Store data in MongoDB Atlas
* Responsive user interface
* Event categorization
* Event status management
* Secure file upload handling with Multer

## Tech Stack

### Frontend

* HTML5
* CSS3
* Bootstrap
* EJS

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Additional Packages

* Multer
* Path
* Nodemon

## Project Structure

```bash
Event-Management-System
│
├── config
│   └── db.js
│
├── controller
│   └── controller.js
│
├── model
│   └── eventModel.js
│
├── routes
│   └── route.js
│
├── views
│   ├── header.ejs
│   ├── footer.ejs
│   ├── index.ejs
│   ├── add-event.ejs
│   ├── view-event.ejs
│   └── edit-event.ejs
│
├── public
│   └── assets
│       └── images
│
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

## Database Schema

Each event contains the following fields:

| Field         | Type   |
| ------------- | ------ |
| eventName     | String |
| organizerName | String |
| eventDate     | String |
| eventTime     | String |
| location      | String |
| category      | String |
| ticketPrice   | Number |
| totalSeats    | Number |
| description   | String |
| status        | String |
| eventImage    | String |

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/event-management-system.git
```

### Navigate to Project Directory

```bash
cd event-management-system
```

### Install Dependencies

```bash
npm install
```

### Configure MongoDB Atlas

Update your MongoDB connection string inside:

```javascript
config/db.js
```

Example:

```javascript
const mongoose = require("mongoose");

mongoose.connect("YOUR_MONGODB_ATLAS_CONNECTION_STRING")
.then(() => {
    console.log("Database Connected Successfully");
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;
```

### Start Application

```bash
npm start
```

or

```bash
npx nodemon app.js
```

The application will run on:

```text
http://localhost:9000
```

## Application Workflow

### Add Event

Create a new event by providing:

* Event Name
* Organizer Name
* Event Date
* Event Time
* Location
* Category
* Ticket Price
* Total Seats
* Description
* Status
* Event Image

### View Events

Display all stored events from MongoDB Atlas.

### Update Events

Modify event information and upload a new image if required.

### Delete Events

Remove an event permanently from the database.

## CRUD Operations

| Operation | Description         |
| --------- | ------------------- |
| Create    | Add a new event     |
| Read      | View all events     |
| Update    | Edit existing event |
| Delete    | Remove event        |

## Screenshots

Add project screenshots here:

```text
screenshots/
├── home-page.png
├── add-event.png
├── view-events.png
└── edit-event.png
```

## Future Enhancements

* User Authentication
* Role-Based Access Control
* Event Booking System
* Ticket Generation
* Online Payment Integration
* Search and Filter Functionality
* Event Analytics Dashboard
* Email Notifications
* QR Code Based Entry System
* Admin Dashboard

## Learning Outcomes

This project demonstrates practical implementation of:

* MVC Architecture
* RESTful Routing
* MongoDB Atlas Integration
* File Upload Handling
* CRUD Operations
* Server-Side Rendering with EJS
* Express Middleware
* Cloud Database Management
<img width="1351" height="5808" alt="localhost_9000_" src="https://github.com/user-attachments/assets/22bc7f4f-ab7f-4b10-937a-c0ac87bf4e50" />
<img width="1351" height="1714" alt="localhost_9000_view-event" src="https://github.com/user-attachments/assets/d076a04a-2702-4cd1-a42a-2d2164105e6a" />
<img width="1351" height="2143" alt="localhost_9000_edit-event_6a2d57d88906ec1509413ccc" src="https://github.com/user-attachments/assets/d09cfe8b-24d2-46ea-af4b-801e50eaabe7" />

