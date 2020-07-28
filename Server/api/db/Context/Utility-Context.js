let {Product,Company} = require("../models/index")
let Generic_Repository = require("../Repository/Generice-Repository")
let Company_Repository=require("../Repository/Company-Repository")

let Product_Repository=require("../Repository/Product-Repository")
class Utility_Context {
    Company() {
        if (!this.company) {
            this.company = new Company_Repository(Company)
            return this.company
        }
        return this.company
    }

    Product() {
        if (!this.product) {
            this.product = new Product_Repository(Product)
            return this.product
        }
        return this.product
    }
}
module.exports = new Utility_Context