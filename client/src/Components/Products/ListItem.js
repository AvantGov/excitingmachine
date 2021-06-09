// * DEPENDS 
import React from 'react';


// * STYLES 
import '../../CSS/CSS__Products/listItem.css'



const ListItem = (props) => {
    console.log("list item props:", props)

    return(
        <div className='ListItem'>
            <div className='ListItem__imgContainer'>
                <img src={`${process.env.PUBLIC_URL}${props.props.image_path}`} alt='product' />
                <p className='ListItem__header'>{props.props.title}</p>
            </div>
        </div>
    )
};

export default ListItem