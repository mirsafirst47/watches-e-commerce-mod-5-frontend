import React, { Component } from 'react';
import { Panel} from 'rsuite';
import { Link } from 'react-router-dom';

class About extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <h1 className="about-header" >About Us</h1>
                <Panel bordered>
                <img data-src="https://image.dynamixse.com/crop/500x700/webp.q80.png-lossy-85/https://dynamix-cdn.s3.amazonaws.com/jacobandcocom/jacobandcocom_827756544.png" alt="" className="main-image js-lazy-load" src="https://image.dynamixse.com/crop/500x700/webp.q80.png-lossy-85/https://dynamix-cdn.s3.amazonaws.com/jacobandcocom/jacobandcocom_827756544.png" data-loaded="true"/>
                <h3> Redefining a timepiece </h3> 
                <p>The driving force for Jacob & Co. is creativity and uniqueness. The breadth of Jacob & Co.'s timepiece offering shows the brand's insatiable need to produce amazing pieces that the world has never seen before. In timepieces, this is exemplified by high complications like the Astronomia Collection, the Mystery Tourbillon, the Opera Godfather and the Twin Turbo Furious.</p>
                </Panel>
                <h2>Web Designer</h2>
                <br></br>
                <div>
                    <h4> Samir Triande </h4>
                    <a href="https://github.com/mirsafirst47">
                        <img src="https://www.pngkey.com/png/full/6-60527_coming-soon-profile-picture-coming-soon.png" width="200" height="200" className="center" alt="" ></img>
                    </a>
                
                </div>
            </div>
        
        )
    }
}

export default About;