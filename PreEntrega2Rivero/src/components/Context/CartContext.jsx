import React, { useState, useContext } from "react"

const CartContext = React.createContext([])

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (item, newQuantity) => {
        const newCart = cart.filter(prod => prod.id !== item.id)
        newCart.push({ ...item, quantity: newQuantity })
        setCart(newCart)
    }

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0)
    }

    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0)

    const clear = () => setCart([])

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false

    const removeItem = (id) => setCart(cart.filter(product => product.id !== id))

    return (
        <CartContext.Provider value={{ clear, isInCart, removeItem, addItem, totalPrice, totalProducts, cart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider