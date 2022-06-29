import React, { memo } from 'react'
import Item from '../Item/Item'

const ItemList = memo(
    ({productos}) => {
        console.log('itemList')
        return (
            <div>
                {productos.map(producto => <Item key={producto.id} producto={producto}/>)}
            </div>
    )
    }
)

export default ItemList