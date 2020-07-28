let express=require("express")
let Router=express();
let Controller_Product=require("./Controller_Product")
Router.post("/insert-product",Controller_Product.Insert_Product)
Router.put("/update-product",Controller_Product.Update_Product)
Router.delete("/delete-product",Controller_Product.Delete_Product)
Router.get("/find-product",Controller_Product.findAll_Product)
module.exports=Router
