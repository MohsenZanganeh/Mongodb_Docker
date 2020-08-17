let joi = require("joi")
let { message } = require("../../../util/util")
class Validator_Product {
    async Insert_Product(req, res) {
        const Insert_Product_schema = joi.object({
            Company: joi.string().empty().required(),
            name: joi.string().empty().required()
        })

        let result = this.Validate(req, res, Insert_Product_schema)
        return result
    }
    async Update_Product(req, res) {
        const Update_Product_schema = joi.object({
            id:joi.string().empty().required(),
            name: joi.string().empty(),
            Company: joi.string().empty()
        })

        let result = this.Validate(req, res, Update_Product_schema)
        return result
    }
    async Delete_Product(req, res) {
        const Delete_Product_schema = joi.object({
            id: joi.string().empty().required()
        })

        let result = this.Validate(req, res, Delete_Product_schema)
        return result
    }
    async findAll_Product(req, res) {
        const findAll_Product_schema = joi.object({
            name: joi.string().empty(),
            company_name: joi.string().empty()
        })

        let result = this.Validate(req, res, findAll_Product_schema)
        return result
    }
    Validate(req, res, schema) {
        var _value;
        try{
            joi.validate(req.body, schema, (err, value) => {
                if (err) {
                    res.send(err)
                    return false
                }
                _value = value
            })
            return _value
        }
        catch(err){
            console.log("err:",err)
        }
        
    }
}
module.exports = new Validator_Product