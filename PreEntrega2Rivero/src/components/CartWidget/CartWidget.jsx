import './CartWidget.css'
import cart from './assets/cart-icon.png'

const CartWidget = () => {
    return (
        <div className='cart'>
            <img src= {cart} alt="cart-widget"/>
            0
        </div>
    )
}
export default CartWidget