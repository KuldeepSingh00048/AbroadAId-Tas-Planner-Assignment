const express = require('express')
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');

const User = require('./model/user_schema')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser');

dotenv.config({ path: './.env' })
// const port = 4000
const port = process.env.PORT || 4000

app.use(cors())
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded())

//acquiring database
require('./database_mongoose/DBconnection');

// app.get("/",(req,res) =>{
//     res.send("this is server side");
// });

//post request
app.use(require('./router/auth'));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client_side/build"));
    app.get("/*", function (req, res) {
        res.sendFile(path.join(__dirname, "./client_side/build/index.html"))
})
}
//port number
app.listen(port, () => {
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