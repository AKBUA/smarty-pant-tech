const express=require('express');
const router=express.Router()
const bookController=require('../controllers/book')
router.post('/book',bookController.postBook)
router.get('/books',bookController.getBooks)
router.get('/book/:id',bookController.getbook)
router.delete('/book/:id',bookController.deleteBook);
router.patch('/book/:id',bookController.updateBook)

module.exports=router;