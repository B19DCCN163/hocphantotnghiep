import React, { useContext, useEffect, useState } from 'react'
import axios from '../../../services/axios'
import CardProduct from '../Common/CardProduct'
import { ProductContext } from '../../../context/ProductContext'
import { useLocation } from 'react-router-dom'
function Search() {
    const [products, setProducts] = useState([])
    const { keyword, setKeyword } = useContext(ProductContext)
    const location = useLocation()
    console.log(keyword)
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const searchTerm = searchParams.get('q');
        if(searchTerm) {
            setKeyword(searchTerm)
        }
    }, [location.search, setKeyword])
    useEffect(() => {
        axios.post(`product/search/${keyword}`)
            .then(res => {
                console.log(res)
                setProducts(res.data.product)
            })
            .catch(er => {
                console.log("err")
            })
    }, [keyword])
    return (
        <div className='app-search'>
            <div className="heading">
                Tìm kiếm sản phẩm
            </div>
            <h4>Sản phẩm</h4>
            <div className="list-product">
                {products.length > 0 ? products.map((product, index) => (
                    <CardProduct product={product} key={index} />
                ))
                    :
                    <h5>Không tìm thấy sản phẩm</h5>
                }
            </div>
        </div>
    )
}

export default Search