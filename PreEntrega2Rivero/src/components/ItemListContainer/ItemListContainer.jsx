import {useState, useEffect} from 'react'

import {useParams} from 'react-router-dom'

import { getDocs, collection, query, where, getFirestore } from 'firebase/firestore'
import ItemList from '../ItemList/ItemList'
import { Loading } from "../Loading/Loading"

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const {categoria} = useParams()
    
    useEffect(()=>{
        const db     = getFirestore()
        const queryCollection = collection(db, '39660')

        if (!categoria) {  
            getDocs(queryCollection)
                .then(res => setProductos(  res.docs.map(producto => ( { id: producto.id, ...producto.data() } )) ))
                .catch( error => console.log(error) )
                .finally(()=> setIsLoading(false))
        }else{
            const queryCollectionFiltered = query(
                queryCollection, 
                where('category','==', categoria),
            
            )
    
            getDocs(queryCollectionFiltered)
                .then(res => setProductos(  res.docs.map(producto => ( { id: producto.id, ...producto.data() } )) ))
                .catch( error => console.log(error) )
                .finally(()=> setIsLoading(false))
        }
    }, [categoria])

    return (
        <>
            {isLoading ? 
                    <Loading />
                :
                    <ItemList productos={productos} />
            }
        </>
        
    )
}

export default ItemListContainer