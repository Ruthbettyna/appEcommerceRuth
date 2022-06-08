import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'

function ItemCount() {
    const [counter, setCounter] = useState (1);
    function agregar(){
        setCounter(counter + 1);
    }
    function quitar(){
        setCounter(counter - 1);
    }
    return (
        <>
    <div>
        <h2><Button variant="info" onClick={quitar}>Descontar</Button> {counter}<Button variant="info" onClick={agregar}>Sumar</Button></h2>
        <Button variant="warning">AGREGAR A LA CESTA</Button>
    </div>
        </>

    
    )
}

export default ItemCount