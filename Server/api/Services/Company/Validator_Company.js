let joi = require("joi")
class Validator_Company {
    async Insert_Company(req, res) {
        const Insert_Company_schema = joi.object({
            company_name: joi.string().empty().required(),
            phon: joi.string().empty().required()
        })

        let result = this.Validate(req, res, Insert_Company_schema)
        return result
    }
    async Update_Company(req, res) {
        const Update_Company_schema = joi.object({
            id:joi.string().empty().required(),
            company_name: joi.string().empty().required(),
            phon: joi.string().empty().required()
        })

        let result = this.Validate(req, res, Update_Company_schema)
        return result
    }
    async Delete_Company(req, res) {
        const Delete_Company_schema = joi.object({
            id: joi.string().empty().required()
        })

        let result = this.Validate(req, res, Delete_Company_schema)
        return result
    }
    async findAll_Company(req, res) {
        const findAll_Company_schema = joi.object({
            company_name: joi.string().empty(),
            phon: joi.string().empty()
        })

        let result = this.Validate(req, res, findAll_Company_schema)
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
module.exports = new Validator_Company