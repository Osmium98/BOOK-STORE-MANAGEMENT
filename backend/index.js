const express = require('express')
const { PORT } = require("./config.js");
const { Book } = require("./db.js");
const bookRoute = require("./routes/bookRoute.js")
const cors = require('cors')

const app = express();
app.use(express.json())
// app.use(
//     cors({
//         origin:'http://localhost:3000',
//         methods:['GET','POST','PUT','DELETE'],
//         allowedHeaders:['Content-Type'],
//     }))

app.use(cors());


app.use('/books',bookRoute);



app.listen(PORT,()=>{
    console.log(`App is listening to port ${PORT}`)
})
