import {React, useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { GetFetch } from '../GetFectch/GetFetch'
import { useParams } from 'react-router-dom'

function ItemListContainer(props) {
    const style = {fontSize:'60px', backgroundColor:'pink', textAlign:'center', display:'flex', flexDirection:'row',flexWrap:'wrap'}
    const styles = {display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}
    const {greeting} = props
    const [productos, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoriaId } = useParams()
    console.log (categoriaId)

    useEffect(()=>{
        if (categoriaId) {
            GetFetch()
            .then((resp)=>{
                setProduct(resp.filter(products => products.categoria === categoriaId))
                setLoading(false)
            })
            .catch((err) => console(err))
        } else {
            GetFetch()
            .then((resp)=>{
                setProduct(resp);
                setLoading(false)
            })
            .catch((err) => console(err))
        }

    }, [categoriaId]);
    return (
    <>
    <h2 style= {style}>{greeting}</h2>
    <div style={styles}>
    {loading ? <p>Cargando...</p> : <ItemList productos={productos}/>}
    </div>
    </>
    )
}

export default ItemListContainer