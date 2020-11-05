import React from 'react';

const Watch = (props) => {
    let {watch, token} = props

    // Any time that you define a function in a functional component
    // You need variable declaration
    
    const handleClick = (e) => {
        props.placingWatchOrder(watch.id)
    }

    const handleImgClick = (e) => {
        console.log("image cilcked")
    }


    
    return (
        <div className="watch" align='center'>
            <img onClick={handleImgClick} src={watch.image_url} style={{ display: 'inline-block', width: '33%'}} alt={watch.name}/>
            <h6 className="watch_description">
                {watch.brand}
            </h6>
            <h3 className="watch_title">{watch.name} - ${watch.price}</h3>
            <button className="btn btn-info" onClick={handleClick}>Add to Cart</button>
        </div>
    )
}

export default Watch;