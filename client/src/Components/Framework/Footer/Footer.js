//  * DEPENDS.
import React from 'react';

// * COMPONENTS
import Contact from './Contact';
import SiteNav from './SiteNav';

// * STYLES
import '../../../CSS/CSS__Framework/CSS__Footer/footer.css'

const Footer = () => {
    return(
        <div className='Footer'>
            <SiteNav />
            <Contact />
        </div>
    )
};


export default Footer;