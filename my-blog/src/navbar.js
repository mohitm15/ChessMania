import React from 'react';
import {Link} from 'react-router-dom';


const Navbar =() => {

    
    return (
        <>
        <nav variants="pills">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/articles-list">Articles</Link>
                </li>
                <li>
                    <Link to="/FAQ">FAQ</Link>
                </li>
                <li>
                    <Link to="/lichess-profile">Li-Pro</Link>
                </li>
            </ul>
        </nav>
        
        </>
    )
}


export default Navbar;