import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GetFetch } from '../GetFectch/GetFetch'
import ItemDetail from "../ItemDetail/ItemDetail"
import Input from "../Imput/Input"


export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState ({})
    const [loanding, setLoanding] = useState(true)

    const { id } = useParams()
    console.log(id)
    
    useEffect(() => {
        GetFetch(id)
        .then((resp) => setProducto(resp))
        .catch(err => console.log(err) )
        .finally(()=> setLoanding(false))
    }, [])

    return (
    <>
    <div>
    {loanding ? <h2>Cargando...</h2>
    :
    <ItemDetail producto={producto} />
    }
    </div>

    <Input />
    </>
    )
    
}