import React from 'react';
import classes from './InputPost.module.css';
import {addPostActionCreator, changeTextActionCreator} from "../../../../redux/profileReducer";

type InputPropsType = {
  dispatch: (action: any) => void
  textData: string
}

const InputPost: React.FC<InputPropsType> = React.memo((props) => {

  const newPostElement = React.createRef<HTMLTextAreaElement>();

  const sendMessageBtn = () => {
    if (newPostElement.current) {
      props.dispatch(addPostActionCreator());
      newPostElement.current.value = '';
    }
  };

  const onChangeHandler = () => {
    if (newPostElement.current) {
      let text = newPostElement.current.value;
      props.dispatch(changeTextActionCreator(text));
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
})

export default InputPost;