
    const ItemDetail = ({producto}) => {
        return(
            <div className="row">
            <div className="col-md-6">
                <img src={producto.img} alt=""  className="w-100"/>
            </div>
            <div className="col-md-6">
                <h2>Nombre: {producto.title}</h2>
                <h3>Precio: {producto.price}</h3>
                <h4>Detalle: {producto.colors}</h4>
            </div>
    
        </div>
        )
    }

    export default ItemDetail