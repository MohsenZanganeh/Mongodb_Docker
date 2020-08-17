let mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/Company_Product",{
  poolSize:1,
  useFindAndModify:true
})
let db=mongoose.connection
db.once("open",()=>{
  console.log("connectio is ok .......")
})
let Product=require('./Product-Model')
let Company=require('./Company-Model')
module.exports={
  Product,
  Company
};