module.exports = {
    HaveError(Data) {
        if (Data == null || Data.httpCode > 300) {
            return true
        }
    },
    SetMessage(Data) {
        this.Data = Data
    },
    GetMessage() {
        return this.Data;
    },
    Inserted(model) {
        return `this ${model} already been recorded`;
    }
}