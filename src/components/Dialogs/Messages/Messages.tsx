import React from 'react';
import styles from './Messages.module.css';
import MyTextarea from '../../common/MyTextarea/MyTextarea';

type MessagesPropsType = {
	messagesData: Array<{ id: number; message: string }>;
	addNewMessage: (newMessage: string) => void;
};
export const Messages: React.FC<MessagesPropsType> = (props) => {
	const messagesElements = props.messagesData.map((el) => (
		<div className={styles.messageItem} key={el.id}>
			{el.message}
		</div>
	));

	return (
		<div className={styles.container}>
			<div className={styles.messagesBlock}>{messagesElements}</div>
			<div>
				<MyTextarea submitForm={props.addNewMessage} />
			</div>
		</div>
	);
};
