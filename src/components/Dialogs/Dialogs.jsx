import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={classes.messages}>
            <div className={classes.dialog}>{props.text}</div>
        </div>
    );
}

let dialogsData = [
    {id: '1', name: 'Dima'}, 
    {id: '2', name: 'Alena'}, 
    {id: '3', name: 'Mikl'}, 
    {id: '4', name: 'John'}
]

let dialogsElements = [ 
    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>,
    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>,
    <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>,
    <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
];

let messagesData = [
    {id: '1', message: 'Hi'}, 
    {id: '2', message: 'How is your day?'}, 
    {id: '3', message: 'How is your vacation?'},
    {id: '4', message: 'Have a nice day'}
]

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                { dialogsElements }

            </div>
            <div className={classes.messages}>
                {/* <Message text={messagesData[0].message}/>
                <Message text={messagesData[1].message}/>
                <Message text={messagesData[2].message}/>
                <Message text={messagesData[3].message}/> */}
            </div>
        </div>
    );
}

export default Dialogs;
