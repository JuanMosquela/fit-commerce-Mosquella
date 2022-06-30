import Heading from "../heading/Heading";
import Item from "../Item/Item";
import './carrusel.css';
import { Link } from "react-router-dom";

const Carrusel = ({ data }) => {
  return (

    <div className="carrusel-container">
        <Heading title='Recomended products'/>
        <div className="carrusel-images">
          <div className="slider">
              {data.map(product => (
                <Link to={`/item/${product.id}`}>
                  <Item key={product.id} className='product-image' product={product} />
                </Link>
            ))}
          </div>
        </div>
    </div>
  )
}
export default Carrusel