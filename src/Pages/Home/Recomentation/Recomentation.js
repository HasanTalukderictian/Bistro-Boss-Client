import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItems from '../../Shared/MenuItems/MenuItems';
import OfferedItem from '../../Shared/OfferedItem/OfferedItem';

const Recomentation = () => {
    
    const [Offered, setOffered] = useState([]);

    useEffect(()=>{
        fetch("menu.json")
        .then(res=> res.json())
        .then(data => {
            const RecomentationItem = data.filter(item => item.category ==="offered")
            setOffered(RecomentationItem)

        })
    },[])

    return (
        <section className='mb-12'>
            <SectionTitle
            heading="From Our Menu"
            Subheading="Popular Items"
            >

            </SectionTitle>
            <div className=' w-100 grid md:grid-cols-2 gap-10 mb-4'>
                {
                    Offered.map(item=> <OfferedItem
                    key={item._id}
                    item={item}>
                    </OfferedItem>)
                }
            </div>
        </section>
    );
};

export default Recomentation;