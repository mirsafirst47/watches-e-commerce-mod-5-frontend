import React, { Component } from 'react';
import Search from './Search';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="main-contain-wrapper">
                <div className="video-container">
                    <h1 id="header" align="center">Shop For Your Next Timepiece</h1>
                    {/* <video 
                        className="slide-video" muted="" 
                        src="https://images.dynamixse.com/jacobandcocom/jacobandcocom_154470280.mp4" 
                        poster="https://image.dynamixse.com/crop/1600x900/webp.png-lossy-85.q80/https://dynamix-cdn.s3.amazonaws.com/jacobandcocom/jacobandcocom_679138278.jpg" autoPlay>
					</video>
                    <video 
                        className="slide-video" muted="" 
                        src="https://images.dynamixse.com/jacobandcocom/jacobandcocom_854304453.mp4" 
                        poster="https://image.dynamixse.com/crop/1600x900/webp.png-lossy-85.q80/https://dynamix-cdn.s3.amazonaws.com/jacobandcocom/jacobandcocom_734241450.jpg" autoPlay>
                    </video> */}
                    <video 
                        class="slide-video" muted="" 
                        src="https://images.dynamixse.com/jacobandcocom/jacobandcocom_772066658.mp4" 
                        poster="https://image.dynamixse.com/crop/1600x900/webp.png-lossy-85.q80/https://dynamix-cdn.s3.amazonaws.com/jacobandcocom/jacobandcocom_970529911.jpg" autoPlay>
                    </video>
                </div>
            </div>
        );
    }
}

export default Home;