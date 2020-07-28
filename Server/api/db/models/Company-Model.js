let mongoose = require("mongoose");
let Schema=mongoose.Schema
let Company_Schema = Schema({
    company_name: {
        type: String,
        trim: true,
        require: true
    },
    phon: {
        type: String,
        trim: true,
        require: true
    },
    created_at: Date,
    update_at: Date
})
let Company_Model = mongoose.model('Company', Company_Schema)
module.exports = Company_Model;