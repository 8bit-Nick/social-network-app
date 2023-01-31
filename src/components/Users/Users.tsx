import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Pagination, Preloader } from "components/common";
import {
  AppDispatch,
  getCountItems,
  getIsFetching,
  getSelectPage,
  getUsers,
  getUsersTC,
} from "reduxStore";
import { IUser } from "types";
import { User } from "./User";

import styles from "./Users.module.css";

const Users = () => {
  const dispatch = useDispatch<AppDispatch>();

  const users = useSelector(getUsers);
  const selectPage = useSelector(getSelectPage);
  const countItems = useSelector(getCountItems);
  const isFetching = useSelector(getIsFetching);

  useEffect(() => {
    dispatch(getUsersTC(selectPage, countItems));
  }, []);

  const addUsers = users.map((user: IUser) => <User key={user.id} {...user} />);

  return (
    <div className={styles.users}>
      <div className={styles.pageWrapper}>
        <Pagination />
      </div>

      {isFetching ? <Preloader /> : addUsers}
    </div>
  );
};

export default Users;
