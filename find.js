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

/*User.find({}).then((res)=>{
  console.log(res);
  
}).catch((err)=> console.log(err));*/

User.find({age: {$gte :23}}).then((res)=>{
  console.log(res[0].name);
  console.log(res[1].name);

  
}).catch((err)=>console.log(err)
);

