const mongoose = require('mongoose');
main().then(()=>{
  console.log('Sucessfully connected!');
})
.catch(err=> console.log(err));



async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon')
}

const bookSchema= mongoose.Schema({
  title: {
    type:String,
    required: true,
    maxLength:20,
  },
  author:{
    type:String,
  },
  price:{
    type:Number,
  },
  discount:{
    type:Number,
    default: 0,
  },
});

const book = mongoose.model('book', bookSchema);

let book1 = new book({
  title:"Science XII",
  author:"ML Agarwal",
  price:1090,
});

/*book1.save().then((res)=>{
  console.log(res);
}).catch((err)=> console.log(err));*/


let book2 = new book({
  title:"Mathematics XII",
  author:"ML Agarwal",
  price:1090,
});

/*book2.save().then((res)=>{
  console.log(res);
}).catch((err)=> console.log(err));*/

/*book.deleteOne({title:"Mathematics XII"}).then((res)=>{
  console.log(res);
  
}).catch((err)=> console.log(err)
)*/

let book3 = new book({
  title:"Computer XII",
  author:"ML Agarwal",
  price:4800,
});

let book4 = new book({
  title:"Gone Girl ",
  author:"William Shakespear",
  price:399,
});

book4.save().then((res)=>{
  console.log(res);
}).catch((err)=> console.log(err))