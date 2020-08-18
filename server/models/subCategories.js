const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types

const subCSchema = new mongoose.Schema({
    category:{
        type:ObjectId,
        ref:"categories"
    },
    subCname: {
        type: String,
        required: true
    },
    subCdescription: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
})

const subCModel = mongoose.model("categories", subCSchema);
module.exports = subCModel;