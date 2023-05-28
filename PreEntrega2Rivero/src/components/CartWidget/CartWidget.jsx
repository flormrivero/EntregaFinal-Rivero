import './CartWidget.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Cart from './assets/cart-icon.png'
import { CartContext } from '../Context/CartContext'

const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)
    
    return (
        <Link to='/cart' className='CartWidget'>
            <img src={Cart} />
       </Link>
        
    )
}

export default CartWidget