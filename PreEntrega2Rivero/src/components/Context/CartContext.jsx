import { createContext, useContext, useState } from "react";

export const CartContex = createContext([])

export const useCartContext=()=>useContext(CartContex)

export const CartProvider = ({children})=>{
    //estados y funciones globales
    
    //listado carrito de compras
    const [cartList, setCartList] = useState([])

    const addToCart =(newProduct)=>{
        const index = cartList.findIndex(prod=>newProduct.id ===prod.id)

        if(index===-1){

            setCartList([
            ...cartList,
            newProduct
        ])
    } else{
        cartList[index].cantidad += newProduct.cantidad
        setCartList([...cartList])
    }
    }

    //cantidad total de productos
    const cantidadTotal = () => {
        return cartList.reduce(
            (total, producto) => total += producto.cantidad,0
            );
    };

    //precio total de la compra
    const totalCarrito = () => {
        return cartList.reduce(
          (total, producto) => total + producto.price * producto.cantidad,
          0
        );
      };


    //eliminar por item
    const borrarCantidad = (id) => {
        const index = cartList.findIndex((prod) => prod.id === id);
        if (index !== -1) {
          const nuevoCarritoLista = [...cartList];
          if (nuevoCarritoLista[index].cantidad > 1) {
                nuevoCarritoLista[index].cantidad -= 1; 
                setCartList(nuevoCarritoLista);
                    
            }
        }
    }
    //VaciarCarrito
    const vaciarCarrito=() =>{
        setCartList([])
    }

    return (
        <CartContex.Provider value={{
            cartList,
            addToCart,
            vaciarCarrito,
            totalCarrito,
            cantidadTotal,
            borrarCantidad
        }}>
            {children}
        </CartContex.Provider>
    )
}