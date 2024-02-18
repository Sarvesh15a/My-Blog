import mongoose  from "mongoose";
const userSchema = new mongoose.Schema({
   username: {
       type: String,
       required: true,
       unique: true,
   },
   email:{
       type: String,
       required: true,
       unique: true,
   },
   password:{
       type: String,
       required:true,
   },
   profilePicture:{
    type:String,
    default:'https://www.shareicon.net/data/128x128/2016/05/24/770137_man_512x512.png'
   },
   isAdmin:{
    type:Boolean,
    default:false,
   },

   }, 
   {timestamps: true}
   
);

const User = mongoose.model('User', userSchema);

export default User;