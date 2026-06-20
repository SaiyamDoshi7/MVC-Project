const express = require("express");
const route = express.Router();

const eventctl = require("../controller/controller");

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/assets/images");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

route.get("/", eventctl.indexpage);

route.get("/contact", eventctl.contact);

route.get("/add-event", eventctl.addEventPage);
route.post("/insertEvent", upload.single("eventImage"), eventctl.addEvent);

route.get("/view-event", eventctl.viewEventPage);

route.get("/edit-event/:id", eventctl.editEventPage);

route.post("/update-event/:id", upload.single("eventImage"), eventctl.updateEvent);

route.get("/delete-event/:id", eventctl.deleteEvent);

module.exports = route;