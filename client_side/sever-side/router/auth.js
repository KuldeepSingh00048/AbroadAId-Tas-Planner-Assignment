const express= require('express');
const router = express.Router();
const User=require('../model/user_schema')
const bycrypt  = require('bcryptjs')

const jwt = require('jsonwebtoken')
require('../database_mongoose/DBconnection');
const authenticate = require('../middleware/authenticate')
// for connecting with database atlas for storing the data of user
//registered route

router.post('/register', async (req,res) =>{
   // console.log('this is post request from user for registration');
   const { name,email,password,cpassword}= req.body;

   if(!name||!email|| !password|| !cpassword)
   {
       return res.status(401).json({error: "all detail have not filled"});
    }
    try{
       const userExist= await User.findOne({email:email})
       if(userExist)
       {
           return res.status(422).json({error:"email already exist"});
        }
        else if(!userExist)
        {
            if(password!==cpassword)
            {return res.status(421).json({error:"please confirm your password correctly"});}
        
        else
        {
            const user= new User({name,email,password,cpassword});
            await user.save()
            res.status(201).json({message:"successfull",user:user})
        }
    }
    }
    catch(error){
        console.log('error')
    }
    
})


// login route

router.post('/login',async (req,res) =>{
    let token;
    const {email,password} = req.body;
    if(!email|| !password)
    {
        return res.status(401).json({error: "all detail have not filled"});
     }
 
    try{
        const userlogin = await User.findOne({email:email});
        console.log(userlogin)

        if(userlogin){
            const passmatch = await bycrypt.compare(password,userlogin.password);
            token = await userlogin.generateAuthToken();
            console.log(token)

            res.cookie("jwtToken",token,{
                expires: new Date(Date.now() + 25892000000),
                httpOnly:true
            })

            if(!passmatch)
            {
                return res.status(404).json({error:'wrong password'})
            }
            else
            {   
                res.status(201).json({message :"login successfully"})
            }
        }
        else if(!userlogin){
            return res.status(404).json({error:'sign up first'})
        }
        else{
            return res.status(404).json({error:"Invalid credential"})
        }
    }
    catch(error)
    {
        console.log(error)
    }
    
})

router.get("/dashboard", authenticate,(req,res) =>{
    res.send(req.rootUser);
    console.log('hello dashboard')
});
router.get("/getdata", authenticate,(req,res) =>{
    res.send(req.rootUser);
    console.log('hello dashboard')
});

// app.get("/create", authenticate,(req,res) =>{
//     res.send("this is dashboard side");
//     console.log('hello dashboard')
// });

module.exports=router




































// const bycrypt  = require('bcryptjs')
// require('../database_mongoose/DBconnection');
//for connecting with database atlas for storing the data of user
// const jwt = require('jsonwebtoken')
// //registered route

// router.post('/register', async (req,res) =>{
//    // console.log('this is post request from user for registration');
//    const { name,email,phone,password,cpassword}= req.body;

//    if(!name|| !email|| !phone|| !password|| !cpassword)
//    {
//     return res.status(401).json({error : "all detail have not filled"});
//    }

//    try{

//        const userExist= await User.findOne({email:email})
//        if(userExist)
//        {
//            return res.status(221).json({error:"email already exist"});
//         }
//         else if(password != cpassword)
//         {
//             return res.status(222).json({error:"please confirm your password correctly"});
//         }
//         else
//         {
//             const user= new User({name,email,phone,password,cpassword});
//             await user.save()
//             res.status(207).json({message:"user registered successfully"})
//         }
//     }
//    catch{
//         console.log(error);
//     }
    
// })


// // login route

// router.post('/login',async (req,res) =>{
//     try{
//         const {email,password} = req.body;
//         if(!email||!password)
//         {
//             return res.status(400).json({error:"please fill your credentials"})
//         }
//         const userlogin = await User.findOne({email:email});
//         console.log(userlogin)

//         const passmatch = await bycrypt.compare(password,userlogin.password);
//         if(!passmatch)
//         {
//             return res.status(404).json({error:'wrong password'})
//         }
//         else if(!userlogin){
//             return res.status(404).json({error:'sign up first'})
//         }
//         else
//         {   
//             const token = await userlogin.generateAuthToken();
//             console.log('token')
//             res.json({message :"login successfully"})
//         }
//     }
//     catch(error)
//     {
//         console.log(error)
//     }
    
// })
