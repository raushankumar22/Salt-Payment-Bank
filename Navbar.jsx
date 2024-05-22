import React, {useState} from 'react';
import logo from  '../images/sALT.jfif';

function Navbar() {
   const [nav,setnav] = useState(false);

   const changeBackground = () => {
       if(window.scrollY >= 50) {
           setnav(true);
       }else {
           setnav(false);   
       }
   }
   window.addEventListener('scroll', changeBackground);

  return (
      <nav className={nav ? 'nav active' : 'nav'}>
        <a href="#" className="logo">
            <img src={logo} alt="" />

        </a>
        <input type='checkbox' className='menu-btn' id='menu-btn'/>
        
        <label className='menu-icon' for='menu-btn'>
            <span classname='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><a href="#" className='active'>Home</a></li>
            <li><a href="https://blog.salt.pe/">About Us</a></li>
            <li><a href="https://app.salt.pe/signup/">Download</a></li>
            <li><a href="salt.pe/">Website</a></li>
        </ul>
      </nav>
  ) 
  
}

export default Navbar;
