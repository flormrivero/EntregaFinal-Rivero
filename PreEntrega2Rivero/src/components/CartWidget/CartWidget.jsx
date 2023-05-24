import './CartWidget.css'
import Cart from './assets/cart-icon.png'
import { useCartContext } from '../Context/CartContext'

const CartWidget = () => {
    const {cartList, totalCarrito } = useCartContext()
    const totalProduct = totalCarrito(cartList)
    return (
        <div className="cartWidget"> 
        <><img className="Cart" src={Cart} alt="Cart logo" />
        <span className="cartNumber"> {totalProduct} </span></>
        </div>
    )
}

export default CartWidget