const express = require("express");

const app = express();
const port = 9000;

require("./config/db");

// View Engine
app.set("view engine", "ejs");

// Body Parser
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

// Static Files
app.use(express.static("Public"));

// Routes
app.use("/", require("./routes/eventRoutes"));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(`Server Running On Port ${port}`);
});