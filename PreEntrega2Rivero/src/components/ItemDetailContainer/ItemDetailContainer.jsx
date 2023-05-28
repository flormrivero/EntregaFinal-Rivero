import { useState, useEffect } from "react"
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'

import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

import { Loading } from "../Loading/Loading"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const { itemId } = useParams ()

    useEffect(() => {
        setIsLoading(true)

        const docRef = doc(db, '39660', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productsAdapted = { id: response.id, ...data}
                setProduct(productsAdapted)
        })
            .catch(error => {
                console.log(error)
        })
        .finally(()=> setIsLoading(false))
    }, [itemId])

    return (
        <>
            {isLoading ? 
                    <Loading />
                :
                    <ItemDetail {...product} />
            }
        </>
        
    ) 
}

export default ItemDetailContainer