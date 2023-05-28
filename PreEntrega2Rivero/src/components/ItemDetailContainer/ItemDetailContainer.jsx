import { useState, useEffect } from "react"
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const { itemId } = useParams ();
    const getItem = async () => {
        try{
            const result = await getDoc(doc(db, '39660', itemId))
            setProduct(result.data())
        }catch(error){
            console.log(error);
        }
    }
    useEffect(() => {
        getItem();
    }, [product]);

    return (
        <React.Fragment>
            <ItemDetail item={product} id={itemId}></ItemDetail>
        </React.Fragment>
        
    ) 
}

export default ItemDetailContainer