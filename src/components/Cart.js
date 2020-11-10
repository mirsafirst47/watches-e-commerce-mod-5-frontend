import React from 'react';
// import StripeComponent from './StripeComponent'
import { toast } from 'react-toastify';

const CurrentOrder = (props) => {
    let totalSum = props.current_order.transactions.reduce((agg, transaction) => {
        return agg + transaction.watch_price
    }, 0)


    const handleClick = (e) => {
        props.cartSwap()
        toast("Thanks for your order!")
    }

    let arrOfComps = props.current_order.transactions.map(transaction => {
        return(
            <p key={transaction.id}>
                {transaction.watch_name}
            </p>
        )
    })

    return (
        <div className="carts">
            <h2>Your Cart</h2>
            <ul id="cart-list">
                {arrOfComps}
            </ul>

            <h3>Total Amount: $<span id="total">{totalSum}</span></h3>
            <br></br>
            <br></br>
            <button onClick={handleClick} className="btn btn-warning" disabled={totalSum === 0}><i className="fa fa-shopping-cart" aria-hidden="true"></i> Checkout</button>
            <br></br>
            <br></br>
            <br></br>
            {/* <StripeComponent /> */}
        </div>
    )
}

export default CurrentOrder;
