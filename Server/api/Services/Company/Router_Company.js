let express=require("express")
let Router=express();
let Controller_Company=require("./Controller_Company")
Router.post("/insert-company",Controller_Company.Insert_Company)
Router.put("/update-company",Controller_Company.Update_Company)
Router.delete("/delete-company",Controller_Company.Delete_Company)
Router.get("/find-company",Controller_Company.findAll_Company)
module.exports=Router
