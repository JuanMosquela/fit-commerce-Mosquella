import './navbar.css';
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from 'react';
import CartWidget from '../cartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [menu, setMenu] = useState(false)

  return (
    <>
      <header>
        <a className="logo" href="#inicio">PHYSICAL POINT</a>
        <nav>
            <ul className='container-links'>
              <Link to='/'>Home</Link>
              <Link to='/contact'>Contact</Link>
              <Link to='/faq'>FAQ</Link>
                           
            </ul>
        </nav>        
        <CartWidget />
    </header>
      <div className="menu" >
        <HiMenu className='bars' onClick={() => setMenu(true)} />
        {menu && (            
          <ul className='container-menu'>
            <div className="close">
              <HiX className='bars' onClick={() => setMenu(false)} />
            </div>
            <li className='menu-link'><Link to='/'>Home</Link></li>
            <li className='menu-link'><Link to='/'>Contact</Link></li>
            <li className='menu-link'><Link to='/'>FAQ</Link></li>
                           
          </ul>
        )}
      </div>
    </>
  )
}
export default Navbar