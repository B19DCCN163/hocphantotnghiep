import React, { createContext, useEffect, useState } from 'react'
import useLocalStorage from 'use-local-storage';

export const CartContext = createContext()
function CartProvider({ children }) {
    const [cartItems, setCartItems] = useLocalStorage('cartItems', [])
    const addToCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

        if (isItemInCart) {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                )
            );
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    }
    const removeFromCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

        if (isItemInCart.quantity === 1) {
            setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id)); // if the quantity of the item is 1, remove the item from the cart
        } else {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity - 1 } // if the quantity of the item is greater than 1, decrease the quantity of the item
                        : cartItem
                )
            );
        }
    };
    const clearCart = () => {
        setCartItems([])
    }
    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + item.base_price * item.quantity, 0); // calculate the total price of the items in the cart
    };
    return (
        <CartContext.Provider value={
            {
                cartItems,
                setCartItems,
                addToCart,
                removeFromCart,
                clearCart,
                getCartTotal
            }
        }>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
