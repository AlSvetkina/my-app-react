import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className='big-image' src='https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'></img>
            </div>
            <div className={classes.descriptionBlock}>
                ava
            </div>
        </div>
    ) ;
}

export default ProfileInfo;
