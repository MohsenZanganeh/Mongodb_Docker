let Generic_Repository = require("./Generice-Repository")
let { message,status } = require("../../../util/util") 
class Company_Reposiroty extends Generic_Repository {
  constructor(_model) {
    super() 
    this.model = _model
  }
  async Is_Exist_Company(Data){
    try {
      let Company = await this.model.find({company_name:Data.company_name,phon:Data.phon })
      if (Company != 0) {
        return status.RESOURCE_EXIST
      }
     return status.OK

    } catch (err) {
      console.log(`Is_Exist_Company->Model:Company-> ${err}`)
      return status.EXPECTATION_FAILED
    }
  }
}
module.exports = Company_Reposiroty


