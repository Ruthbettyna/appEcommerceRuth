import { useEffect, useState } from "react"
import { GetFetchOne } from '../GetFectch/GetFetch'
import ItemDetail from "../ItemDetail/ItemDetail"


export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState ({})
    useEffect(() => {
        GetFetchOne()
        .then((resp) => setProducto(resp))
        .catch(err => console.log(err) )
    }, [])

    return <ItemDetail producto={producto} />
}