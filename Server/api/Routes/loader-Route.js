let express=require("express")
let Router=express();

let Company=require("../Services/Company/Router_Company")
let Product=require("../Services/Product/Router_Product")

Router.use("/company",Company)
Router.use("/product",Product)
module.exports=Router