const pool = require('../config/dbconnect')

const getProducts = async (req, res) => {
    try {
        const [rows, fields] = await pool.query("SELECT * FROM product")
        res.status(200).json(rows)
    } catch (err) {
        res.status(500).json('Lỗi')
    }
}
const getProductsById = async (req, res) => {
    try {
        const { id } = req.params
        const [rows, fields] = await pool.query("SELECT * FROM product WHERE id = ?", [id])
        res.status(200).json({ product: rows[0] })
    } catch (err) {
        res.status(500).json('Lỗi')
    }
}
module.exports = {
    getProducts,
    getProductsById
}