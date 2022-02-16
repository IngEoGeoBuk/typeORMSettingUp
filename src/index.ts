import express from 'express'
import { createConnection } from 'typeorm';
import { User } from './Entities/User';
require('dotenv').config()
const app = express();

createConnection({
    type: 'mysql',
    database: 'typeorm',
    username: 'root',
    password: process.env.DB_PASSWORD,
    logging: true,
    synchronize: true,
    entities: [User],
})

app.get("/", (req, res) => {
    User.find().then((data) => {
        res.json(data);
    })
})

app.post("/", (req, res) => {
    User.insert({
        firstName: "F",
        lastName: "ddd",
        username: "you3667",
        password: "password"
    });

    res.end();
})

app.listen("3001", (): void => {
    console.log("Server Running!");
})