//  * DEPENDS.
import React from 'react'
import { Link } from 'react-router-dom';


//  * STYLES.
import '../../../CSS/CSS__Framework/CSS__Footer/contact.css'

const Contact = () => {

    return(
        <div className='Contact'>
            <h1 className='Contact__header'>where to find us:</h1>

            <div className='Contact__container'>
                <ul className="container__unlist">
                    <li className='unlist__item'>
                        <Link className='item__link' to='/'>Email</Link>
                    </li>
                    
                    <li className='unlist__item'>
                        <Link to='/' className='item__link'>Reverb</Link>
                    </li>
                    
                    <li className='unlist__item'>
                        <Link to='/' className='item__link'>Facebook</Link>
                    </li>
                    
                    {/* TEMPLATE FOR OTHER LIST ITEMS: 
                     <li className='unlist__item'>
                        <Link to='/' className='item__link'>Placeholder</Link>
                    </li> */}
                </ul>
            </div> 
        </div>
    )
};

export default Contact;