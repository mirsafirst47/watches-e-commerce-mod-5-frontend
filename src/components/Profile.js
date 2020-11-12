import React from 'react';

const Profile = (props) => {
    return (
            props.username
            ? 
            <h1>{props.username}' s Profile</h1>
            :
            <h1> No User Found</h1> 
    );
}

export default Profile;