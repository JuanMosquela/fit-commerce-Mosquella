import './navbar.css';
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from 'react';
import CartWidget from '../cartWidget/CartWidget';

const Navbar = () => {

  const [menu, setMenu] = useState(false)

  return (
    <>
      <header>
        <a className="logo" href="#inicio">PHYSICAL POINT</a>
        <nav>
            <ul className='container-links'>
              {['Home', 'Products', 'FAQ'].map((link) => (
                  <li className='container-links-link' key={link}><a href={`#${link}`}>{link}</a></li>
              ))}                
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
        {['Home', 'Products', 'FAQ'].map((link) => (
          <li className='menu-link' key={link}><a href={`#${link}`}>{link}</a></li>
        ))}                
      </ul>
    )}
  </div>
    </>
  )
}
export default Navbar