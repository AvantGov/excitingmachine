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
                        <Link to='/'>Something</Link>
                    </li>
                    
                    <li className='unlist__item'>
                        <Link to='/'>Something</Link>
                    </li>
                    
                    <li className='unlist__item'>
                        <Link to='/'>Something</Link>
                    </li>
                    
                    <li className='unlist__item'>
                        <Link to='/'>Something</Link>
                    </li>
                </ul>
            </div> 
        </div>
    )
};

export default Contact;