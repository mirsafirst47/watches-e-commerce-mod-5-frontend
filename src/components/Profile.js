import React, { Component } from 'react';

class Profile extends Component {

    render() { 
        console.log(this.props)
        return ( 
            <h1>Welcome to your profile</h1>
        );
    }
}

export default Profile;