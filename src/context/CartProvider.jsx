import { createContext, useEffect, useState } from "react"

export const CartContext = createContext()

const CartProvider = ({ children }) => { 

    const [showCart, setShowCart] = useState(false)    

    const [cartItems, setCartItems] = useState(() => {
      try{
        const productsStorage = localStorage.getItem('cart')
        return productsStorage ? JSON.parse(productsStorage) : []

      }catch{
        return []
      }
    })   

    const [quantity, setQuantity] = useState(0)     

    const [totalPrice, setTotalPrice] = useState(0)    
    

    const addItem = (product, counter) => {       

      const inCart = cartItems.find(item => {
        return item.id === product.id
      })  
          

      if(inCart){
        setCartItems(
          cartItems.map(item => {
            console.log(item.amount)
            
            if(item.id === product.id){              
              return { ...inCart, amount:inCart.amount + counter }
              
            }else return item
          })           
        )
      }else{
        setCartItems([...cartItems, {...product, amount: counter, counter:1}])        
      }      
    }    

  const removeItem = (product) => {
    const removeProduct = cartItems.filter(item => item.id !== product.id)    

    if(removeProduct){
      setCartItems(removeProduct)          
    }
  } 

  const toggleCart = (state) => {
    setShowCart(state)
  }
  const clear = () => {
    setCartItems([]);
    setTotalPrice(0)
    setQuantity(0)
    localStorage.clear()

  };

  useEffect(() => { 
    localStorage.setItem('cart', JSON.stringify(cartItems)) 
      
    setQuantity(cartItems.reduce((previous,current) => previous + current.amount, 0)     
    ); 
    const total = cartItems.reduce((previous,current) => previous + current.amount * current.price, 0)
    setTotalPrice(total)  
  }, [cartItems]) 

      


  return (
    <CartContext.Provider value={{ addItem,toggleCart, showCart, cartItems, totalPrice, removeItem, quantity, clear}}>
        {children}
    </CartContext.Provider>
  )
}
export default CartProvider