
const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const bookSchema= new Schema({
    bookName:{
        type:String,
        required:true
    },
    authorId:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"Author",
         required:true
         
    },
    ISBN:{
        type:String,
        required:true,
        unique:true
    }

})

module.exports=mongoose.model('Book',bookSchema)