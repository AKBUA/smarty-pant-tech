const  authorModel=require("../models/author")
const  BookModel=require("../models/book")
const mongoose=require('mongoose');

exports.postBook=(req,res,next)=>{
let  author
const book=new BookModel({
    bookName:req.body.bookName,
    authorId:req.body.authorId,
    ISBN:req.body.ISBN
})

book.save()
.then(result=>{
    return authorModel.findById(req.body.authorId)
}).then(auth=>{
    author=auth;
    auth.books.push(book)
    return auth.save()
})
.then(result=>{
    res.send({
    book:book
    })
})
.catch(err=>{
    console.log(err)
}) 

}

exports.getBooks=(req,res,next)=>{
BookModel.find({}).then(result=>{
    res.send(result)
}).catch(err=>{
    res.send(err)
})
    
}

exports.getbook=async(req,res)=>{


    const {id}=req.params
    await BookModel.findById({_id:id}).populate('authorId','name').then(result=>{
        res.status(200).send({book:result})
    }).catch((err)=>{
        res.status(500).send({error:err})
    });
     

}

exports.updateBook = async (req,res)=>{
   

    const {authorId,bookName,ISBN}=req.body
      const updatedBook = await BookModel.findByIdAndUpdate(req.params.id,
        { $set: {authorId:authorId,bookName:bookName,ISBN:ISBN} },
        { new: true }
      ).populate('authorId' ,'name');
      res.status(200).json({updatedBook:updatedBook});
    
  }
exports.deleteBook = async (req,res,next)=>{
    const {id}=req.params
   
      await BookModel.findByIdAndDelete({_id:id})
      .then((result=>{
        res.status(200).json({
         
            message:"Books has been deleted."})
      })).catch((err)=>{
        res.status(500).send({error:err})
      })
      
    } 
  


