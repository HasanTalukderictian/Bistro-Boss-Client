import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItems from '../../Shared/MenuItems/MenuItems';

const PopularMenu = () => {
    
    const [menu, setMenu] = useState([]);

    useEffect(()=>{
        fetch("menu.json")
        .then(res=> res.json())
        .then(data=>{
            const popularItem = data.filter(item=> item.category ==="popular")
            setMenu(popularItem)
        })
    },[])


    return (
        <section className='mb-12'>
            <SectionTitle
            heading="From Our Menu"
            Subheading="Popular Items"
            >

            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-10 mb-4'>
                {
                    menu.map(item=> <MenuItems
                    key={item._id}
                    item={item}>
                    </MenuItems>)
                }
            </div>
        </section>
    );
};

export default PopularMenu; 