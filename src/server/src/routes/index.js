const productRouter = require('./product')

module.exports = (app) => {

    app.use('/api/product', productRouter)
    app.use('/api/', productRouter)

}

