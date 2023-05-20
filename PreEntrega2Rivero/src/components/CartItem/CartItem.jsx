import React from 'react'

const CartItem = ({item, cantidad}) => {
  return (
    <div>
        <h4>{item.name}</h4>
        <p>Cantidad: {cantidad}</p>
        <p>Precio: $ {item.price}</p>
    </div>
  )
}

export default CartItem