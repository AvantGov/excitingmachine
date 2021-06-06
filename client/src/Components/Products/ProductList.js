// * DEPENDS + DATA 
import React from 'react';
import DataModel from '../../assets/datamodel__products.js';

// * COMPS 
import ListItem from './ListItem';

// * STYLES
import '../../CSS/CSS__Products/productList.css'

const ProductList = () => {


    return(
        <div className='ProductList'>
            i am the product list container
            {DataModel.map((item) => {
               return(
                    <ListItem props={item} key={item.title}/>
               )
            })}


        </div>
    )
};

export default ProductList;