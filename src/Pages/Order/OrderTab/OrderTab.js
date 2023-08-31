import React from 'react';
import FoodCard from '../../../Components/FoodCard/FoodCard';

const OrderTab = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 gap010 '>
        {
             items.map(item => <FoodCard
              key={DataTransferItemList._id}
              item={item}
             ></FoodCard>)
         }
        </div>
    );
};

export default OrderTab;