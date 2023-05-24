import React from "react";
import { useContext } from "react";
//import { CartProvider } from "../context/CartContext";
import { Link } from "react-router-dom";
import { CartItem } from '../CartItem/CartItem'


const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext()

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <link to='/' className="Option">Productos</link>
            </div>
        )
    }
    return (
        <div>
            { cart.map( p => <CartItem key={p.id} {...p}/>)}
            <h3>Total: ${ total }</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <Link to='/checkout' className="Option">Checkout</Link>
        </div>
    )
}
export default Cart