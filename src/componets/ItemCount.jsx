import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'

function ItemCount({stock='8'}) {
    const [counter, setCounter] = useState (0);
    function agregar(){
        setCounter(counter + 1)
        if (counter >= stock){
            return alert('no queda')
        } else return true
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