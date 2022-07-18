import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CartContext } from '../../context/CartProvider';
import { useContext } from 'react';
import { useState } from 'react';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import Swal from 'sweetalert2';


const theme = createTheme();

export default function Checkout() {

    const [input, setInput] = useState({
        firstName:'',
        tel:'',
        email:''
        
    })

    const {cartItems, totalPrice, clear} = useContext(CartContext)    

    const handleChange = (e) => {
        setInput({...input, [e.target.name]: [e.target.value]})
        
    }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(input.firstName === "" || input.tel=== ""){
        return console.log('completa todo boludo')
    }

    const pedido = {
      buyer: input,
      pedido: cartItems,
      price: totalPrice,
      date: new Date().toDateString()
    }

    const dataBase = getFirestore()  
    
    const collectionRef = collection(dataBase, 'pedidos')
    addDoc(collectionRef, pedido).then(({ id }) => Swal.fire(
      'Gracias por tu compra!', 
      `Nº de orden ${id} <br><br> Por un total de $ ${pedido.price} <br><br> Fecha de compra : ${pedido.date}`, 
      'success')).then(() => clear())

      
    
    }

      

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" sx={{ minHeight:'100vh', display:'flex', justifyContent:'center', alignItems:'center', maxWidth:'460px'}}>
        <CssBaseline />
        <Box
          sx={{            
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',           
            
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#000' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Checkout
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField onChange={(e) => handleChange(e)}
              margin="normal"
              required
              fullWidth
              id="name"
              label="First Name"
              name="firstName"
              autoComplete="name"
              value={input.firstName}
              autoFocus
            />
            <TextField onChange={(e) => handleChange(e)}
              margin="normal"
              required
              fullWidth
              name="tel"
              label="Tel"
              type="number"
              id="tel"
              value={input.tel}
              autoComplete="current-cellphone"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="I'm not a robot"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Buy
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}