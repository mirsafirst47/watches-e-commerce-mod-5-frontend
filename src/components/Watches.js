import React, { Component } from 'react';
import Watch from './Watch';

class Watches extends Component {
    
    render() { 

        let arrayOfComponents = this.props.watches.map((singularWatch) => {
            return (
                <Watch
                    key={singularWatch.id}
                    watch={singularWatch}
                    placingWatchOrder={this.props.placingWatchOrder}
                />
            )
        })
        return ( 
            <div className="row" align='center' >
                { arrayOfComponents }
            </div>
        );
    }
}



export default Watches;

