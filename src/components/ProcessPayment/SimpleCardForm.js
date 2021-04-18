import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const SimpleCardForm = ({handlePayment}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);


    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
          
            return;
        }

        
        const cardElement = elements.getElement(CardElement);

        
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {
            setPaymentSuccess(paymentMethod.id)
            setPaymentError(null);
            handlePayment(paymentMethod.id)
        }
    };

    return (
        <div>
            {/* <form onSubmit={handleSubmit}> */}
                <CardElement />
                <button className="btn btn-primary" onClick={handleSubmit} type="submit" disabled={!stripe}>Pay & Place Order</button>
            {/* </form> */}
            {
                paymentError && <p>{paymentError}</p>
            }
            {
                paymentSuccess && <p>Payment Successful</p>
            }
        </div>
    );
};

export default SimpleCardForm;