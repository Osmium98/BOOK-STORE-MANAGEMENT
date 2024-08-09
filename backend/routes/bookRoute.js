const express =require('express');
const {Book} = require('../db.js')

const router =express.Router();
// router.use(express.json());

router.post("/",async(req,res)=>{
    try {
        const {title,author,publishYear} =  req.body;
        if(!title || !author || !publishYear){
            return res.status(400).send({
                message:'Send all required fields: title,author,publishyear'
            });
        }
        const newBook ={
            title,
            author,
            publishYear

        };
        const book = await Book.create(newBook)
        return res.status(200).json({
            msg:"Book added Successfully",
            book:book

        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: error.message
        })
    }

})

router.get('/',async(req,res)=>{
    try {
        const books= await Book.find({})

        return res.status(200).json({
            count:books.length,
            data:books
        })
        
    } catch (error) {
       console.log(error.message);
       res.status(500).send({
        message:error.message
       }) 
    }

})

//get one book from database by id
router.get('/:id',async(req,res)=>{
    try {
        const {id}= req.params;

        const book= await Book.findById(id)
        return res.status(200).json(book)

        
    } catch (error) {
       console.log(error.message);
       res.status(500).send({
        message:error.message
       }) 
    }

})

router.put('/:id',async(req,res)=>{
    try {
        const {title,author,publishYear}= req.body;
        if(!title|| !author || !publishYear ){
            return res.status(400).send({
                message:'Send all required fields: title,author,publishyear'
            });  
        }
        const {id} =req.params;

        const result = await Book.findByIdAndUpdate(id,req.body);
        if(!result){
            return res.status(404).json({
            msg:"Book not found"
            })
        }
        return res.status(200).json({
            msg:"Book is updated"
        })
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message:error.message
        })

        
    }
})

//Route for delete a book

router.delete("/:id", async(req,res)=>{
    try {
        const {id} = req.params;
        const result = await Book.findByIdAndDelete(id);
        if(!result){
            return res.status(404).json({
                message:"Book not found"
            })
        }
        return res.status(200).json({
            message: "Book deleted successfully"
        })
        
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            msg: error.message
        })
        
    }
})

module.exports= router;