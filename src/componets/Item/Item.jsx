import React, { memo } from 'react'
//import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Item = memo(
    ({ producto }) => {
    return (
        <div            
        className='col-md-4 p-1'>                    
        <div className="card w-100 mt-5" >
            <div className="card-header">
            {producto.title}
            </div>
            <div className="card-body">
                <img src={producto.img} alt='' className='w-50' />
                {producto.price}€                                                           
            </div>
            <div className="card-footer"> 
                <Link to={`/detalle/${producto.id}`} >
                    <button className="btn btn-outline-primary btn-block">
                        Detalle
                    </button>   
                </Link> 
            </div>
        </div>                                                                                                                            
        </div>
    )
}
)




export default Item