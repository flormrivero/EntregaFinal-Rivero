import React, { useContext } from 'react'
import { useState } from 'react'
import { db } from '../../services/firebase/firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'
import { useCartContext } from "../Context/CartContext"



const Formulario = () => {
  const { cart, clear } = useCartContext();
  const [nombre, setName] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const handleSubmit = (event) => {
      event.preventDefault();

      //Validar que los campos esten completos
      if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
          setError("Por favor complete todos los campos");
          return;
      }

      //Validamos que los campos del email coincidan
      if (email !== emailConfirmacion) {
          setError("Los campos del email no coinciden");
          return;
      }

      //Creamos el objeto de la orden: 

      const orden = {
          items: cart.map((producto) => ({
              id: producto.id,
              nombre: producto.nombre,
              cantidad: producto.cantidad,
          })),
          total: cart.reduce((total, producto) => total + producto.precio * producto.cantidad, 0),
          nombre,
          apellido,
          telefono,
          email
      };

      //Guardamos la orden en la base de datos: 
      addDoc(collection(db, "Formulario"), orden)
          .then((docRef) => {
              setOrdenId(docRef.id);
              clear();
          })
          .catch((error) => {
              console.error("Error al crear la orden", error);
              setError("Se produjo un error al crear la orden, vuelva más tarde");
          })
  }
  
const {totalPrice} = useCartContext()

  return (
      <div>
          <h2>Finalizar compra</h2>
          <p>Precio $: {totalPrice()} </p>
          <form onSubmit={handleSubmit}>
              {cart.map((producto) => (
                  <div key={producto.id}>
                    
        </div>
              ))
              }
              <hr />
              <div>
                  <label htmlFor="">Nombre:  </label>
                  <input type="text" value={nombre} onChange={(e) => setName(e.target.value)} />
              </div>
              <br></br>
              <div>
                  <label htmlFor="">Apellido:  </label>
                  <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
              </div>
              <br></br>
              <div>
                  <label htmlFor="">Telefono:  </label>
                  <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
              </div>
              <br></br>
              <div>
                  <label htmlFor="">Email:  </label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <br></br>
              <div>
                  <label htmlFor="">Email Confirmación:  </label>
                  <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
              </div>
              {error && <p style={{ color: "red" }}> {error} </p>}
              <br></br>
              <button type='submit'> Comprar </button>
          </form>
          {
              ordenId && (
                  <strong>¡Gracias por tu compra! Tu número de orden es {ordenId} </strong>
              )
          }

      </div>
  )
}

export default Formulario 