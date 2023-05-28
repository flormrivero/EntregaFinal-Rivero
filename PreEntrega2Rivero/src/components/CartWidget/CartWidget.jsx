import './CartWidget.css'
import { Link } from 'react-router-dom'
import Cart from './assets/cart-icon.png'
import { useCartContext } from '../Context/CartContext'

const CartWidget = () => {
    const {totalProducts} = useCartContext()
    
    return (
        <Link to='/cart' className='CartWidget'>
            <img src={Cart} />
            <span className="cantidadCarrito">{totalProducts() || ''}</span>
       </Link>
        
    )
}

export default CartWidget