const  authorModel=require("../models/author")
exports.postAuthor=async (req,res,next)=>{
    
    const author=new authorModel({
   name:req.body.name,
   })
   
author.save()
.then(result=>{
    res.send({author:result})
})
.catch(err=>{
    console.log(err)
    res.send(err)
})
}

exports.getauthors=(req,res,next)=>{
     authorModel.find({}).select('name').then((data)=>{
        res.status(200).send({data:data})
     }).catch((error)=>{
        res.status(500).send({error:error })
     })
}
exports.getAuthor=async(req,res)=>{
    const {id}=req.params
   
   await authorModel.findById({_id:id}).populate('books','bookName')
   
   .then((result)=>{
    res.status(200).send({authorAndBooks:result})
   }).catch((error)=>{
    res.status(500).send({error:error})
   })

}


exports.updateAuthor= async (req,res)=>{
   

    const {name}=req.body
       await authorModel.findByIdAndUpdate(req.params.id,
        { $set: {name:name} },
        { new: true }
      ).then((result=>{
        res.status(200).json({updatedAuthor:result})
      })).catch((err)=>{
        res.status(500).send({error:err})
      })
     ;
    
  }
  exports.deleteAuthor = async (req,res,next)=>{
    const {id}=req.params
   
      await authorModel.findByIdAndDelete({_id:id})
      .then((result=>{
        res.status(200).json({
         
            message:"Author  has been deleted."})
      })).catch((err)=>{
        res.status(500).send({error:err})
      })
      
    } 