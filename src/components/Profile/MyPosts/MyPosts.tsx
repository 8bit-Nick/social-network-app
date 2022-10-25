import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import InputPost from './InputPost/InputPost';
import MyTextarea from '../../common/MyTextarea/MyTextarea';

type MyPostsPropsType = {
	postsData: Array<{ id: number; post: string; likes: number }>;
	addPost: (newMessage: string) => void;
};

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
	// const postsElements = props.postsData.map((el) => (
	// 	<Post id={el.id} message={el.post} likesCount={el.likes} />
	// ));

	const postsElements = props.postsData.map((el) => {
		return (
			<div key={el.id}>
				{el.post}
				<div>like: {el.likes}</div>
			</div>
		);
	});

	return (
		<div className={styles.container}>
			<MyTextarea submitForm={props.addPost} />
			<div className={styles.postsElements}>{postsElements}</div>
		</div>
	);
};

export default MyPosts;
