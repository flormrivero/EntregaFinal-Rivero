import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { getFirestore, doc, getDoc } from 'firebase/firestore'


const ItemDetailContainer = () => {
    const [data, setData] = useState({})

    const { itemId } = useParams()

    useEffect(() => {
        const querydb = getFirestore()
        const queryDoc = doc(querydb, '39660', itemId)
        getDoc(queryDoc)
            .then(res => setData({ id: res.id, ...res.data() }))
    }, [itemId])


    return (
        <ItemDetail data={data} />
    )
}
export default ItemDetailContainer