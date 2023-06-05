import { Link } from "react-router-dom"
import { useCartContext } from "../Context/CartContext"
import '../CartContainer/CartContainer.css'

const CartContainer = () => {
    const {cart, clear, totalPrice, removeItem} = useCartContext()

    if (totalPrice() == 0) {
        return (
            <>    
                <br></br>
                <h5>No hay productos en el carrito</h5>
                <br></br>
                <Link to='/'>Volver a la página principal</Link>
            </>
    )}
    else {
        return(

        <div>
            {cart.map(prod => (
                <div>
                    <img className="img" src={prod.img} alt="imagen"/>
                    <label> Precio por unidad: $ {prod.price} - Cantidad : {prod.quantity} - Subtotal: $ {prod.price*prod.quantity} </label>
                    <button onClick={()=>removeItem(prod.id)}> Eliminar item </button>
                    <br></br>
                    <br></br>
                    
        </div>
                   
            ))}
            <div className="bold">Precio Total: $ {totalPrice()}</div> 
            <button><Link to='/Formulario'>Comprar</Link></button>
            <button onClick={clear} >Vaciar Carrito</button>
            <br></br>
            <Link to='/'>Seguir comprando</Link>
        </div>
    
)}}

export default CartContainer