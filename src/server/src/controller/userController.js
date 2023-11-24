const pool = require('../config/dbconnect')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    try {
        const { username, password } = req.body
        const [rows, fields] = await pool.query("SELECT * FROM user WHERE username = ? and password = ?", [username, password])
        if (rows.length > 0) {
            const id = rows[0].id
            const token = jwt.sign(
                { id: id },
                "duydan",
                {
                    expiresIn: "2h",
                }
            )

            res.status(200).json({ user: rows, accessToken: token })
        } else {
            res.status(401).json({ error: "Tài khoản mật khẩu không chính xác" })

        }
    } catch (error) {
        res.status(500).json("Lỗi đăng nhập")
    }
}
const register = async (req, res) => {
    try {
        const { username, password } = req.body
        const [rows, fields] = await pool.query("SELECT * FROM user WHERE username = ?", [username])
        if (rows.length > 0) {
            res.status(200).json({
                status: "Tài khoản đã tồn tại"
            })
        } else {
            const xxx = await pool.execute("INSERT INTO user (username,password) VALUES ( ?, ?)", [username, password])
            res.status(201).json({
                status: "success",
                user: xxx
            })
        }

    } catch (errorr) {
        res.status(500).json("Lỗi csdl")
    }
}


const getAllUser = async (req, res) => {
    try {

        const [rows, fields] = await pool.query("SELECT * FROM user")

        res.status(200).json({ users: rows })
    } catch (errorr) {
        res.status(500).json("Lỗi csdl")
    }
}

module.exports = {
    login,
    register,
    getAllUser
}