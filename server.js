const express = require("express");
const mongoose = require("mongoose");
const app = express();

require('dotenv').config();

//import routes
const userRoutes = require('./routes/userRoutes');

const MONGO_URI = process.env.MONGO_URI; // 환경 변수로부터 MongoDB 연결 문자열을 가져옵니다.

if (!MONGO_URI) {
    console.error('MongoDB connection string not found. Please set the MONGO_URI environment variable.');
    process.exit(1);
}

//database connection
mongoose.connect(process.env.MONGO_URI, {
    
})
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));

app.use('/api/users', userRoutes);

app.use(express.json());

app.get("/", (req,res) => {
    res.send("server is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
