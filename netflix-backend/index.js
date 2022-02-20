const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./controllers/auth");
const userRoute = require("./controllers/users.controller");
const movieRoute = require("./controllers/movies.controller");
const ListRoute = require("./controllers/lists.controller")
const connect = require('./configs/db')
dotenv.config();

// mongoose.connect(`${process.env.MONGO_URL}`, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
//     .then(() => console.log("Mongo Connected"))
//     .catch((e) => console.log(e));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movie", movieRoute);
app.use("/api/lists", ListRoute);

app.listen(8800, async () => {
    await connect();
    console.log("Backend Server is running at 8800")
});