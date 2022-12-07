import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../../hooks/redux';
import userLogo from '../../../img/userlogo.png';
import { getUsersTC } from '../../../store/reducers/thunkCreators/usersThunkCreator';
import {
  getCountItems,
  getIsFetching,
  getSelectPage,
  getUsers,
} from '../../../store/selectors/usersSelectors';
import { IUser } from '../../../types/userReducer.interface';
import { Pagination } from '../../common/Pagination/Pagination';
import Preloader from '../../common/Preloader/Preloader';
import User from './User/User';
import styles from './Users.module.css';

const Users = () => {
  const dispatch = useAppDispatch();

  const users = useSelector(getUsers);
  const selectPage = useSelector(getSelectPage);
  const countItems = useSelector(getCountItems);
  const isFetching = useSelector(getIsFetching);

  useEffect(() => {
    dispatch(getUsersTC(selectPage, countItems));
  }, []);

  const addUsers = users.map((el: IUser) => (
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
