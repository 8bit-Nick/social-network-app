import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import userLogo from '../../../img/userlogo.png';

import {
  getCountItems,
  getIsFetching,
  getSelectPage,
  getUsers,
} from '../../../redux/selectors/usersSelectors';
import { getUsersThunkCreator, userType } from '../../../redux/usersReducer';
import { Pagination } from '../../common/Pagination/Pagination';
import Preloader from '../../common/Preloader/Preloader';
import User from './User/User';
import styles from './Users.module.css';

const Users = () => {
  const dispatch = useDispatch();

  const users = useSelector(getUsers);
  const selectPage = useSelector(getSelectPage);
  const countItems = useSelector(getCountItems);
  const isFetching = useSelector(getIsFetching);

  useEffect(() => {
    dispatch(getUsersThunkCreator(selectPage, countItems));
  }, []);

  const addUsers = users.map((el: userType) => (
    <User
      key={el.id}
      fullName={el.name}
      photoUrl={!el.photos.small ? userLogo : el.photos.small}
      userStatus={el.status}
      userId={el.id}
      followed={el.followed}
    />
  ));

  return (
    <div className={styles.users}>
      <div className={styles.pageWrapper}>
        <Pagination stylePage={styles.page} stylePages={styles.pages} />
      </div>

      {isFetching ? <Preloader /> : addUsers}
    </div>
  );
};

export default Users;
