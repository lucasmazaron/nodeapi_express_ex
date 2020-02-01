const product = require('../../controllers/productController')

module.exports = (router) => {
    router.route('/products')
        .get(product.listAll)
        .post(product.newProduct)

    router.route('/products/:id')
        .get(product.getById)
        .put(product.updateProduct)
        .delete(product.deleteById)
}
