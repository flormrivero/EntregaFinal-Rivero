import React from 'react'
import { useState } from 'react'
import { db } from '../Servise/Firebase/Config'
import { collection, addDoc } from 'firebase/firestore'
import './Formulario.css' 


const Formulario = () => {
    const [name, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setTelefono] = useState("");


  return (
    <form>
        <label htmlFor=''>Nombre y Apellido</label>
        <input type='text' value={name} onChange={(event) => setNombre (event.target.value)}/>

        <label htmlFor=''>Email</label>
        <input type='email' value={email} onChange={(event) => setEmail (event.target.value) }/>

        <label htmlFor=''> Telefono </label>
        <input type='text' value={phone} onChange={(event) => setTelefono (event.target.value)}/>
    </form>
  )
}

export default Formulario