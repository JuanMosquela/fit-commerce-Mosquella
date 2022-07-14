
import Slider from "react-slick";
import Item from "../Item/Item";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './simpleCarrusell.css'

const SimpleSlider = ({ data }) => {
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div className="carrusell-container">
        <h2>Recomended Products:</h2>
        <Slider {...settings}>
          {data.map(product => (
            <Item key={product.id} product={product} />
          ))}
        </Slider>
      </div>
    );
  
}

export default SimpleSlider

