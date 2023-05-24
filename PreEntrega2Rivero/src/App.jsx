import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import { CartProvider } from '../src/components/Context/CartContext'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartContainer from '../src/components/CartContainer/CartContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
    <CartProvider>
      <BrowserRouter>    
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer />}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={< CartContainer />} />
            <Route path='#' element={<h1>404 NOT FOUND</h1>}/>
          </Routes>

      </BrowserRouter>
    </CartProvider>
    </div>
  )
}

export default App