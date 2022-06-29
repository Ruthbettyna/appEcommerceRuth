import { useCartContext } from "../../context/cartContext";


const CartItem = ({ product }) => {
const { DelItem } = useCartContext()
const { title, price, id } = product;
return (
    <div>
    <h4>{title}</h4>
    <button onClick={() => DelItem(id)}>borrar item</button>
    </div>
);
};

export default CartItem;