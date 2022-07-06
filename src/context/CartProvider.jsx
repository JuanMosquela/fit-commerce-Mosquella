import { createContext, useState } from "react"

export const CartContext = createContext()

const CartProvider = ({ children }) => {    

    const [cartItems, setCartItems] = useState([])

    const [showCart, setShowCart] = useState(false)

    const [quantity, setQuantity] = useState(0)    

    const [totalPrice, setTotalPrice] = useState(0)

    const addItem = (product, count) => {      

      const inCart = cartItems.find(item => {
        return item.id === product.id
      })      

      if(inCart){
        setCartItems(
          cartItems.map(item => {
            if(item.id === product.id){
              return { ...inCart, amount: inCart.amount + 1 }
            }else return item
          })
        )
      }else{
        setCartItems([...cartItems, {...product, amount: 1}])
        
      }   

    setQuantity(quantity + count) 
  }

  const toggleCart = (state) => {
    setShowCart(state)
  }

  const onAdd = (quantity) => {
    console.log(quantity)
  }

  const removeItem = (product) => {
    const removeProduct = cartItems.filter(item => item.id !== product.id)

    if(removeProduct){
      setCartItems(removeProduct)

      
    }

  }

  

  

    
    

    


  return (
    <CartContext.Provider value={{ addItem,toggleCart, quantity, showCart, cartItems, totalPrice, onAdd, removeItem }}>
        {children}
    </CartContext.Provider>
  )
}
export default CartProvider