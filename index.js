const express=require("express")
const app=express()
const cors=require("cors")
const BookRoute=require("./routes/BookCrud")
const connection=require("./Database/MongoDb")
app.use(express.json())
app.use(cors())

app.use("/book",BookRoute)

app.listen(8080,()=>{
    console.log("server running on port 8080");
    try {
        connection
        console.log("connected to db");
    } catch (error) {
        console.error(error);
    }
})