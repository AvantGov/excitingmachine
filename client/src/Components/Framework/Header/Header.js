// * DEPENDS.
import React from 'react';


// * STYLES 
import '../../../CSS/CSS__Framework/CSS__Header/header.css'

//  * COMPONENTS 
import Nav from './Nav'

// * ASSETS
import logo from '../../../assets/imgs/eM_loading_logo.gif'

const Header = () => {

    return(
        <div className='Header'>
            <div className='Header__logoContainer'>
                <img 
                    className='logoContainer__logo' 
                    src={logo} 
                    alt="exciting machine logo" 
                />
            </div>
            <div className='Header__navContainer'>
                <Nav />
            </div>
            {/* TODO: when needed, a menu access icon can be added here, will need to implement redux logic to create menu state for sitewide access */}
        </div>
    )
};

export default Header;
