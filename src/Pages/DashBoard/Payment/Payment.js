import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import CheckOutForm from './CheckOutForm';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


const stripePromise  = loadStripe("pk_test_51Np2d5AFU6oDKc6vgkEz08CpzDf7WMQX3H7Mh1kVxaNPwVTqlR7T0GZDBRk3tb5R1KWsmMsKBciDQd7JoasJezbi00u3vvLy9z");

const Payment = () => {

    return (
        <div className='w-full'>
            <SectionTitle Subheading="please proceed to Payment" heading="Payment"></SectionTitle>
            <h2 className='text-3xl'>Payment Here</h2>
            <Elements stripe={ stripePromise }>
            <CheckOutForm></CheckOutForm>
            </Elements>
            
        </div>
    );

};

export default Payment;