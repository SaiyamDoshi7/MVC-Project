const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

const imagePath = "/assets/images";

const eventSchema = new mongoose.Schema(
{
    eventName: {
        type: String,
        required: true,
    },

    organizerName: {
        type: String,
        required: true,
    },

    eventDate: {
        type: Date,
        required: true,
    },

    eventTime: {
        type: String,
        required: true,
    },

    location: {
        type: String,
        required: true,
    },

    category: {
        type: String,
        required: true,
    },

    ticketPrice: {
        type: Number,
        required: true,
    },

    totalSeats: {
        type: Number,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    status: {
        type: String,
        enum: ["Active", "InActive"],
        default: "Active",
    },

    eventImage: {
        type: String,
        required: true,
    },
},
{
    timestamps: true,
}
);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "..", "Public", "assets", "images"));
    },

    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

eventSchema.statics.uploadImage = multer({
    storage: storage,
}).single("eventImage");

eventSchema.statics.imagePath = imagePath;

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;