import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import './App.css'
import Body from './componets/Body'
import NavBar from './componets/NavBar/NavBar'
import ItemListContainer from './componets/containers/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemDetailContainer } from './componets/containers/ItemDetailContainer';
import { Cart } from './componets/Cart/Cart';



function App() {

  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route index path="/" element={<ItemListContainer greeting='Bienvenidos'/>} />
          <Route path="/categoria/:categoriaId" element={<ItemListContainer greeting='Categoria'/>} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />

          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        <Body />
    </BrowserRouter>
  )
}

export default App
