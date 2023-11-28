import React, { createContext, useEffect, useState } from 'react'
import { getListProduct } from '../services/Api/product'
export const ProductContext = createContext()
function ProductProvider({ children }) {
    const [products, setProducts] = useState([])
    const [keyword, setKeyword] = useState('')
    useEffect(() => {
        const getData = async () => {
            const data = await getListProduct()
            setProducts(data)
        }
        getData()
    }, [])
    return (
        <ProductContext.Provider value={
            {
                products,
                setProducts,
                keyword, 
                setKeyword
         
            }
        }>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider
