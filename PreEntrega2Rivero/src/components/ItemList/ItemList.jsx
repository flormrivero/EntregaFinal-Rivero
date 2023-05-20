import { memo } from "react"
import Item from "../Item/Item"

const ItemList = memo( ({productos}) => {

        return (
            <div style={{
                display: "flex",
                flexDirection: 'row',
                flexWrap: "wrap"
            }}>
            
                {productos.map( ({id, category, name, img, price, stock, description}) =>  (
                    <Item 
                        category={category}
                        id={id}
                        name={name} 
                        img={img} 
                        price={price}
                        stock={stock}
                        description={description}
                    />
                ))}
                
               
            </div>
        )
    }
) 
export default ItemList