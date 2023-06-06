import { useCounter } from "../../hook/useCounter"
import { Link } from "react-router-dom"

const ItemCount = ({ inital=1, stock=15, onAdd }) => {

    const { counter, handleSumar, handleRestar } = useCounter(inital, 1, stock)

    return (
        <center>
            
            <label> Productos seleccionados : {counter}</label>

            <br></br>

            <button onClick={handleRestar}>    - 1     </button> 

            <button onClick={handleSumar}>     + 1     </button> 

            <br></br>
        
            <button onClick={ ()=>{onAdd(counter)} }><Link to='/Cart'>Agregar al carrito</Link></button>
        </center>
    )
}

export default ItemCount