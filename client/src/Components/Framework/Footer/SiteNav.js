// * DEPENDS.
import React from 'react';
import { Link } from 'react-router-dom';


// * STYLES
import '../../../CSS/CSS__Framework/CSS__Footer/sitenav.css'

const SiteNav = () => {

    return(
        <div className='SiteNav'>
            <Link to="/" className='SiteNav__Link'>Home</Link>
            <Link to="/" className='SiteNav__Link'>About</Link>
            <Link to="/" className='SiteNav__Link'>Product List</Link>
            <Link to="/" className='SiteNav__Link'>Contact Form</Link>
        </div>
    )
};


export default SiteNav;