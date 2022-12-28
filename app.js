const express = require('express')
const app = express()
const mongoose=require('mongoose')

const bookRoutes=require('./routes/book')
const authorRoutes=require('./routes/author')
const bodyParser=require('body-parser')
app.use(express.json());

 app.use(authorRoutes)
app.use(bookRoutes)
app.get('/', (req, res) => {
  res.send('Hello World!')
})
mongoose.connect('mongodb://localhost:27017/smart_tech',{
  useNewUrlParser: true,
   useUnifiedTopology: true
},()=>{
  console.log('db connected')
})
app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
})