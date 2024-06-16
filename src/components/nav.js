import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <div className='navbar navbar-dark bg-dark navbar-expand-lg'>
            <div className='container'>
                <a className='navbar-brand'>Fatemeh codding</a>
                 <ul className='navbar-nav'>
                 <li className='nav-item'>
                    <Link to='/' className='nav-link'>Shop</Link>
                 </li>
                 <li className='nav-item'>
                    <Link to='/cart' className='nav-link'>
                    <FontAwesomeIcon icon={faShoppingCart} />
                    </Link>
                 </li>
                 </ul>
            </div>
        </div>
    );
}

export default Nav;