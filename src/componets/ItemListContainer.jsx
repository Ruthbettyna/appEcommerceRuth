import React from 'react'

function ItemListContainer(props) {
    const style = {fontSize:'60px', backgroundColor:'pink', textAlign:'center'}
    const {greeting} = props
    return (
    <>
    <h2 style= {style}>{greeting}</h2>
    </>
    )
}

export default ItemListContainer