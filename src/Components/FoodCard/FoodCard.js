import React from 'react';

const FoodCard = ({item}) => {

    const {image, price, name,recipe} =item;
    const handleAddToCart = item =>{
       console.log(item);
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl my-3">
        <figure><img src={image} alt="Shoes" /></figure>
        <p className=' absolute right-0 mt-4 mr-4 px-4 bg-slate-900 text-white'>${price}</p>
        <div className="card-body flex flex-col items-center my-3">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button onClick={ () =>handleAddToCart(item)} className="btn btn-outline bg-slate-300 border-orange-400 btn-accent border-0 border-b-4  mt-4">Add to Cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;