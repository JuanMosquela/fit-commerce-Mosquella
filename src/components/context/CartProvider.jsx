import { ClassNames } from "@emotion/react"
import { ConstructionOutlined } from "@mui/icons-material"
import { createContext, useState } from "react"

export const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([])

    const [cart, setCart] = useState(false)

    const [quantity, setquantity] = useState(0)

    const [totalItems, setTotalItems] = useState(0)

    const [totalPrice, setTotalPrice] = useState(0)

    const addItem = (details) => {
        
        setCartItems([...cartItems, details])
        
        if(cartItems.find(item => (
            item.id === details.id
        ))){
            setTotalItems(totalItems + 1 )

        }else{
            setquantity(quantity + 1)

        }
        

           
        
             

    }

     const toggleCart = (state) => {
        setCart(state)
     }

    // const removeItemId = () => {

    // }

    // const clearCart = () => {

    // }

    // const isInCart = () => {

    // }


  return (
    <CartContext.Provider value={{ addItem, quantity, cart, toggleCart, cartItems, totalItems }}>
        {children}
    </CartContext.Provider>
  )
}
export default CartProvider