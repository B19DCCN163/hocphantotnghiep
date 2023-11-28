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
const searchProduct = async (req, res) => {
    try {
        const { keyword } = req.params
        const queryString = "SELECT * FROM product WHERE name LIKE ?";
        const [rows, fields] = await pool.query(queryString, [`%${keyword}%`]);
        res.status(200).json({ product: rows })
    } catch (err) {
        res.status(500).json('Lỗi')
    }
}
const addProduct = async (req, res) => {
    try {
        const { name, desc, price, thumb_url, stock } = req.body
        const sql = `
                    INSERT INTO product (description, name, base_price, thumb_url, stock)
                    VALUES (?, ?, ?, ?, ?);
                `
        const [rows, fields] = await pool.execute(sql, [desc, name, price, thumb_url, stock])
        res.status(200).json({ product: rows[0] })
    } catch (err) {
        res.status(500).json('Lỗi')
    }
}
const updateProduct = async (req, res) => {
    try {
        const { name, desc, price, thumb_url, stock, id } = req.body
        const sql = `
                UPDATE product
                SET 
                    description = ?,
                    name = ?,
                    base_price = ?,
                    thumb_url = ?,
                    stock = ?
                WHERE id = ?;
                `
        const [rows, fields] = await pool.execute(sql, [desc, name, price, thumb_url, stock, id])
        res.status(200).json({ status: "update successfully" })
    } catch (err) {
        res.status(500).json('Lỗi')
    }
}
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        console.log(id)
        const sql = `DELETE FROM product WHERE id = ? `
        const [rows, fields] = await pool.execute(sql, [id])
        res.status(200).json({ status: "delete successfully" })
    } catch (err) {
        res.status(500).json('Lỗi')
    }
}
module.exports = {
    getProducts,
    getProductsById,
    addProduct,
    updateProduct,
    deleteProduct,
    searchProduct
}