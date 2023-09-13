import React, { useEffect, useState } from 'react';

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
//import './CheckOutForm.css';

const CheckoutForm = ({ cart, price }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const [clientSecret, setClientSceret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');



    useEffect(() => {

        if(price >0 ){
            axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSceret(res.data.clientSecret);
            })
        }

        

    }, [price, axiosSecure])

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
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message)
        } else {
            setCardError('');
            // console.log('[PaymentMethod]', paymentMethod);
        }
        
        setProcessing(true);
      
        const {paymentIntent, error:confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'unknown',
                    name: user?.displayName || 'anonymous name'
                },
              },
            },
          );
          if (confirmError) {
                console.log(confirmError);
            }
            console.log('paymentIntent',paymentIntent);

            setProcessing(false);

            if(paymentIntent.status === 'succeeded'){

                setTransactionId(paymentIntent.id);

            // save information to the server 
            const payment  = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: cart.length,
                status:"Service Pending",
                cartItems: cart.map(item => item._id),
                menuItems: cart.map(item => item.menuItemId),
                itemNames: cart.map(item => item.name), 
            }
            axiosSecure.post('/payments', payment)
            .then(res => {
                console.log(res.data);
                if(res.data.InsertResult.insertedId){
                    // dusplay confirm
                }
            })


            }

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
                <button type="submit" className="btn btn-outline btn-secondary btn-sm mt-4" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <p className='text-red-700'>{cardError}</p>
            {transactionId && <p className='text-green-500'>Transaction Completed with TransactionId : {transactionId} </p>}
        </>
    );
};

export default CheckoutForm;





