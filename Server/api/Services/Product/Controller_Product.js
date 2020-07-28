let Service_Product = require("./Services_Product")
let Validator_Product = require("./Validator_Product")
class Controller_Product {
  async Insert_Product(req, res) {
    let result = await Validator_Product.Insert_Product(req, res)
    if (result) {
      let Product = await Service_Product.Insert_Product(result)
      res.send(Product)
    }
  }
  async Update_Product(req, res) {
    let result = await Validator_Product.Update_Product(req, res)
    if (result) {
      let Product = await Service_Product.Update_Product(result)
      res.send(Product)
    }
  }
  async Delete_Product(req, res) {
    let result = await Validator_Product.Delete_Product(req, res)
    if (result) {
      let Product = await Service_Product.Delete_Product(result)
      res.send(Product)
    }
  }
  async findAll_Product(req, res) {
    let result = await Validator_Product.findAll_Product(req, res)
    if (result) {
      let Product = await Service_Product.findAll_Product(result)
      res.send(Product)
    }
  }
}
module.exports = new Controller_Product