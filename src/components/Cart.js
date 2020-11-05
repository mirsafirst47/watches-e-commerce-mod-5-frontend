import React from 'react';
// import PastOrder from './PastOrders';

const CurrentOrder = (props) => {
    let totalSum = props.current_order.transactions.reduce((agg, transaction) => {
        return agg + transaction.watch_price
    }, 0)


    const handleClick = (e) => {
        props.cartSwap()
    }

    let arrOfComps = props.current_order.transactions.map(transaction => {
        return(
            <p key={transaction.id}>
                {transaction.watch_image}
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
            <button onClick={handleClick} className="btn btn-warning"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Checkout</button>
        </div>
    )
}

export default CurrentOrder;
