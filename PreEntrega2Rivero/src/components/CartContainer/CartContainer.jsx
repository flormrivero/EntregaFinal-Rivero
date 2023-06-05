import { Link } from "react-router-dom"
import { useCartContext } from "../Context/CartContext"

const CartContainer = () => {
    const {cart, clear, totalPrice} = useCartContext()

    return (
        <div>
            {cart.map(prod => (
                <div className="w-50">
                    <img className="w-25" src={prod.img} alt="imagen"/>
                    <label> Precio por unidad: $ {prod.price} - Cantidad : {prod.quantity} - Total: {totalPrice}</label>
                </div>
            ))}
            <button onClick={clear} className="btn btn-outline-danger">Vaciar Carrito</button>
            <br></br>
            <Link to='/'>Volver a comprar</Link>
        </div>
    )
}

export default CartContainer