import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

class StripeComponent extends React.Component { 

    render(){

        function onToken(token) {
            // save the token id to a variable to then use it in the body of the fetch.
            const charge = {
                token: token.id
            };

            // fetch to the charge controller which handles the Stripe API transaction.
            fetch('http://localhost:3000/charges', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    // Stripe API need at least a token and a price.
                    charge: charge,
                    // price: this.props.total.totalSum * 100
                })
            })
            .then(res => res.json())
            .then(data => console.log(data));
            
        };

        return (
            <div>
                <StripeCheckout
                    token={ onToken }
                    stripeKey={ process.env.REACT_APP_STRIPE_API_KEY }
                    // provide input for billing address and shipping address.
                    billingAddress
                    shippingAddress
                >
                    <button className="btn btn-outline-warning"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Checkout</button>
                </StripeCheckout>
            </div>
        );
    }
};

export default StripeComponent