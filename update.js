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

User.updateOne({name:"Sargam"}, {age:21}).then((res)=>{
  console.log(res);
}).catch((err)=> console.log(err));

User.updateMany({age:{$gte:23}}, {age:20}).then((res)=>{
  console.log(res);
}).catch((err)=> console.log(err));

User.findOneAndUpdate({name:"Gungun"}, {age:40} , {new:true}).then((res)=>{
  console.log(res);
  
}).catch((err)=> console.log(err));

User.findByIdAndUpdate("6858530e2c01029c4bdca196", {age:23}, {new:true}).then((res)=>{
  console.log(res);
}).catch((err)=> console.log(err));
