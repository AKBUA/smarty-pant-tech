
const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const authorSchema= new Schema({

    name:{
        type:String,
        unique:true,
        required:true
    },
    books:[{
    type:mongoose.Schema.Types.ObjectId,
    
    ref:'Book'
    }]
  


})

module.exports=mongoose.model('Author',authorSchema)