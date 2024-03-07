import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
const userScheme = new Schema(
{
     username: {
        
     type:    string ,
     required :true ,
     lowercase:true ,
     trim:true ,
     indext:true 
     } ,

     email: {
            
     type:    string ,
     required :true ,
     lowercase:true ,
     trim:true ,
    
     } ,

     fullname: {
            
     type:    string ,
     required :true ,
     trim:true ,
     indext:true 
     } ,

     avatar :{
             type:String , // cloudinary url 
             required :true

     } ,

     coverImage: {
          type:String 
     } ,

     watchHistory :[
          {
            type:Schema.Types.ObjectId ,
            ref:"Video"
          }
     ] ,
     password: {
        type:String ,
        required:[true ,'password is required']
     } ,
     refreshToken:{
        type:String
     }
} 


,{timestamps:true}

) 
userScheme.pre("save" ,async function (next) {
    if(!this.isModified("password")) return next();

    this.password = bcrypt.hash(this.password ,10)
    next()
})
userScheme.methods.isPasswordCorrect = async function (password) {
  return await  bcrypt.compare(password ,this.password)
}
userScheme.methods.generateAccessToken = function(){

    jwt.sign();{
        _id: this._id 
        email: this.email
        username:this.username
        fullname:this.fullname

    }
    process.env.ACCESS_TOKEN_SECRET ,
    {
          exipiresIn:process.env.ACCESS_TOKEN_SECRET
    }
}
userScheme.methods.generateRefreshToken = function(){
    jwt.sign();{
        _id: this._id 
        email: this.email
        username:this.username
        fullname:this.fullname

    } 
        process.env.REFRESH_TOKEN_SECRET,
    {
          exipiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
}
export const User = mongoose.model("User" ,   userScheme  )