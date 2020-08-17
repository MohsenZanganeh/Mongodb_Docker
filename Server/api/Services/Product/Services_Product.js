let Utility_Context = require("../../db/Context/Utility-Context")
let { message,status } = require("../../../util/util")
class Services_Product {
    async Insert_Product(Data) {
        try {
            let check_exist_Company = await Utility_Context.Company().find({_id:Data.Company})

            if (message.HaveError(check_exist_Company)) {
                return status.RESOURCE_EXIST;
            }

            let check_exist_Product = await Utility_Context.Product().Is_Exist_Product(Data)

            if (message.HaveError(check_exist_Product)) {
                return status.RESOURCE_EXIST;
            }
            let Product = await Utility_Context.Product().Insert(Data)    

            return Product;
        }
        catch (err) {
           return err.message
        }
    }

    async Update_Product(Data) {
        try {

            let Product = await Utility_Context.Product().UpdateOne({_id:Data.id}, Data)

            return Product;
        }
        catch (err) {
            return err.message
        }
    }

    async Delete_Product(Condition) {
        try {
            let Product = await Utility_Context.Product().Delete({_id:Condition.id})
            
            return Product;
        }
        catch (err) {
            return err.message
        }
    }
    async Delete_All_Product(Condition) {
        try {
            let Product = await Utility_Context.Product().Delete_All(Condition)
            
            return Product;
        }
        catch (err) {
            return err.message
        }
    }
    async findAll_Product(Condition) {
        try {
            let Product = await Utility_Context.Product().findWithCompany(Condition,Condition.company_name)

            return Product;
        }
        catch (err) {
            return err.message
        }
        
    }
}
module.exports = new Services_Product