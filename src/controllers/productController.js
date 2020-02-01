const Product = require('../models/productModel')

module.exports = {
    async listAll(req, res) {
        const { page = 1 } = req.query;

        return res.json(await Product.paginate(req.body, {page, limit: 10}))
    },

    async getById(req, res){
        return res.json(await Product.findById(req.params.id))
    },

    async newProduct(req, res){
        return res.json(await Product.create(req.body))
    },

    async updateProduct(req, res) {
        return res.json(await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })) // New diz para retornar o produto atualizado.
    },

    async deleteById(req, res){
        await Product.findByIdAndDelete(req.params.id)
        return res.send()
    },
}