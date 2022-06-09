import React, { useEffect, useState } from 'react'
import {Card,Button} from 'react-bootstrap'
import { item } from './Item'


function ItemList() {
const [productos, setProduct] = useState([])
const [loading,setLoading] = useState(true)

    useEffect(()=>{
        item()
        .then((resp)=> {
            setProduct(resp)
        })
        .catch(err => console(err))
        .finally(()=> setLoading(false))
    }, [])
    console.log(productos)
    return (
    <div>
        { loading ?
        <h2>Cargando...</h2>
        :
        productos.map(producto => <div key={producto.id}> 
                                    <Card  style={{ width: '8rem', float:'left'}}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                    <Card.Title>{producto.title}</Card.Title>
                                    <Card.Text>
                                    {producto.colors}:{producto.price}€
                                    </Card.Text>
                                    <Button variant="primary">Stock</Button>
                                    </Card.Body>
                                    </Card>
                                </div>
    )}
    </div>
    )
}

export default ItemList