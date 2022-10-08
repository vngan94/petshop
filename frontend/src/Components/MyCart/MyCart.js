import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
const MyCart = () => {
    const { cart, total, setTotal, addToCart } = useContext(CartContext)
    const handelOnClick = () => {
        setTotal(0)
        addToCart([])
    }
    return (
        <>
            {cart.map(item => {
                return (
                    <>
                        <div>{item.name} - {item.price}$</div>

                    </>
                )
            })}
            <div>Total: {total}$</div>
            <button onClick={handelOnClick}>Done</button>

        </>
    )
}
export default MyCart
