import { useCartContext } from "../../Context/CartContext"
import { Link } from 'react-router-dom'
import ItemCart from "../ItemCart/ItemCart"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"



const Cart = () => {
    const { cart, totalPrice } = useCartContext()

    const defaultForm = { name: "", email: "", phone: "" };

    const [form, setForm] = useState(defaultForm);

    const changeHandler = (ev) => {
        setForm({ ...form, [ev.target.name]: ev.target.value });
    };

    const handleClick = () => {
        const db = getFirestore()
        const ordersCollection = collection(db, '39660')
        addDoc(ordersCollection, order)
            .then(({ id }) => { console.log(id); clear() })

    }

    const order = {
        buyer: {
            name: form.name,
            email: form.email,
            phone: form.phone
        },
        items: cart.map(product => ({ id: product.id, title: product.nombre, price: product.precio, quantity: product.quantity })),
        total: totalPrice(),
    }



    if (cart.length === 0) {
        return (
            <>
                <p>No hay productos en el carrito</p>
                <Link to='/'>Hacer compra</Link>
            </>
        )
    }
    return (
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p>Total: $ {totalPrice()}</p>
            <form >
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input
                        name="name"
                        id="name"
                        value={form.name}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={form.email}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Telefono</label>
                    <input
                        type="phone"
                        name="phone"
                        id="phone"
                        value={form.phone}
                        onChange={changeHandler}
                    />
                </div>

                <Link to="/"><button><h4>Volver al inicio</h4></button></Link>
            </form>

            <button onClick={handleClick}>Emitir Compra</button>
        </>
    )
}

export default Cart