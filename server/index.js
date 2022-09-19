const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config')

const app = express();

const PORT = process.env.PORT || 2000;

//middleware
app.use(cors({origin: "http://localhost:3000"}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.DB_CONNECTION, (err)=>{
    if (err) {
        console.log('no connection');
    } else {
        console.log('Connected');
    };
})

app.listen(PORT, ()=>{console.log(`Server started on port ${PORT}`)})
