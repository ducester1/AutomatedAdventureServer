require("dotenv").config();
const express = require("express");
const server = express();
const cors = require("cors");
const path = require("path");
const serveStatic = require("serve-static");

const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to database!"));

server.use(express.json());
server.use(cors());
server.use(serveStatic(__dirname + "/client/dist"));

const router = require("./players");
server.use("/", router);

server.listen(process.env.PORT || 8081), () => console.log("Server started!"); // client is already running on 8080
