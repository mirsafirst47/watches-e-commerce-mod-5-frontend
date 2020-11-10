import React, { Component } from 'react';

class SingleOrder extends Component{

    state = {
        clicked: false
    }

    handleClick = (evt) => {
        this.setState(prevState => {
            return {
                clicked: !prevState.clicked
            }
        })
    }

    render(){
        let allPastOrders = this.props.past_order.transactions.map(watch_order => {
            return <li key={watch_order.id}>{watch_order.watch_name}</li> 
        })
        return(
            <>
                <p onClick={this.handleClick}>{this.props.past_order.timestamp}</p>
                { this.state.clicked
                    ?
                <ul>
                    {allPastOrders}
                </ul>
                    :
                null
                }
            </>
        )
    }
}

export default SingleOrder