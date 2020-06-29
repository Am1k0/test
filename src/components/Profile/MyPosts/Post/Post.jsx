import React from 'react';
import classes from './Post.module.css';


const Post = (props) => {
    return (
            <div className={classes.item}>
              <div>
                <img src='https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697'/>
                {props.message}
              </div>
              <div>
                <span>Like</span>
                {props.like}
              </div>
            </div>
    )
}

export default Post;