import React from 'react';
// import { form, label, input } from 'rsuite'

class WatchForm extends React.Component {
    state = {  }
    render() { 
        return (
            <>
                <h2>
                    Add a watch
                </h2>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <br/>
                    <label>
                        Brand:
                        <input type="text" brand="brand" />
                    </label>
                    <br/>
                    <label>
                        Color:
                        <input type="text" color="color" />
                    </label>
                    <br/>
                    <label>
                        Image:
                        <input type="text" image_url="image_url" />
                    </label>
                    <br/>
                    <label>
                        Price:
                        <input type="number" price="price" />
                    </label>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
            </>
        );
    }
}
export default WatchForm;