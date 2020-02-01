const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
})

productSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Product', productSchema)