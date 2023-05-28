import {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'

import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import { Loading } from "../Loading/Loading"

const ItemListContainer = ({  }) => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const {categoryId} = useParams()
    
    useEffect(()=>{
        setIsLoading(true)

        const collectionRef = categoryId
        ? query(collection(db, '39660'), where('category', '==', categoryId))
        : collection(db, '39660')


        getDocs(collectionRef)
                .then(response => {
                    const productsAddapted = response.docs.map(doc => {
                        const data = doc.data()
                        return { id: doc.id, ...data}
                    })
                    setProducts(productsAddapted)
                })
                .catch( error => {
                    console.log(error)
                })
                .finally(()=> {
                    setIsLoading(false)
        })
    }, [categoryId])

    return (
        <>
            {isLoading ? 
                    <Loading />
                :
                    <ItemList {...products} />
            }
        </>
        
    )
}

export default ItemListContainer