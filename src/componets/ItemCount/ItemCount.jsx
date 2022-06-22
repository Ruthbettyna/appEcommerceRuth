import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


function ItemCount ({initial, stock, onAdd}) {
    const [count, setCount] = useState (initial)
    const [show,setShow] = useState(true)

    const sumar =() => {
        if (count < stock) {
            setCount(count + 1)
        };
    const resta = () => {
        if (count > 1){
            setCount(count - 1)
            }
        };
    const agregar = () => {
            onAdd(count)
            setShow(false)
        };

        if(show && stock > 0){
            return (
                <div>
                    <div className="ItemCount">
                        <button type='button' onClick={resta}> - </button>
                        <p className='cout'>Cantidad{count}</p>
                        <button type='button' onClick={sumar}> + </button>
                    </div>
                        <button onClick={agregar}> Añadir al carrito </button>
                </div>
            )
        }

        if(stock === 0){
            return(
                <p>No quedan! Elige otro modelo!</p>
            )
        }
        if (! show && stock>0){
            return (
                <Link to="/car">
                    <button>Vamos al carrito!</button>
                </Link>
            )
        }
}
}

export default ItemCount