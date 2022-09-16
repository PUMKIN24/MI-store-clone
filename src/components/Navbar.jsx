import React from 'react'
import '../styles/Navbar.css'
import {Link} from 'react-router-dom' 
import {AiOutlineSearch} from 'react-icons/ai'
import data from '../data/data.json'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='logo'>
            <Link to='/'><img className='logoImage' src={data.logo} alt="logo" /></Link>
        </div>
            <Link className='navlinks' to="/miphones">Mi Phones</Link>
            <Link className='navlinks' to="/redmiphones">Redmi Phones</Link>
            <Link className='navlinks' to="/tv">TV</Link>
            <Link className='navlinks' to="/laptops">Laptops</Link>
            <Link className='navlinks' to="/lifestyle">Fitness & Lifestyle</Link>
            <Link className='navlinks' to="/home">Home</Link>
            <Link className='navlinks' to="/radio">Radio</Link>
            <Link className='navlinks' to="/accessories">Accessories</Link>

            <div className='searchbox'>
               
                <input type="text" name='search' placeholder='Search Products' />
                <AiOutlineSearch className='searchIcon' />
            </div>
        
    </div>
  )
}

export default Navbar