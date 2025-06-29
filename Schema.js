const mongoose = require ('mongoose');

main().then(()=>{
  console.log('Connection Successful');
})
.catch(err => console.log(err));


async function main(){
  await mongoose.connect('mongodb://127.0.0.1:27017/Test');
}

const userSchema = new mongoose.Schema({
  name:String,
  email : String,
  age : Number,
});

const User = mongoose.model('User' , userSchema);
const Employee = mongoose.model('Employee' , userSchema);  
