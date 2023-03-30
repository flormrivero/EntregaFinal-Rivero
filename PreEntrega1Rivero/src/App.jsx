import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
    </div>
  )
}

export default App
