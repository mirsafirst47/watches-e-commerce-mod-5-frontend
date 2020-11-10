import React from 'react';
import { toast } from 'react-toastify';

const Watch = (props) => {

    let {watch} = props

    // Any time that you define a function in a functional component
    // You need variable declaration
    
    const handleClick = (e) => {
        props.placingWatchOrder(watch.id)
        toast.success("Added to cart")
    }

    const handleImgClick = (e) => {
        console.log("image cilcked")
        fetch(`http://localhost:3000/watches/${watch.id}`)
            .then(response => response.json())
            .then(singularWatch => console.log(singularWatch));
    }

    return (
        <div className="col-sm-4" text-align='center' style={{ padding_top: '88px'}}>
            <img onClick={handleImgClick}  src={watch.image_url} style={{ display: 'inline-block', width: '85%'}} alt={watch.name}/>
            <h6>{watch.brand}</h6>
            <h4 >{watch.name}</h4>
            <h5>{watch.color}</h5>
            <br></br>
            <h5>${watch.price}</h5>
            <br></br>
            <button className="btn btn-info" onClick={handleClick} disabled={false} >Add to Cart</button>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default Watch;