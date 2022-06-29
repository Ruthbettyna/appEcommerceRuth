import { useCartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"



const Cart = () => {
    const {cart, vaciarCarrito, PriceTotal, IconCart} = useCartContext()
    return (
        <>
        <div>
        {cart.length < 1 ? (
        <p> carrito vacio</p>
        ):(
        cart.map((product) => <CartItem key={product.item.id} product={product.item}/>))}
        </div>
        <button onClick={vaciarCarrito}>Limpiar Carrito</button>
        <p>Precio total: {PriceTotal()}</p>
        {IconCart()< 1? <p></p> : <p>cantidad dentro del carrito {IconCart()}</p>}
        </>

    )
}

export default Cart
//