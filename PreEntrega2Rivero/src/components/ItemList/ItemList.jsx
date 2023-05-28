
import Item from "../Item/Item"

const ItemList = ({products}) => {
    
    return (
        <div style={{
            display: "flex",
            flexDirection: 'row',
            flexWrap: "wrap"
        }}>
           
            {products.map( ({id ,img, name, price, category}) =>  (
                <Item 
                    key={id} 
                    id={id}
                    foto={img} 
                    name={name} 
                    price={price}
                    categoria={category}
                />
            ))}
            
           
        </div>
    )
}
export default ItemList