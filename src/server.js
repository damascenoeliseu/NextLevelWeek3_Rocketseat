//dependencies
const express = require("express");
const path = require("path");
const pages = require("./pages.js");

//starting the express
const server = express();

server
    //static files
    .use(express.static('public'))
    
    // set up template
    .set("views", path.join(__dirname, "views"))
    .set("view engine", "hbs")

    //app routes
    .get("/", pages.index)
    .get("/orphanage", pages.orphanage)
    .get("/orphanages", pages.orphanages)
    .get("/create-orphanage", pages.createOrphanage);


//turn the server on
server.listen(5500);