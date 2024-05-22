import React from 'react';
import Navbar from './Navbar';
 

function Header() {
  return <div id = 'main'>
      <Navbar/>
      <div className='name'>
          <h1><span>Welcome to the </span> New Genration of <span>Banking </span></h1>
           <h3 className='details'>Not your average banking experience</h3>
           {/* <a href="#" className='cv-btn'>Download</a> */}
      </div>
      
  </div>;
}

export default Header;
