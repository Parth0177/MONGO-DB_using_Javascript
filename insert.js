const mongoose = require('mongoose');
main().then(()=>{
  console.log('Sucessfully connected!');
})
.catch(err=> console.log(err));



async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Test')
}

const userSchema = new mongoose.Schema({
  name:String,
  email : String,
  age : Number,
});

const User = mongoose.model('User' , userSchema);


// INSERT ONE
/*const user1 = new User({
  name:"Parth",
  email:"parth670@gmail.com",
  age:22,
})

const user2 = new User({
  name:"Tinku",
  email:"Tinku69@gmail.com",
  age:23,
})

user1.save();
user2.save().then((res)=>{
  console.log(res);
  
}).catch((err)=> console.log(err));
*/


// INSERT MANY
User.insertMany([
  {name:"Sargam", email:"flat69@gmail.com", age:22},
  {name:"Gungun", email:"Nice69@gmail.com", age:23},
  {name:"Aryan", email:"big69@gmail.com", age:25},
  {name:"Shivansh", email:"buns69@gmail.com", age:25},

]).then((res)=>{
  console.log(res);
  
});

