import React, { useContext, useEffect, useState } from 'react'
import axios from '../../../services/axios';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import { ToastContainer, toast } from 'react-toastify';

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null)
    const { addToCart } = useContext(CartContext)
    useEffect(() => {
        axios.get(`product/${id}`)
            .then(res => {
                setProduct(res.data.product)
                console.log(res.data.product)
            }).catch(er => {
                console.log(er)
            })
    }, [])

    return (
        <div className='product-detail'>
            <div className="heading" >
                <h3>Thông tin sản phẩm</h3>
            </div>
            {product &&
                <div className="product-info">
                    <div className="img">
                        <img src={product.thumb_url} alt="" />
                    </div>
                    <div className="product-desc">
                        <div className="product-name">
                            {product.name}
                        </div>
                        <div className="product-rate">
                            <div className="rating">
                                <div className="title">
                                    Đánh giá:
                                </div>
                                <div className="value">
                                    <span>
                                        4.9
                                    </span>
                                    <span>
                                        <i className="fa-solid fa-star"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="sold">
                                <div className="title">
                                    Đã bán:
                                </div>
                                <div className="value">
                                    <span>
                                        200
                                    </span>
                                    <span>
                                        <i className="fa-brands fa-product-hunt"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="product-stock">
                            <div className="title">
                                Số lượng(Stock):
                            </div>
                            <div className="value">
                                <span>
                                    {product.stock}
                                </span>

                            </div>
                        </div>
                        <div className="product-price">
                            <div className="title">
                                Giá bán:
                            </div>
                            <div className="value">
                                <span>
                                    {product.base_price} VND
                                </span>

                            </div>
                        </div>
                        <div className="product-add" onClick={() => {
                            addToCart(product)
                            toast.success('Đã thêm vào giỏ hàng')
                        }}>
                            <span>Thêm vào giỏ hàng</span>
                        </div>
                    </div>
                </div>
            }
            {
                product &&

                <div className="product-specs">
                    <div className="heading">
                        Thông tin thêm
                    </div>
                    <div className='info'>
                        <p>
                            {product.description}
                        </p>
                        <p>
                            {product.description}
                        </p>
                    </div>

                </div>
            }

        </div>
    )
}

export default ProductDetail
