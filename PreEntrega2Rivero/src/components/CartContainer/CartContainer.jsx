import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { useCartContext } from '../Context/CartContext'
//import {validateForm } from "../Validacion/formValidation";


const CartContainer = () =>{
    const [dataForm, setDataForm] = useState({
        name:"",
        phone:"",
        email:""
    }) 
    const {cartList, vaciarCarrito, totalCarrito, borrarCantidad, cantidadTotal} = useCartContext()

    const generarOrden=(evt)=>{
        evt.preventDefault()
        const order = {}
        order.buyer=dataForm
        order.items=cartList.map(({name, id, price})=>({id, name, price}))
        order.total=totalCarrito()

        const db = getFirestore()
        const ordersCollection=collection(db, "orders")

        addDoc(ordersCollection, order)
        .then(resp=>console.log(resp))
    }

    const handleOnChange = (evt)=>{
        console.log('nombre del input',evt.target.name)
        console.log('valor del input',evt.target.value)
        setDataForm({
            ...dataForm,
            [evt.target.name]: evt.target.value
        })
        } 
    
    if (cantidadTotal() === 0 ) {
        return(
            <div>
                <h1 >No hay productos en el carrito</h1>
                <Link to='/'>Realizar Compra</Link>
            </div>
        )}
    return(
        
        <div>
            {cartList.map((prod)=>(
                <div>
                    <img src={prod.img} alt="imagen" key="cart-container"/>
                    <label>Precio:{prod.price} - Cantidad:{prod.cantidad} </label>                           
                    <button onClick={() => borrarCantidad(prod.id)} > X </button>  
                    
                </div>
            ) ) }

                <div className="cartTotal">
                        <h3>Total a pagar: $ { totalCarrito() } </h3>
                </div>
            <button onClick={vaciarCarrito}>Vaciar carrito</button>  

             <form onSubmit={generarOrden}>
            <input 
                    type='text' 
                    name="name" 
                    onChange={handleOnChange}
                    value={dataForm.name} 
                    placeholder="ingrese el nombre" 
                /> 

                <input 
                    type='text' 
                    name="phone" 
                    onChange={handleOnChange}
                    value={dataForm.phone} 
                    placeholder="ingrese el tel " 
                /> 
                <input 
                    type='text' 
                    name="email" 
                    onChange={handleOnChange}
                    value={dataForm.email} 
                    placeholder="ingrese el email" 
                /> 
 
                <button>Generar orden</button> 
               
                </form>
            </div>    
    )}
    export default CartContainer