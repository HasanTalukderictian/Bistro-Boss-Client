import React from 'react';
import MenuItems from '../../Shared/MenuItems/MenuItems';
import Cover from '../../Shared/Cover/Cover';


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
        </div>
    );
};

export default MenuCategory;