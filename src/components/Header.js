import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import logo from './images.png';
import './Header.css';

export const Header = () => {
  const { cartList } = useCart();

  return (
    <header>
      <Link to='./' className="logo">
        <img src={logo} alt="logo" />
        <span className='title'>Cartify</span>
      </Link>
      <nav className="navigation">
        <NavLink to='./' className="link" end>Home</NavLink>
        <NavLink to='/cart' className="link">Cart</NavLink>
      </nav>
      <Link to='./cart' className="link">
        <span className='cart'>Cart: {cartList.length}</span>
      </Link>
    </header>
  );
};
