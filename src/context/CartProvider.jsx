import { createContext, useState } from "react"

export const CartContext = createContext()

const CartProvider = ({ children }) => {    

    const [cartItems, setCartItems] = useState([])

    const [showCart, setShowCart] = useState(false)

    const [quantity, setQuantity] = useState(0)    

    const [totalPrice, setTotalPrice] = useState(0)

    const addItem = (product) => {  

      const inCart = cartItems.find(item => {
        return item.id === product.id
      })      

      if(inCart){
        setCartItems(
          cartItems.map(item => {
            if(item.id === product.id){
              return { ...inCart, quantity: inCart.quantity + 1 }
            }else return item
          })
        )
      }else{
        setCartItems([...cartItems, {...product, quantity: 1}])
        
      } 

      setQuantity(quantity + 1)

      
      console.log(quantity)
      

      console.log(cartItems)  

  }

  const toggleCart = (state) => {
    setShowCart(state)
  }

  const onAdd = (stock) => {
    console.log(stock)
  }

  

    
    

    


  return (
    <CartContext.Provider value={{ addItem,toggleCart, quantity, showCart, cartItems, totalPrice, onAdd }}>
        {children}
    </CartContext.Provider>
  )
}
export default CartProvider