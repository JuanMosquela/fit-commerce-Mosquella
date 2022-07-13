
import Item from "../Item/Item";
import Heading from "../heading/Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./simpleSlider.css"



const SimpleSlider = ({ data }) => {  

  
  
   const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows:true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
   
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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

    <>
      <Heading title='best seller products' />
    
      
      <Slider className="carrusell" {...settings}>
        {data.map(product => (
          <Item key={product.id} product={product} />
        ))}
      </Slider> 

      


    </>   
  )
}

export default SimpleSlider