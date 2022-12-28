
const express=require('express');
const router=express.Router()
const authorController=require('../controllers/author')
router.post('/author',authorController.postAuthor)
router.get('/authors',authorController.getauthors)
router.get('/author/:id',authorController.getAuthor)
router.patch('/author/:id',authorController.updateAuthor)
router.delete('/author/:id',authorController.deleteAuthor)



module.exports=router;