//import { useContext } from "react";
//import { CartContext } from "../context/CartContext";
//import { Timestamp, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
//import { db } from "../../services/firebase/firebaseConfig";

//const { cart, total, clearCart } = useContext(CartContext)

//const createOrder = async ({ name, phone, email}) => {
//    setLoading(true)

//    try{
//        const objOrder = {
//            buyer: {
//                name, phone, email
//            },
//            items: cart,
//            total: total,
//            date: Timestamp.fromDate(new Date())
//        }
//        const batch = writeBatch(db)

//        const outOfStock = []

//        const ids = cart.map(prod => prod.id)

//        const productsRef = collection(db, '39660')
//
//        const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in',)))
//    }
