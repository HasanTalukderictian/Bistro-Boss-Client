import React from 'react';
import MenuItems from '../../Shared/MenuItems/MenuItems';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';


const MenuCategory = ({items,title, details, img}) => {
    
   


    return (
        <div className='pt-8'>
             { title &&  <Cover img={img}
            title={title}
            details ={details}></Cover>
    }

            `  <div className='grid md:grid-cols-2 gap-10 mb-4 my-16'>
                {
                    items.map(item=> <MenuItems
                    key={item._id}
                    item={item}>
                    </MenuItems>)
                }
            </div>`
            <Link to={`/order/${title}`}>  <button className="btn btn-outline btn-accent border-0 border-b-4  mt-4">Order Now</button></Link>
        </div>
    );
};

export default MenuCategory;