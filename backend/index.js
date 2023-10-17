const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require('http');
const mongoose = require("mongoose");
const Project = require('./schema/project');
const {mongo} = require('./config/env');
const {corsOptions} = require('./config/env');
// const projectService = require('./services/projectService');
const router = require('./router/router');
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(router);

// CSV FILE READ TO LOAD DATA INTO DB
// const fs = require('fs');
// const {parse} = require('csv-parse');

// const util = () => {
//     fs.createReadStream("./projects.csv")
//   .pipe(parse({ delimiter: ",", from_line: 2 }))
//   .on("data", async function (row) {
//     const title = row[0]
//     var technologies = row[1].split(',').filter(function(token) {
//         token = token.toLowerCase();
//         return token.length >= 2;
//     });
//     var frontend = row[2].split(',').filter(function(token) {
//         token = token.toLowerCase();
//         return token.length >= 2;
//     });
//     var backend = row[3].split(',').filter(function(token) {
//         token = token.toLowerCase();
//         return token.length >= 2;
//     });
//     var database = row[4].split(',').filter(function(token) {
//         token = token.toLowerCase();
//         return token.length >= 2;
//     });
//     var infrastructure = row[5].split(',').filter(function(token) {
//         token = token.toLowerCase();
//         return token.length >= 2;
//     });

//     const desc = row[6];

//     const newProject = new Project({
//         title,
//         technologies,
//         frontend : frontend,
//         backend : backend,
//         database : database,
//         infrastructure : infrastructure,
//         desc
//     });
//     const result = await projectService.addProject(newProject);
//     if(result.status === "Failed"){
//         console.log(result.error);
//     }
//   })
//   .on("error", function (error) {
//     console.log(error.message);
//   })
//   .on("end", function () {
//     console.log("finished");
//   });
// }

mongoose.connect(mongo.uri, {useNewUrlParser : true, useUnifiedTopology : true})
    .then(() => {
        server.listen(PORT, () => {~
            console.log(`Server runnin on ${PORT}`);
            //util();
        })
    }).catch((err) => console.log(err));