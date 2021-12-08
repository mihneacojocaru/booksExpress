import express from "express";
import cors from "cors";
import { getBooks } from "./repository.js";

const app = express();



const port = 3000;


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());


app.get("/books", async (req,res) => {
    try{
    let books= await getBooks();
    res.status(200).json(books);
    }catch(e){
        res.status(500).json({message:e.message});
    }
})

//+++ crud

app.post('/postNewBook',(req,res)=>{
    
    let book = req.body;

    console.log(book);

    

    res.json("Success");


});



app.listen(port, ()=>console.log("Listening on port " + port));