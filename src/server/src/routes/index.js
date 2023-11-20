const productRouter = require('./product')
const userRouter = require('./user')
const orderRouter = require('./order')

module.exports = (app) => {
    app.use('/api/product', productRouter)
    app.use('/api/user', userRouter)
    app.use('/api/order', orderRouter)
    app.use('/api/', productRouter)
}

