const express = require("express");
const userRouter = require("./routes/userRoutes");
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');

dotenv.config();

const app = express();

const mongoose = require("mongoose");

app.use(express.json());
app.use(cookieParser());
app.use(userRouter);

try {
    mongoose.connect(process.env.MONGO_URL);
    console.log('Database Connected');
} catch (error) {
    console.error(error);
}

app.listen(8080, () => console.log('Server running at port 8080'));