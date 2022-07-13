import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Link, useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';


export default function MenuPopupState() {  

  const [categories, setCategories] = useState([]) 
 

  const myCategories = new Set()
  useEffect(() => {

    const dataBase = getFirestore();
    const products = collection(dataBase, 'products')

    getDocs(products).then((res) => {         
      const aux = res.docs.map(item => ({...item.data(), id: item.id}));      

      aux.map(product => {
        myCategories.add(product.category)      
        setCategories([...myCategories])      
        
      }) 
      
    })   
    
  }, [])
   

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <>
          <Button sx={{fontSize:'1.2rem', color:'#FFF' }} {...bindTrigger(popupState)}>
            Categorias
          </Button>
          <Menu {...bindMenu(popupState)}>             
            {
              categories.map(category => (                
                <li key={category}><Link  to={`/category/${category}`}><MenuItem sx={{ textTransform:'capitalize'}}>{category}</MenuItem></Link></li>
              ))
            }          
            
          </Menu>
        </>
      )}
    </PopupState>
  );
}
