import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

class StripeComponent extends React.Component { 

    render(){

        let onToken= (token) => {

            const charge = {
                token: token.id
            };

            fetch('http://localhost:3000/charges', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    charge: charge,
                    price: this.props.price
                })
            })
            .then(res => res.json())
            .then(data => {this.props.sendToPastOrders()});
            
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
                    <button className="btn btn-outline-warning" disabled={this.props.price === 0}><i className="fa fa-shopping-cart" aria-hidden="true"></i> Checkout</button>
                </StripeCheckout>
            </div>
        );
    }
};

export default StripeComponent