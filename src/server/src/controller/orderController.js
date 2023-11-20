const pool = require('../config/dbconnect')

const buyProduct = async (req, res) => {
    try {
        const { cartItems, address, sdt, user } = req.body
        const date = new Date()
        await pool.execute("INSERT INTO userinfo (user_id,phone_number, address) VALUES (?, ?, ?)", [user[0].id, sdt, address])
        const [result, fields] = await pool.execute("INSERT INTO order_table (user_id, date) VALUES (?, ?)", [user[0].id, date])
        const insertedId = result.insertId;
        console.log(insertedId)
        for (const item of cartItems) {
            console.log(item)
            const { id, quantity } = item;
            await pool.execute("INSERT INTO orderdetail (quantity,product_id, order_id) VALUES (?, ?, ?)", [quantity, id, insertedId])

        }
        res.status(201).json({ status: "Thêm thành công" })
    } catch (err) {
        res.status(500).json({ err: "Lỗi server" })
    }
}
const getListOrder = async (req, res) => {
    try {
        const { id } = req.query
        const [rows, fields] = await pool.query("Select * FROM order_table WHERE user_id = ?", [id])
        const createResponse = []
        for (const row of rows) {
            const date = row.date
            var cartTotal = 0
            const query = `
                            SELECT 
                                orderdetail.id AS order_detail_id,
                                orderdetail.quantity,
                                product.id AS product_id,
                                product.name AS product_name,
                                product.base_price,
                                product.thumb_url
                            FROM 
                                orderdetail
                            JOIN 
                                product ON orderdetail.product_id = product.id
                            WHERE
                                orderdetail.order_id = ?;
                        `
            const [rows, fields] = await pool.query(query, [row.id])
            const products = []
            for (const row of rows) {
                cartTotal = cartTotal + row.base_price * row.quantity
                products.push(row)
            }
            createResponse.push({
                date, products, orderID: row.id, cartTotal
            })
        }
        res.status(200).json(createResponse)
    } catch (err) {
        res.status(500).json({ er: "lỗi" })
    }
}

module.exports = {
    buyProduct,
    getListOrder
}