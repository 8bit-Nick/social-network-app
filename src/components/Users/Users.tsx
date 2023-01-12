import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getCountItems,
  getIsFetching,
  getSelectPage,
  getUsers,
  getUsersTC,
  AppDispatch,
} from "reduxStore";
import { IUser } from "types";
import { Pagination, Preloader } from "components/common";
import { User } from "./User";

import styles from "./Users.module.css";

export const Users = () => {
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
        <Pagination stylePage={styles.page} stylePages={styles.pages} />
      </div>

      {isFetching ? <Preloader /> : addUsers}
    </div>
  );
};
