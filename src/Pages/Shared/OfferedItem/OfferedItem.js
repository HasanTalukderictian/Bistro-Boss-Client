import React from 'react';

const OfferedItem = ({item}) => {

    const {name,image,price,recipe} = item;
    return (
        <div className='h-100px w-255 px p-4 mb-2'>
            <div className='w-100px'>
            <img  style={{border :'20px'}}className='w-50' src={image} alt="" />
            </div>
        
            <div className='  text-center text-black'>
                <h3 className='text-3xl text-Black'>{name}</h3>
                <p className='text-orange-600'>{recipe}</p>
                <p className='text-yellow-600'> price: ${price}</p>
            </div>
            <div className='text-center'>
                <button  className="btn btn-secondary text-center">Add to Cart</button>
            </div>
        </div>
    );
};

export default OfferedItem;