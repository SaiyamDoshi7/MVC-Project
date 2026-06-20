const Event = require("../models/eventModel");

module.exports.indexpage = async (req, res) => {
    try {
        let allEvents = await Event.find({});
        return res.render("index", { allEvents });
    } catch (err) {
        console.log(err);
        return res.send(err);
    }
};

module.exports.contact = (req, res) => {
    return res.render("contact");
};

module.exports.addEventPage = (req, res) => {
    return res.render("addEvent");
};

module.exports.viewEventPage = async (req, res) => {
    try {
        let allEvents = await Event.find({});
        return res.render("viewEvent", { allEvents });
    } catch (err) {
        console.log(err);
        return res.send(err);
    }
};

module.exports.editEventPage = async (req, res) => {
    try {
        let event = await Event.findById(req.params.id);
        return res.render("editEvent", { event });
    } catch (err) {
        console.log(err);
        return res.redirect("back");
    }
};

module.exports.addEvent = async (req, res) => {
    try {
        let image = "";

        if (req.file) {
            image = req.file.filename;
        }

        await Event.create({
            eventName: req.body.eventName,
            organizerName: req.body.organizerName,
            eventDate: req.body.eventDate,
            eventTime: req.body.eventTime,
            location: req.body.location,
            category: req.body.category,
            ticketPrice: req.body.ticketPrice,
            totalSeats: req.body.totalSeats,
            description: req.body.description,
            status: req.body.status,
            eventImage: image,
        });

        return res.redirect("/view-event");
    } catch (err) {
        console.log(err);
        return res.send(err);
    }
};

module.exports.deleteEvent = async (req, res) => {
    try {
        await Event.findByIdAndDelete(req.params.id);
        return res.redirect("/view-event");
    } catch (err) {
        console.log(err);
        return res.send(err);
    }
};

module.exports.updateEvent = async (req, res) => {
    try {
        console.log("BODY:", req.body);
        console.log("FILE:", req.file);

        const updateData = { ...req.body };

        if (req.file) {
            updateData.eventImage = req.file.filename;
        }

        await Event.findByIdAndUpdate(req.params.id, updateData, { new: true });

        return res.redirect("/view-event");
    } catch (err) {
        console.log(err);
        return res.send(err);
    }
};