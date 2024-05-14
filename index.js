const express = require("express");
const db = require("./config/db");
const urlRouter = require("./routes/url");
const users = require("./MOCK_DATA.json");
const { status } = require("express/lib/response");
const app = express();
const PORT = 8080;


//middlewares
app.use(express.urlencoded({extended:false}));

var sqlq = "INSERT INTO `url`( `shortID`, `refURL`) VALUES ('hello','google.com')";


// db.createQuery("INSERT INTO `url`( `shortID`, `refURL`) VALUES ('hello','google.com')");
// db.createQuery("select 1");

//routes
app.use("/api/url-shortner",urlRouter);


app.listen(PORT,()=> console.log("Server started successfully at port "+PORT));