import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={classes.content}>
        <img src='https://www.mellanox.com/sites/default/files/homepage/img/homepage-tls-banner.jpg'/>
        <div>
          ava + description
        </div>
        <MyPosts />
      </div>
    )
}

export default Profile;