const express=require("express")
const BookRoute=express()
const BooksModel=require("../models/books")
BookRoute.post("/addnew",async(req,res)=>{

    try {
      
        const { Title, Author,  Genre, Description, Price}=req.body
        console.log(req.body)
          const DataToDb=new BooksModel({Title, Author,  Genre, Description, Price})
    await DataToDb.save()
           return res.status(200).json({res:"Book Added successfully"})
           
    } catch (error) {
        console.error(error);
        return res.status(500).json({res:error})
    }
})
BookRoute.get("/show", async (req, res) => {
    try {
      const { genre, sort } = req.query;
      const SortTheData = {};
      SortTheData.Price = 1;
  
      if (sort === "desc") {
        SortTheData.Price = -1;
      }
  
      const query = genre ? { Genre: genre } : {};
  
      const BooksFromDb = await BooksModel.find(query).sort(SortTheData);
      return res.status(200).json({ res: BooksFromDb });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ res: error });
    }
  });
  
BookRoute.delete("/delete/:id",async(req,res)=>{
    try {
        const {id}=req.params
        const DeleteThedata=await BooksModel.findByIdAndDelete(id)
        return res.status(200).json({res:"Book successfully deleted"})
    } catch (error) {
        console.error(error);
        return res.status(500).json({res:error})
    }
    })
    module.exports=BookRoute
