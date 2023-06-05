import { useCounter } from "../../hook/useCounter"

const ItemCount = ({ inital=0, stock=15, onAdd }) => {

    const { counter, handleSumar, handleRestar } = useCounter(inital, 1, stock)

    return (
        <center>
            
            <label> Productos seleccionados : {counter}</label>

            <br></br>

            <button onClick={handleRestar}>    - 1     </button> 

            <button onClick={handleSumar}>     + 1     </button> 

            <br></br>
        
            <button onClick={ ()=>{onAdd(counter)} }>Agregar al carrito</button>
        </center>
    )
}

export default ItemCount