import React, { useContext, useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../../../services/axios';
import { toast } from 'react-toastify';
import { ProductContext } from '../../../../context/ProductContext';
import { getListProduct } from '../../../../services/Api/product';
function EditProduct() {
    const { id } = useParams()
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState(0)
    const [thumb_url, setThumb_url] = useState('')
    const [stock, setStock] = useState(0)
    const navigate = useNavigate()
    const { setProducts } = useContext(ProductContext)
    useEffect(() => {
        axios.get(`product/${id}`)
            .then(res => {
                setName(res.data.product.name)
                setDesc(res.data.product.description)
                setPrice(res.data.product.base_price)
                setThumb_url(res.data.product.thumb_url)
                setStock(res.data.product.stock)
                console.log(res.data.product)
            }).catch(er => {
                console.log(er)
            })
    }, [])
    const handleUpdateProduct = (e) => {
        e.preventDefault()
        if (!name || !desc || price < 0 || !thumb_url || stock < 0) {
            toast("Giá trị không hợp lệ")
            return
        }
        axios.put("product/update", { name, desc, price, thumb_url, stock, id })
            .then(res => {
                toast.success("Cập nhật thành công")
                navigate('/admin/products')
            })
            .catch(er => {
                toast.warn("Lỗi server")
            })
    }
    const handleDeleteProduct = (e) => {
        e.preventDefault()
        console.log(id)
        axios.delete(`product/delete/${id}`)
            .then(res => {
                toast.warning("Đã xóa sản phẩm")
                navigate('/admin/products')
            })
            .catch(er => {
                toast.warn("Lỗi server")
            })
    }
    return (
        <div className='dashboard-addproduct'>
            <div className="heading">
                Cập nhật sản phẩm
            </div>
            <form className="form" onSubmit={handleUpdateProduct}>
                <div className="input">
                    <Form.Label htmlFor="name">Name</Form.Label>
                    <Form.Control
                        type="text"
                        id="name"
                        aria-describedby="passwordHelpBlock"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="input">
                    <Form.Label htmlFor="desc">Description</Form.Label>
                    <Form.Control
                        type="text"
                        id="desc"
                        aria-describedby="passwordHelpBlock"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </div>

                <div className="input">
                    <Form.Label htmlFor="price">Price</Form.Label>
                    <Form.Control
                        type="number"
                        id="price"
                        aria-describedby="passwordHelpBlock"
                        value={price}
                        onChange={(e) => setPrice(parseInt(e.target.value))}
                    />
                </div>
                <div className="input">
                    <Form.Label htmlFor="thumb">Thumb_url</Form.Label>
                    <Form.Control
                        type="text"
                        id="thumb"
                        aria-describedby="passwordHelpBlock"
                        value={thumb_url}
                        onChange={(e) => setThumb_url(e.target.value)}
                    />
                </div>
                <div className="input">
                    <Form.Label htmlFor="stock">Stock</Form.Label>
                    <Form.Control
                        type="number"
                        id="stock"
                        aria-describedby="passwordHelpBlock"
                        value={stock}
                        onChange={(e) => setStock(parseInt(e.target.value))}
                    />
                </div>
                <input type="submit" value="Update product" />
            </form>
            <button className='btn-remove' onClick={handleDeleteProduct}>Xóa</button>

        </div>
    )
}

export default EditProduct
