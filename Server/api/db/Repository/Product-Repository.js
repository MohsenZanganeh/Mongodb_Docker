let Generic_Repository = require("./Generice-Repository")
let { message,status } = require("../../../util/util")
class Product_Reposiroty extends Generic_Repository {
  constructor(_model) {
    super()
    this.model = _model
  }
  async Is_Exist_Product(Data) {
    try {
      let Product = await this.model.find({ name: Data.name, Company: [Data.Company] })
      if (Product != 0) {
        return status.RESOURCE_EXIST
      }
     return status.OK
    } catch (err) {
      console.log(`Is_Exist_Product->Model:Product-> ${err}`)
      return status.EXPECTATION_FAILED
    }
  }
  async Delete_All(Condition) {
    try {
      let Product = await this.model.deleteMany({ Company: [Condition.id] })
      if (Product.ok > 0) {
        return status.OK
      }
      else {
        return status.NO_CONTENT
      }
    } catch (err) {
      console.log(`Delete_All->Model:Product-> ${err}`)
      return status.EXPECTATION_FAILED
    }
  }
  async findWithCompany(Condition={},company_name = null) {
    try {
      delete Condition.company_name
      var result = company_name == null ?
       await this.model.find(Condition).populate({path:'Company'}) :
       await this.model.find(Condition)
         .populate({ 
           path: 'Company', 
           match: {company_name:company_name}
         }).exec();

      if (result.length > 0) {
        return this.get_Specific_Companies(result)
      }
      else {
        return status.NO_CONTENT
      }
    } catch (err) {
      console.log(`findWithCompany->Model:Product-> ${err}`)
      return status.EXPECTATION_FAILED
    }
  }
  get_Specific_Companies(products){
    return products.filter(function(product){
      if(product.Company.length>0){
        return product
      }
    })
  }
}
module.exports = Product_Reposiroty


