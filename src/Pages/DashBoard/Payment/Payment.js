import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import CheckOutForm from './CheckOutForm';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useCart from '../../../hooks/useCart';


const stripePromise  = loadStripe("pk_test_51Np2d5AFU6oDKc6vgkEz08CpzDf7WMQX3H7Mh1kVxaNPwVTqlR7T0GZDBRk3tb5R1KWsmMsKBciDQd7JoasJezbi00u3vvLy9z");

const Payment = () => {
    
    const [cart] = useCart();
    const total = cart.reduce( ( sum, item) => sum + item.price, 0);
    const  totalamount = parseFloat(total).toFixed(2)

    return (
        <div className='w-full'>
            <SectionTitle Subheading="please proceed to Payment" heading="Payment"></SectionTitle>
            <h2 className='text-3xl'>Payment Here</h2>
            <Elements stripe={ stripePromise }>
            <CheckOutForm cart={cart} price={totalamount} ></CheckOutForm>
            </Elements>
            
        </div>
    );

};

export default Payment;