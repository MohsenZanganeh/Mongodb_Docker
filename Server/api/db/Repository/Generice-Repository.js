let { message,status, Date } = require("../../../util/util");
class Generic_Repository {
    constructor(_model) {
        this.model = _model;
    }
    //generic Insert->any Model Can use this
    async Insert(Data) {
        try {
            let newData = this.SetDateNow(Data)
            let newModel = new this.model(newData)
            await newModel.save()
            return status.OK
        }
        catch (err) {
            console.log("Insert->", err)
            return status.EXPECTATION_FAILED
        }
    }
    SetDateNow(Data) {
        let DateNow = Date.get_DateNow()
        Data.update_at = DateNow
        if (!Data.created_at) {
            Data.created_at = DateNow
        }
        return Data
    }
    //generic Delete ->any Model Can use this
    async Delete(Condiation) {
        try {
            let result = await this.model.deleteOne(Condiation)
            if (result.ok > 0) {
                return status.OK
            }
            else {
                return status.NO_CONTENT
            }
        }
        catch (err) {
            console.log(`deleteOne->${err}`)
            return status.EXPECTATION_FAILED
        }
    }

    //generic Update ->any Model Can use this
    async UpdateOne(Condition, Data) {
        try {

            delete Data.id
            let result = await this.model.updateOne(Condition, { $set: Data })
            if (result.n > 0) {
                return status.OK
            }
            else {
                return status.NO_CONTENT
            }
        }
        catch (err) {
            console.log(`UpdateOne->${err}`)
            return status.EXPECTATION_FAILED
        }
    }
    //generic findAll ->any Model Can use this
    async find(Condition = {}) {
        try {

            let result = await this.model.find(Condition)
            if (result.length > 0) {
                return result
            }
            else {
                return status.NO_CONTENT
            }
        }
        catch (err) {
            console.log(`find->${err}`)
            return status.EXPECTATION_FAILED
        }
    }
}
module.exports = Generic_Repository