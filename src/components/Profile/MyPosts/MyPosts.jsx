import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postData = [
        {id: '1', message: 'Hi, how are you?', likeCount: '12'}, 
        {id: '2', message: 'It is my first post', likeCount: '15'} 
    ]

    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post message={postData[0].message} likeCount={postData[0].likeCount}/>
                <Post message={postData[1].message} likeCount={postData[1].likeCount}/>
                {/* вызываем функцию дважды с атрибутом message и благодаря props из Post.jsx данные подставляются в функцию */}
            </div>
        </div>
    );
}

export default MyPosts;
