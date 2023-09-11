import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';



const stripePromise = loadStripe('process.env.REACT_APP_PAYMENT_KEY');

const Payment = () => {
    return (
        <div className='w-full'>
            <SectionTitle Subheading="please proceed to Payment" heading="Payment"></SectionTitle>
            <h2 className='text-3xl'>Payment Here</h2>
            <Elements stripe={stripePromise}>
            <CheckOutForm></CheckOutForm>
            </Elements>
            
        </div>
    );
};

export default Payment;