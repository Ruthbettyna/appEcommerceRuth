import React from 'react'
import ItemList from './ItemList'

function ItemListContainer(props) {
    const style = {fontSize:'60px', backgroundColor:'pink', textAlign:'center', display:'flex', flexDirection:'row',flexWrap:'wrap'}
    const {greeting} = props
    return (
    <>
    <h2 style= {style}>{greeting}</h2>
    <div>
    <ItemList/>
    </div>
    </>
    )
}

export default ItemListContainer