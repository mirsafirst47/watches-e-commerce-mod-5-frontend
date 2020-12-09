import React from 'react';
import StripeComponent from './StripeComponent'
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
            <div key={transaction.id}> 
                
                {transaction.watch_name}
                <br></br>
                <button onClick={(e) => {props.deleteWatchTransaction(transaction)}} className="btn btn-danger"><i className="fa fa-trash" aria-hidden="true"></i></button>
            </div>
        )
    })

    return (<div className="cart">
        <h2> Your Cart</h2>
        <br></br>
        <ul id="order-list">
            { totalSum === 0
            ?
            <h6>Your cart is currently empty</h6>
            :
            arrOfComps
            }
        </ul>
        <br></br>
        <h3>Total Price: $<span id="total">{totalSum}</span>.00</h3>
        <br></br>
        <br></br>
        <StripeComponent 
            price={totalSum}
            sendToPastOrders={handleClick}
        />
    </div>
    )
}

export default CurrentOrder;
