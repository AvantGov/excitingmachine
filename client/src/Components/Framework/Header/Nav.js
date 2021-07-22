// * DEPENDS.
import React from 'react';
import { Link } from 'react-router-dom';

//  * STYLES 
import '../../../CSS/CSS__Framework/CSS__Header/nav.css'

const Nav = () => {

    return(
        <div className='Nav'>
            <div className='Nav__listContainer'>
                <ul className='listContainer__navList'>
                    <li className='navList__item'>
                        <Link to='/' className='item__link'>HOME</Link>
                    </li>                    
                    <li className='navList__item'>
                        <Link to='/' className='item__link'>ABOUT</Link>
                    </li>
                    <li className='navList__item'>
                        <Link to='/' className='item__link'>PRODUCTS</Link>
                    </li>               
                </ul>    
            </div> 
        </div>
    )
};

export default Nav;

