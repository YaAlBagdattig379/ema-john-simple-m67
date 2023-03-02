import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    // console.log(user?.email)
    const hanldeSignOut = () =>{
        signOut(auth);
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                <span style={{color:'yellow',margin:'1px 3px'}}>{user?.email}</span>
                {
                user? 
                <button onClick={hanldeSignOut}>Sign Out</button>
                    :
                <Link to="/login">Login</Link>
                }
            </div>
        </nav>
    );
};

export default Header;