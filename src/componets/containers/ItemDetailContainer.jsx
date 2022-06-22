import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GetFetch } from '../GetFectch/GetFetch'
import ItemDetail from "../ItemDetail/ItemDetail"
import Input from "../Imput/Input"


export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState ({})

    const { id } = useParams()
    console.log(id)
    
    useEffect(() => {
        GetFetch(id)
        .then((resp) => setProducto(resp))
        .catch(err => console.log(err) )
    }, [])

    return (
    <>
    <ItemDetail producto={producto} />
    <Input />
    </>
    )
    
}