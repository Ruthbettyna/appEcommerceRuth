import {React, useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { GetFetch } from '../GetFectch/GetFetch'

function ItemListContainer(props) {
    const style = {fontSize:'60px', backgroundColor:'pink', textAlign:'center', display:'flex', flexDirection:'row',flexWrap:'wrap'}
    const {greeting} = props
    const [productos, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        GetFetch()
            .then((resp)=>{
                setProduct(resp);
            })
            .catch((err) => console(err))
            .finally(()=> setLoading(false));
    }, []);
    return (
    <>
    <h2 style= {style}>{greeting}</h2>
    <div>
    {loading ? <p>Cargando...</p> : <ItemList productos={productos}/>}
    </div>
    </>
    )
}

export default ItemListContainer