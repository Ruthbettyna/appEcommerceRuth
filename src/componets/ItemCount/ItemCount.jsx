import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'


const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState (initial)
    function sumar(){
        if (count < stock) {
            setCount(count + 1)
        }
    function resta(){
        if (count > 1){
            setCount(count - 1)
            }
        }
        const agregar = () => {
            onAdd(count)
        }
    return (
        <>
    <div>
        <Button variant="info" onClick={resta}>Quitar</Button>{count}<Button variant="info" onClick={sumar}>Agregar</Button>
        <Button variant="warning" onClick={agregar}>AGREGAR A LA CESTA</Button>
    </div>
        </>

    
    )
}
}

export default ItemCount