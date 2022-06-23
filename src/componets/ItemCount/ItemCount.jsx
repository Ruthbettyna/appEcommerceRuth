import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


function ItemCount ({initial, stock, onAdd}) {
    const [count, setCount] = useState(initial)

    function suma() {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    function resta() {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const agregar = () => {
        onAdd(count)
    }

    return (
        <>
            {/* <center> */}
                <div className="container m-5 w-25 border rounded border-3" style={{ textAlign: 'center', background: 'pink'  }}>                   
                    <span className="alert alert-success w-100" >
                        { count }
                    </span>                   
                    <br />
                    <div className="mt-4">
                        <button onClick={suma} className='btn btn-dark w-50' > + </button> 
                        <button onClick={resta} className='btn btn-dark w-50' > - </button><br/>
                    </div>
                    <button onClick={agregar} className='btn btn-dark w-100'>agregar</button>
                </div>
            {/* </center> */}
        </>
    )
}

export default ItemCount