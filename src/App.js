import express from "express";
// const express = require('express')
// const bodyParser = require('body-parser')
import { init } from "./db/Init";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import { addStudent } from "./controller/StudentData";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const app = express();
const port = process.env.PORT;

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

init().catch((e) => console.log(e.message));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',(req,res)=>{
  res.render('form')
})

// app.post("/", addStudent);
app.post("/", (req,res)=> {
  addStudent(req, res);
})

app.listen(port, () => {
  console.log(`listening to port: ${port}`);
});