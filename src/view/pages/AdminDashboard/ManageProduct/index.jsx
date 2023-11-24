import React, { useContext, useEffect, useState } from 'react'
import { Dropdown, DropdownButton, Pagination } from 'react-bootstrap'
import { ProductContext } from '../../../../context/ProductContext'
import { Link } from 'react-router-dom'
import axios from '../../../../services/axios'
import { toast } from 'react-toastify'
function ManageProduct() {
    // const { products } = useContext(ProductContext)

    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('product/list')
            .then(res => {
                setProducts(res.data)
            })
            .catch(er => {
                toast("Lỗi serve")
            })
    }, [])
    return (
        <div className='dashboard-product'>
            <div className="heading">
                Danh sách sản phẩm
            </div>
            <div className="nav">
                <div className="search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder='Search products by name or keyword...' />
                </div>
                <div className="sort">
                    <DropdownButton id="dropdown-basic-button" title="Sort">
                        <Dropdown.Item href="#/action-1">Price</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Name</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Total Sales</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>
            <Link to="add" className='product-action'>
                ADD
            </Link>
            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Thumb_url</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>TotalSale</th>
                            <th>Stock</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length > 0 &&
                            products.map((product, index) => (
                                <tr key={product.id}>
                                    <td>
                                        {product.id}
                                    </td>
                                    <td className='img'>
                                        <img src={product.thumb_url} alt="" />
                                    </td>
                                    <td>{product.name}</td>
                                    <td>{product.base_price}</td>
                                    <td>130</td>
                                    <td>{product.stock}</td>
                                    <td className='action'>
                                        <Link to={`edit/${product.id}`}>
                                            Edit
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>

            </div>
            <div className="paginate">
                <Pagination>
                    <Pagination.First disabled />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last disabled={true} />
                </Pagination>
            </div>
        </div>
    )
}

export default ManageProduct
