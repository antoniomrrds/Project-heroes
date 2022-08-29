require('dotenv').config()
const app =  require('./app.js')

const PORT = process.env.PORT || 5050

app.listen(PORT,_=>{
  console.log(`Server is on\nPort: ${PORT}`)
})