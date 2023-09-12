import React, { useEffect, useState } from 'react';

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';

const CheckoutForm = ({ price }) => {

  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');
  const [axiosSecure] = useAxiosSecure();
  const {user} = useAuth();
  const [clientSecret, setClientSceret] = useState('');


  useEffect(()=>{
       
    axiosSecure.post('/create-payment-intent', {price})
    .then(res => {
        console.log(res.data.clientSecret);
        setClientSceret(res.data.clientSecret);
    })

  },[price, axiosSecure])

  const handleSubmit = async (event) => {
   
    event.preventDefault();

    if (!stripe || !elements) {
    
      return;
    }

   
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setCardError(error.message)
    } else {
        setCardError('');
      console.log('[PaymentMethod]', paymentMethod);
    }
    
   const {paymentIntent, error:confirmError} = stripe .confirmCardPayment(clientSecret, {
    payment_method: {
      card: card,
      billing_details: {
        email: user?.email || 'unknown',
        name: user?.displayName || 'anonymous name'
      },
    },
  })
   if(confirmError){
     console.log(confirmError);
   }
   console.log(paymentIntent);
 
  };

  return (
  <>
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" className="btn btn-outline btn-secondary btn-sm mt-4"  disabled={!stripe || !clientSecret}>
        Pay
      </button>
    </form>
    <p className='text-red-700'>{cardError}</p>
  </>
  );
};

export default CheckoutForm;





