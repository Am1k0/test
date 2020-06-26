import React from 'react';
import classes from './MyPosts.module.css';
import Posts from './Post/Post';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
          <div>My Posts</div>
          <textarea></textarea>
          <button>Add Post</button>
          <div>
            New Posts
          </div>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
    )
}

export default MyPosts;