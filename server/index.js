const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
// use express.json() to get data into json format
app.use(express.json());
//port
const PORT = process.env.PORT || 5500;

// connect to mongodb

// add port and connect to server
app.listen(PORT, () => console.log("Server Connected."));
