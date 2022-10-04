const express =require('express')
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const cookieParser= require('cookie-parser');
const User=require('./model/user_schema')
const dotenv = require('dotenv')
dotenv.config({path:'./.env'})
const port = 4000
// const port = process.env.PORT||5000

app.use(cookieParser());
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

//acquiring database
require('./database_mongoose/DBconnection');

//post request
app.use(require('./router/auth'));

//port number
app.listen(port, ()=>{ 
        console.log(`server running on prot number ${port}`)
        
    })
    
    

















































    




    
    










    
    
    



    
    
    // const routeUrl = require('./routes/routes')
    // const express = require('express');
// const app = express();
// const cors = require('cors');
// // const mongoose = require('mongoose');
// const port = 4000;
// require('./database_mongoose/DBconnection');
// // //middleware
// // const middleware = (req,res,next)=>{
// //     console.log('this is middleware in console')
// //    //res.send('this is middleware in browser');
// //    next();
// // }
// app.use(cors())
// app.use(express.json());
// app.use("/",require('./router/auth'));
// // // 
// // app.get('/',(req,res) => {
// //     res.send(`this is home page`)
// // })

// app.listen(port,function() {
//     console.log(`server running on port  ${port}`);
// })