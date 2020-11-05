import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, FlexboxGrid, Divider } from 'rsuite'


export default function WatchDetails(props) {

    let params = useParams()

    let [ watch, setWatch ] = useState({
        name: '',
        brand: '',
        image_url: '',
        price: '',
        color: 0
    })

    useEffect(() => {
        fetch(`http://localhost:3000/watches/${params.id}`)
        .then(resp => resp.json())
        .then(data => setWatch(data))
    }, [])

    const handleAddtoCart = (e) => {
        let newCart = props.cart.concat([watch])
        props.setCart(newCart)        
    }


    return(
        <div>
            <FlexboxGrid align="middle">
                <FlexboxGrid.Item colspan={12}>
                    <img src={watch.image_url} style={{ width: '100%' }} />
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={2}></FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={10} align='center'>
                    <h3>{watch.name} {watch.brand}</h3>
                    <Divider />
                    <h4>Color: {watch.color}</h4>
                    <h4>${watch.price}</h4>
                    <br />
                    <Button className="btn btn-primary" onClick={handleAddtoCart} >Add To Cart</Button>
                </FlexboxGrid.Item>
            </FlexboxGrid>
        </div>
    )
}