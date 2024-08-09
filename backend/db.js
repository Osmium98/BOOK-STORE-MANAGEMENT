const mongoose =require ('mongoose');
require('dotenv').config();

const dbConnectionString = process.env.DB_CONNECTION_STRING;

mongoose.connect(dbConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("Database Connected Successfully");


})
.catch((e)=>{
    console.log(e);
    process.exit(1);
})

const bookSchema = new mongoose.Schema({
    title :{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    publishYear:{
        type:Number,
        required:true
    },

},
{
    timestamps:true
}
)


const Book = mongoose.model("Book",bookSchema)

module.exports={
Book
}

