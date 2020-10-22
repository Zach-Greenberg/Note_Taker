//npm install dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");

//create express server
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(_dirname));

//routing


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});