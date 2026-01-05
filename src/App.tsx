import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home.tsx'
import ProductDetail from './components/ProductDetail.tsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<ProductDetail />} />
    </Routes>
  )
}

export default App
