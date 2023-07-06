const mongoose = require("mongoose")
const BooksSchema = mongoose.Schema({
    Title: String,
    Author: String,
    Genre: String,
    Description: String,
    Price: Number
})
const BooksModel=mongoose.model("Books",BooksSchema)

module.exports=BooksModel