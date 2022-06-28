import React from 'react';
import classes from './Message.module.css';

const Message = (props) => {
    return (
        <div className={classes.messages}>
            <div className={classes.dialog}>{props.text}</div>
        </div>
    );
}

export default Message;
