import { useState } from 'react'
import './App.css'
import Body from './componets/Body'
import NavBar from './componets/NavBar'
import ItemListContainer from './componets/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './componets/ItemCount'



function App() {

  return (
    <>
    <NavBar />
    <ItemListContainer greeting='Bienvenidos'/>
    <ItemCount/>
    <Body />

    </>
  )
}

export default App
