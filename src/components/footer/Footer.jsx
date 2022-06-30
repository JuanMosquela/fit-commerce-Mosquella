import './footer.css';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
        <p>Physical Point // Juan Manuel Mosquella // todos los derechos reservados 2022</p>
        <div className="social-icons">
          <BsInstagram style={{ color:'#FFF', fontSize:'2rem', padding:'1rem'}}></BsInstagram>
          <BsWhatsapp style={{ color:'#FFF', fontSize:'2rem', padding:'1rem'}}></BsWhatsapp>
        </div>
    </footer>
  )
}
export default Footer