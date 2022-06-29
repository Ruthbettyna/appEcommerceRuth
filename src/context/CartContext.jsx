import { createContext, useState, useContext} from 'react'

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {

const [cart, setCart] = useState ([])

const addToCart = (item, cantidad) => {
    if (IsInCart(item.id)) {
        alert("ya esta en el carrito")
    } else {
    setCart([...cart,{ item, cantidad}])
    alert("Se agrego al carrito")
    }
}
const DelItem = (id) => {
    const items = cart.filter((product)=> product.item.id !== id)
    setCart(items)
}
const IconCart = () => {
    return cart.reduce((acum, i)=> acum + i.cantidad, 0)
}
const PriceTotal = () => {
    return cart.reduce((acum, i)=> acum + i.cantidad * i.item.price, 0)
}
const vaciarCarrito = () => {
        setCart([])
}
const IsInCart = (id) => {
    return cart && cart.some((i) => i.item.id === id)
}
    
    return (
        <CartContext.Provider
        value={{
            cart,
            addToCart,
            DelItem,
            IconCart,
            PriceTotal,
            vaciarCarrito
        }}
        >
            {children}
        </CartContext.Provider>
    )
}
