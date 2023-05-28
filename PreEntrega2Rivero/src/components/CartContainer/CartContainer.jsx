import { CartContext } from "../Context/CartContext"

const CartContainer = () => {
    const {cart,  removeCart} = CartContext()

    return (
        <div>
            {cart.map(prod => (
                <div className="w-50">
                    <img className="w-25" src={prod.img} alt="imagen"/>
                    <label> Precio {prod.price} - Cantidad : {prod.cantidad}</label>
                    <button > X </button>
                </div>
            ))}
            <button onClick={removeCart} className="btn btn-outline-danger">Vaciar Carrito</button>
        </div>
    )
}

export default CartContainer