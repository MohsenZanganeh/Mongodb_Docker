let Service_Company = require("./Services_Company")
let Service_Product = require("../Product/Services_Product")
let Validator_Company = require("./Validator_Company")
class Controller_Company {
  async Insert_Company(req, res) {
    let result = await Validator_Company.Insert_Company(req, res)
    if (result) {
      let Company = await Service_Company.Insert_Company(result)
      res.send(Company)
    }
  }
  async Update_Company(req, res) {
    let result = await Validator_Company.Update_Company(req, res)
    if (result) {
      let Company = await Service_Company.Update_Company(result)
      res.send(Company)
    }
  }
  async Delete_Company(req, res) {
    let result = await Validator_Company.Delete_Company(req, res)
    if (result) {
       await Service_Product.Delete_All_Product(result)
      let Company = await Service_Company.Delete_Company(result)
      res.send(Company)
    }
  }
  async findAll_Company(req, res) {
    let result = await Validator_Company.findAll_Company(req, res)
    if (result) {
      let Company = await Service_Company.findAll_Company(result)
      res.send(Company)
    }
  }
}
module.exports = new Controller_Company