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

const router = require(__dirname + "/players");
server.use("/players", router);

const port = process.env.PORT || 3000;
server.listen(port, () => console.log("Server started on port: " + port)); // client is already running on 8080
