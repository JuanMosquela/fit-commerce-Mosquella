import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import Swal from 'sweetalert2';
import { useFormik } from 'formik';
import { basicSchemas } from '../../schemas/basicSchemas';
import './checkout.css'
import { CartContext } from '../../context/CartProvider';
import { useContext } from 'react';



export default function Checkout() {

  const {cartItems, totalPrice} = useContext(CartContext)
  
  const onSubmit = ()=> {
    const pedido = {
        buyer: values,
        pedido: cartItems,
        price: totalPrice,
        date: new Date().toDateString()
    }

    const dataBase = getFirestore()  
    
    const collectionRef = collection(dataBase, 'pedidos')
    addDoc(collectionRef, pedido).then(({ id }) => Swal.fire(
    'Gracias por tu compra!', 
    `Nº de orden ${id} <br><br> Por un total de $ ${pedido.price} <br><br> Fecha de compra : ${pedido.date}`, 
    'success'))   
  }
  

  const { values, handleChange, handleSubmit, handleBlur, errors, touched } = useFormik({
    initialValues: { 
      firstName: '',
      lastName:'',
      email: ''
    },
    validationSchema: basicSchemas,
    onSubmit,    
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
          <Box  component="form" onSubmit={handleSubmit} noValidate sx={{ mt:'1rem' }} >
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
            
            <Link to='/success'>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor:'#333',
                fontSize:'1.4rem',
                '&:hover': {
                    background: "#faba42",
                }, }}
              >
                Buy
              </Button>
            </Link>
            <Grid container>
              <Grid item xs>
                <Link to='/notFound' variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to='/notFound' variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    
  );
}