import express from "express";

const app = express()

app.listen(3111,(req,res)=>{
    console.log("app is running on  3111")
})

app.get("/test",(req,res)=>{
    res.status(200).send("hello")
})

app.get("/test2", (req, res) => {
    res.status(200).json({message:"hello2"})
})