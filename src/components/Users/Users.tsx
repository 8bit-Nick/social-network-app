import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../hooks/redux";
import { getUsersTC } from "../../redux/reducers/thunkCreators/usersThunkCreator";
import {
  getCountItems,
  getIsFetching,
  getSelectPage,
  getUsers,
} from "../../redux/selectors/usersSelectors";
import { IUser } from "../../types/users.interface";
import { Pagination } from "../common/Pagination/Pagination";
import Preloader from "../common/Preloader/Preloader";
import User from "./User/User";
import styles from "./Users.module.css";

const Users = () => {
  const dispatch = useAppDispatch();

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

export default Users;
