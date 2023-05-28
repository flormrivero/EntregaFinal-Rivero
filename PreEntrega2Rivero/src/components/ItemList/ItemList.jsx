
import Item from "../Item/Item"

const ItemList = ({products}) => {
    
    return (
        <div style={{
            display: "block",
            flexDirection: 'row',
            flexWrap: "wrap"
        }}>
           
            {products.map( ({id ,img, name, price, category, description, stock}) =>  (
                <Item 
                    key={id} 
                    id={id}
                    foto={img} 
                    name={name} 
                    price={price}
                    categoria={category}
                    description={description}
                    stock={stock}
                />
            ))}
            
           
        </div>
    )
}
export default ItemList