import React from 'react'
import { Card, Button } from "react-bootstrap";

function Item({ producto }) {
    return (
    <div>
        <Card  style={{ width: '8rem', float:'left'}}>
            <Card.Img variant="top" src={producto.img}/>
                <Card.Body>
                    <Card.Title>{producto.title}</Card.Title>
                        <Card.Text>
                            {producto.colors}:{producto.price}€
                        </Card.Text>
                        <Button variant="primary">Stock</Button>
                    </Card.Body>
                </Card>
    </div>
    )
}

export default Item