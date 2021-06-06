// * DEPENDS 
import React from 'react';


// * STYLES 
import '../../CSS/CSS__Products/listItem.css'



const ListItem = (props) => {
    console.log("list item props:", props)

    return(
        <div className='ListItem'>
            <div className='ListItem__imgContainer'>
                <img src={props.props.image_path} alt='product' />
                
            </div>
        </div>
    )
};

export default ListItem