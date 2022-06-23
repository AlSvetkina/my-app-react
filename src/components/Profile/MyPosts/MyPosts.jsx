import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    return (
        <div>
            { props.hey }
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
            <Post message='Hi, how are you?' likeCount='23' />
            <Post message='it is my first post' likeCount='56' />
            {/* вызываем функцию дважды с атрибутом message и благодаря props из Post.jsx данные подставляются в функцию */}
            </div>
        </div>
    );
}

export default MyPosts;
