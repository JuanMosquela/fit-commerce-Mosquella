import { useContext, useEffect } from 'react'
import './successPage.css'
import { runConfetti } from './Confetti'
import { CartContext } from '../../context/CartProvider'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';
import { BsFillBagCheckFill } from 'react-icons/bs'


const SuccessPage = () => {

    const {clear} = useContext(CartContext)     

    useEffect(() => {
        clear()
        runConfetti()    
      
    }, [])
    


  return (
    <div className='success'>
        <div className="success-content">
          <BsFillBagCheckFill className='success-icon' />
          <h1>Thank you for your order</h1>
          <Link to='/'>
            <Button                                    
              variant='contained'                                                             
                                                                                  
              sx={{ 
                                                                              
                  backgroundColor:'#333',
                  fontSize:'1.4rem',
                  '&:hover': {
                        background: "#faba42",
                  },
                  marginLeft:'0px !important',
      
              }}
              >
              Go Back
          </Button> 
        </Link>
        </div>
    </div>
  )
}
export default SuccessPage