import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from '../../../../services/axios';
import { toast } from 'react-toastify';
import { ProductContext } from '../../../../context/ProductContext';
import { getListProduct } from '../../../../services/Api/product';
function AddProduct() {
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState(0)
    const [thumb_url, setThumb_url] = useState('')
    const [stock, setStock] = useState(0)
    const navigate = useNavigate()
    const { setProducts } = useContext(ProductContext)
    const handleAddProduct = async (e) => {
        e.preventDefault()
        if (!name || !desc || price < 0 || !thumb_url || stock < 0) {
            toast("Giá trị không hợp lệ")
            return
        }
        axios.post('product/add', { name, desc, price, thumb_url, stock })
            .then(res => {
                console.log(res.data)
            })
            .catch(res => {
                toast.warn("Lỗi serve")

            })
        const data = await getListProduct()
        setProducts(data)
        toast("Thêm thành công")
        navigate('/admin/products')
    }
    return (
        <div className='dashboard-addproduct'>
            <div className="heading">
                Thêm sản phẩm
            </div>
            <form className="form" onSubmit={handleAddProduct}>
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
                <input type="submit" value="Add product" />
            </form>

        </div>
    )
}

export default AddProduct
