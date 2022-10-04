const jwt = require('jsonwebtoken')
const User=require('../model/user_schema')

const Authenticate = async (req,res,next)=>{

    try{
        const token = req.cookies.jwtToken;
        const verifyToken = jwt.verify(token,process.env.KEY);

        const rootUser = await User.findOne({_id:verifyToken._id,'tokens.token':token})

        if(!rootUser){
            throw new Error('User Not Found');
        }

        req.token = token;
        req.rootUser= rootUser;
        req.userID = rootUser._id;
        next();

    }
    catch(err){
        console.log(err)
        res.status(401).send("No token")
    }
}

module.exports= Authenticate