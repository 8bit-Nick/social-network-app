import React from "react";

import userLogo from "../../../img/userlogo.png";
import { usersType } from "../../../redux/usersReducer";
import Preloader from "../../common/Preloader/Preloader";
import User from "./User/User";
import styles from "./Users.module.css";

type UsersPropsType = {
	users: usersType;
	selectPage: number;
	totalCount: number;
	countItems: number;
	follow: (userId: number) => void;
	unfollow: (userId: number) => void;
	onSelectPage: (pageNumber: number) => void;
	isFetching: boolean;
};

const Users: React.FC<UsersPropsType> = (props) => {
	// const pagesCount = Math.ceil(props.totalCount / props.countItems);
	const pagesCount = 11;
	const pages = [];

	for (let i = 0; i < pagesCount; i++) {
		pages.push(i + 1);
	}

	const addUsers = props.users.map((el) => (
		<User
			key={el.id}
			fullName={el.name}
			photoUrl={!el.photos.small ? userLogo : el.photos.small}
			userStatus={el.status}
			// userLocation={el.location}
			userId={el.id}
			follow={props.follow}
			unfollow={props.unfollow}
			followed={el.followed}
		/>
	));

	return (
		<div className={styles.users}>
			<div className={styles.pageWrapper}>
				{pages.map((page) => {
					return (
						<span
							onClick={() => props.onSelectPage(page)}
							className={
								props.selectPage === page
									? styles.page + " " + styles.pages
									: styles.pages
							}
						>
							{page}{" "}
						</span>
					);
				})}
			</div>

			{props.isFetching ? <Preloader /> : addUsers}
		</div>
	);
};

export default Users;
