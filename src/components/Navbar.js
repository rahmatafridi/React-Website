import React,{useState} from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
    const [click,setClick]= useState(false);
    const handleClick= () => setClick(!click)
    const closeMobileMeun = ()=> setClick(false);
  return (
    <>
    <nav className="navbar">
    <div  className="navbar-container">
        <Link to='/' className="navbar-logo">
            Website <i className='fab fa-typo3'></i>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
         <i className={click ? 'fas fa-times':'fas fa-bars'}></i>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMeun}>
                Home
            </Link>
        </li>
        <li className='nav-item'>
            <Link to='/services' className='nav-links' onClick={closeMobileMeun}>
                Services
            </Link>
        </li>
        <li className='nav-item'>
            <Link to='/products' className='nav-links' onClick={closeMobileMeun}>
                Products
            </Link>
        </li>
        </ul>
    </div>    
    </nav>  
    </>
  )
}

export default Navbar