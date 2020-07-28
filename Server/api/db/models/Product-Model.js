let mongoose=require('mongoose')
let Schema=mongoose.Schema
let Product_Schema=Schema({
  name:{
    type:String,
    trim:true,
    require:true
  },
  production_date:{
    type:Date,
    trim:true,
    require:true
  },
  Company:[{type:Schema.Types.ObjectId,ref:"Company"}],
    created_at:Date,
    Update_at:Date
})

let Product_Model=mongoose.model('Product',Product_Schema)
module.exports=Product_Model;