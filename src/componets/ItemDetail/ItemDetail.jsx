import ItemCount from "../ItemCount/ItemCount"


function ItemDetail ({producto}) {

    const onAdd = (cant) => { 
            
        console.log(cant)
    }
        return(
            <div className="row">
            <div className="col-md-6 mt-5">
                <img src={producto.img} alt=""  className="w-50 m-5"/>
            </div>
            <div className="col-md-6 mt-5">
                <h2>Nombre: {producto.title}</h2>
                <h3>Precio: {producto.price}</h3>
                <h4>Detalle: {producto.colors}</h4>
            </div>
            <div className="row">
                <div className="col">
                    <ItemCount initial={1} stock={10} onAdd={onAdd} />
                </div>
            </div>
        </div>
        )
}

    export default ItemDetail