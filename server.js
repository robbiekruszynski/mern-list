const express = require("express");
const mongoose = require("mongoose");
const items = require("./routes/items");
const app = express();

//bodyparser Middleware
app.use(express.json());

//database config
const db = require("./config/keys").mongoURI;

//connect to mongo

mongoose
  .connect(db)
  .then(() => console.log("The MongoDB Connected"))
  .catch((err) => console.log(err));

//Use routes
app.use("/api/items", items);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`)); //look at this line
