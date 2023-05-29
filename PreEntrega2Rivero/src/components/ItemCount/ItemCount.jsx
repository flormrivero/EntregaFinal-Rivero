import { useCounter } from "../../hook/useCounter"

const ItemCount = ({ inital=0, stock=15, onAdd }) => {

    const { counter, handleSumar, handleRestar } = useCounter(inital, 1, stock)

    return (
        <center>
            
            <button onClick={handleSumar}>     + 1     </button> 
            
            <label>{counter}</label>
            <button onClick={handleRestar}>    - 1     </button> 
        
            <button onClick={ ()=>{onAdd(counter)} }>Agregar al carrito</button>
        </center>
    )
}

export default ItemCount