import React from 'react';
import classes from './Post.module.css';

const Post = () => {
    return (
        <div className={classes.item}>
            <img src='https://navs.org/wp-content/uploads/bb-plugin/cache/bunny-landscape.jpg'></img>
            post 1
        </div>
    );
}

export default Post;
