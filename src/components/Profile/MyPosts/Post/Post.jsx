import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {

    // debugger;

    // console.log(props.message);
    // здесь JS язык, так что можно не указывать {}

    return (
        <div className={classes.item}>
            <img src='https://navs.org/wp-content/uploads/bb-plugin/cache/bunny-landscape.jpg'></img>
            { props.message }
            <div>
                <span>{ props.likeCount }</span>
            </div>
        </div>
    // а здесь уже JSX язык то нужно использовать {}
    );
}

export default Post;
