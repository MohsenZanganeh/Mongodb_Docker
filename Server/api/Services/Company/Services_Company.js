let Utility_Context = require("../../db/Context/Utility-Context")
let { message,status } = require("../../../util/util")
class Services_Company {
    async Insert_Company(Data) {
        try {
            let check_exist_company = await Utility_Context.Company().Is_Exist_Company(Data)
            if (message.HaveError(check_exist_company)) {

                return status.RESOURCE_EXIST;
            }
            let Company = await Utility_Context.Company().Insert(Data)

            return Company;
        }
        catch (err) {
            return err.message
        }
    }

    async Update_Company(Data) {
        try {
            let Company = await Utility_Context.Company().UpdateOne({_id:Data.id}, Data)
            
            return Company;
        }
        catch (err) {
            return err.message
        }
    }

    async Delete_Company(Condition) {
        try {
            let Company = await Utility_Context.Company().Delete({_id:Condition.id})
            
            return Company;
        }
        catch (err) {
            return err.message
        }
    }

    async findAll_Company(Condition) {
        try {
            let Company = await Utility_Context.Company().find(Condition)
            
            return Company;
        }
        catch (err) {
            return err.message
        }
    }

}
module.exports = new Services_Company