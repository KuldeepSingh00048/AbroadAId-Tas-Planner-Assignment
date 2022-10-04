const mongoose = require('mongoose')
const DB = process.env.DataBase;
mongoose.connect(DB,()=> {console.log('database connected')})


























































// const DB = "mongodb+srv://kuldeepsingh:kd@cluster0.qv8j4ns.mongodb.net/blogdata?retryWrites=true&w=majority"
// // mongodb+srv://kuldeep:<password>@cluster0.gppsi.mongodb.net/?retryWrites=true&w=majority
// //mongodb+srv://kuldeep:<password>@cluster0.gppsi.mongodb.net/?retryWrites=true&w=majority
// mongoose.connect(DB).then(()=>{
//     console.log('connection successfull');
// }).catch((err) => console.log('no connection '));
// for athentication
// const DB = "mongodb+srv://kuldeep:kuldeep@cluster0.gppsi.mongodb.net/?retryWrites=true&w=majority"
// // mongodb+srv://kuldeep:<password>@cluster0.gppsi.mongodb.net/?retryWrites=true&w=majority
// //mongodb+srv://kuldeep:<password>@cluster0.gppsi.mongodb.net/?retryWrites=true&w=majority
// mongoose.connect(DB).then(()=>{
//     console.log('connection successfull');
// }).catch((err) => console.log('no connection '));