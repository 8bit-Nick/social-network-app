import React from 'react';
import classes from './InputPost.module.css';

type InputPropsType = {
	textData: string;
	addPost: () => void;
	changeText: (text: string) => void;
};

const InputPost: React.FC<InputPropsType> = (props) => {
  const newPostElement = React.createRef<HTMLTextAreaElement>();

  const sendMessageBtn = () => {
    debugger;
    if (newPostElement.current) {
      props.addPost();
      newPostElement.current.value = '';
    }
  };

  const onChangeHandler = () => {
    if (newPostElement.current) {
      const text = newPostElement.current.value;
      console.log(text);
      props.changeText(text);
    }
  };

  return (
    <div>
      <textarea
        ref={newPostElement}
        placeholder={'Type your message...'}
        className={classes.inputPost}
        value={props.textData}
        onChange={onChangeHandler}
      />
      <div>
        <button onClick={sendMessageBtn} className={classes.inputButton}>
					SEND MESSAGE
        </button>
      </div>
    </div>
  );
};

export default InputPost;
