import React from 'react';
import classes from './InputPost.module.css';

const InputPost = () => {
  return (
    <div>
      <textarea placeholder={'Type youre message...'} className={classes.inputPost}></textarea>
      <div>
        <button className={classes.inputButton}>SEND MESSAGE</button>
      </div>
    </div>
  );
}

export default InputPost;