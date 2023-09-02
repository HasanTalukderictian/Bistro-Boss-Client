import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const FoodCard = ({item}) => {

    const {image, price, name,recipe} =item;

    const {user } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleAddToCart = item =>{

       console.log(item);
       console.log(user);

       if(user) 
       {
        fetch(`http://localhost:5000/carts`, {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(item)
      })
        .then(res => res.json())
        .then(data => {
           if(data.insertedId){
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500
            })
            
           }  
          
        })
       }
       else {
        Swal.fire({
          title: 'Please Login to Order Food',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Login Now'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login')
          }
        })
       }
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