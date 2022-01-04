import React from 'react';
import classes from './InputPost.module.css';

type InputPropsType = {
  addPost: (textPost: string) => void
  textData: string
  changeText: (text: string) => void
}

const InputPost: React.FC<InputPropsType> = (props) => {

  const newPostElement = React.createRef<HTMLTextAreaElement>();

  const sendMessageBtn = () => {
    if (newPostElement.current) {
      let text = newPostElement.current.value;
      props.addPost(text);
      newPostElement.current.value = '';
    }
  };

  const onChangeHandler = () => {
    if (newPostElement.current) {
      let text = newPostElement.current.value;
      props.changeText(text);
    }
  };

  return (
    <div>
      <textarea ref={newPostElement}
                placeholder={'Type your message...'}
                className={classes.inputPost}
                value={props.textData}
                onChange={onChangeHandler}
      />
      <div>
        <button onClick={sendMessageBtn} className={classes.inputButton}>SEND MESSAGE</button>
      </div>
    </div>
  );
}

export default InputPost;