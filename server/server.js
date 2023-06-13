const express = require("express");
const mongoose = require("mongoose");
const app = express();

//middleware
app.use(express.json());

//Database connection

const connectionString =
  "mongodb+srv://sundarampragya:authentic@cluster0.vilfiq1.mongodb.net/";
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

routes;
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
