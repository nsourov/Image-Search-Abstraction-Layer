require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require('./routes/router')
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, ()=>console.log('DB connected'));

app.use(bodyParser.json());
app.listen(process.env.PORT||3000, () => console.log("server running"));
app.use('/api', router)