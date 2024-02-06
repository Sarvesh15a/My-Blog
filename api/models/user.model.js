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
    default:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsurgassociates.com%2Four-physicians%2Fdr-mohammad-r-siadati%2F610-6104451_image-placeholder-png-user-profile-placeholder-image-png%2F&psig=AOvVaw0KU9UH9WIXKkTXYHTjbMQ1&ust=1707293135455000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOC6j9qgloQDFQAAAAAdAAAAABAE'
   }
   }, 
   {timestamps: true}
   
);

const User = mongoose.model('User', userSchema);

export default User;