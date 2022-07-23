import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { useFormik } from 'formik';
import { basicSchemas } from '../../schemas/basicSchemas';
import './checkout.css'
import { CartContext } from '../../context/CartProvider';
import { useContext } from 'react';
import { useState } from 'react';
import { CircularProgress, LinearProgress } from '@mui/material';


export default function Checkout() {

  const {cartItems, totalPrice} = useContext(CartContext)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  
  const navigate = useNavigate()  
   
  
  const onSubmit = ()=> {
    
    const pedido = {
        buyer: values,
        pedido: cartItems,
        price: totalPrice,
        date: new Date().toDateString()
    }   

    if( Object.entries(errors).length > 0 || cartItems.length === 0 ){
      
      setError(true)         
      
    }else{

      setLoading(true)
      const dataBase = getFirestore()    
      const collectionRef = collection(dataBase, 'pedidos')    
      addDoc(collectionRef, pedido).then((res) => setLoading(false)).then((res) => navigate('/success')).then(res => setLoading(false)) 
    }    
  }  

  const { values, handleChange, handleSubmit, handleBlur, errors, touched, resetForm } = useFormik({
    initialValues: { 
      firstName: '',
      lastName:'',
      email: ''
    },
    validationSchema: basicSchemas,
    onSubmit    
  })   
 

  return (
    
      <Container component="main" sx={{ minHeight:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <CssBaseline />
        <Box
          sx={{            
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent:'center', 
            maxWidth:'800px'              
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#000' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Checkout
          </Typography>
          <form  component="form" onSubmit={handleSubmit} noValidate sx={{ mt:'1rem' }} >
            <TextField 
              onChange={handleChange}
              onBlur={handleBlur}
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              autoComplete="name"
              value={values.firstName}              
              inputProps={{style: {fontSize: 15, maxWidth:'800px'}}} 
              InputLabelProps={{style: {fontSize: 15}}}  
              
              className={ errors.firstName && touched.firstName ? 'input-error' : '' }          
              
            />
            {errors.firstName && touched.firstName && <span className='error'>{errors.firstName}</span>}
            <TextField 
            inputProps={{style: {fontSize: 15, maxWidth:'800px'}}} 
            InputLabelProps={{style: {fontSize: 15}}} 
              onChange={handleChange}
              onBlur={handleBlur}
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lastName"
              value={values.lastName} 
              className={ errors.lastName && touched.lastName ? 'input-error' : '' }             
              
            />
            {errors.lastName && touched.lastName && <span className='error'>{errors.lastName}</span>}
            <TextField 
            inputProps={{style: {fontSize: 15, maxWidth:'800px'}}} 
            InputLabelProps={{style: {fontSize: 15}}} 
              onChange={handleChange}
              onBlur={handleBlur}
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email"
              type="email"
              id="email"
              value={values.email}
              className={ errors.email && touched.email ? 'input-error' : '' }
              autoComplete="email"
            />
            {errors.email && touched.email && <span className='error'>{errors.email}</span>}           
            
            {loading ? 
              <Button
                onClick={() => onSubmit()} 
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor:'#333',
                fontSize:'1.4rem',
                '&:hover': {
                    background: "#333",
                }, }}
                
              >
                <Box>
                  <CircularProgress style={{'color': '#FFF'}} />
                </Box>
              </Button> :
              <Button
                onClick={() => onSubmit()} 
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor:'#333',
                fontSize:'1.4rem',
                '&:hover': {
                    background: "#333",
                }, }}
                >
                Submit
              </Button>
            }
            {error && <span className='error'>El carrito no puede estar vacio</span>}         
            
          </form>
        </Box>        
      </Container>    
  );
}