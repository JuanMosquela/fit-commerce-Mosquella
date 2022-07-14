import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material'; 
import './item.css';
import {Link} from 'react-router-dom';


const Item = ({ product}) => {    
 

  return (
    <div>      
             
          <Link to={`/item/${product.id}`}>
            <figure className='card-item' >
              <img src={product.pictureURL} alt={product.title} />
                    
            </figure>              
          </Link>      

    </div>
  )
}
export default Item