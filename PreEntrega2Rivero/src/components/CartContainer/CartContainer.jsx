import { Link } from "react-router-dom"
import { useCartContext } from "../Context/CartContext"

const CartContainer = () => {
    const {cart, clear, totalPrice} = useCartContext()

    if (totalPrice.length == 0){
        return (
            <>    
                <br></br>
                <h5>No hay productos en el carrito</h5>
                <br></br>
                <Link to='/'>Volver a la página principal</Link>
            </>
    )}
    if (totalPrice.length > 0){
        return(

        <div>
            {cart.map(prod => (
                <div className="w-50">
                    <img className="w-25" src={prod.img} alt="imagen"/>
                    <label> Precio por unidad: $ {prod.price} - Cantidad : {prod.quantity} - Total: $ {totalPrice()} </label>
                </div>
                
            ))}
            <button><Link to='/Formulario'>Comprar</Link></button>
            <button onClick={clear} >Vaciar Carrito</button>
            <br></br>
            <Link to='/'>Volver a la página principal</Link>
        </div>
    
)}}

export default CartContainer