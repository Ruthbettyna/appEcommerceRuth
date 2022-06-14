
import './App.css'
import Body from './componets/Body'
import NavBar from './componets/NavBar/NavBar'
import ItemListContainer from './componets/containers/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './componets/ItemCount/ItemCount'
import { ItemDetailContainer } from './componets/containers/ItemDetailContainer';



function App() {

  const onAdd = (cant) => {
    console.log(cant)
  }

  return (
    <>
    <NavBar />
    <ItemListContainer greeting='Bienvenidos'/>
    <ItemCount initial={1} stock={8} onAdd={onAdd}/>
    <ItemDetailContainer />
    <Body />

    </>
  )
}

export default App
