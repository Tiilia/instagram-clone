//rfce -> racourcis mise en page
import React from 'react';
import './Post.css';
import { Avatar } from '@mui/material';

function Post() {
  return (
    <div className='post'>
        {/* header -> avatar + username */}
        <div className="post__header">
            <Avatar
                className='post__avatar'
                alt=''
                src='https://picsum.photos/200'
            />
            <h3>Username</h3>

        </div>
        
        {/* image */}
        <img
            className='post__image' 
            src="https://picsum.photos/1000" 
            alt="" />

        {/* username + caption */}
        <h4 className='post__text'><strong>Username</strong> caption</h4>
    </div>
  )
}

export default Post