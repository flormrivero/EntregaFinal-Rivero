import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useCartContext } from "../Context/CartContext"


const ItemDetail = ({ data }) => {
    const [goToCart, setGoToCart] = useState(false)
    const { addItem } = useCartContext()

    const onAdd = (quantity) => {
        setGoToCart(true)
        addItem(data, quantity)
    }


    return (
        <div>
            <img src={data.img} alt={data.name} />
            <p>{data.name}</p>
            {
                goToCart
                    ? <Link to='/cart'>Terminar Compra</Link>
                    : <ItemCount initial={0} stock={10} onAdd={onAdd} />
            }
        </div>
    )
}

export default ItemDetail