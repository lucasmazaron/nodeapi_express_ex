const Product = require('../models/productModel')

module.exports = {
    async listAll(req, res) {
        return res.json(await Product.find(req.body))
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
        
    },
}