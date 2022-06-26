import BackgroundImg from "../../img/slide.jpg"
import './background.css';
import { Button } from "@mui/material";


const Background = () => {
  return (
    <div className="background">
        <img src={BackgroundImg} alt="" />
        <div className="header-content">
            <span>tu tienda online:</span>
            <h1>La casa del fitness</h1>
            <Button className="btn" variant="contained">Empezar a comprar</Button>
        </div>

    </div>
  )
}
export default Background