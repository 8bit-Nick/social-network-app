import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";

import {
  AppDispatch,
  getCountItems,
  getSelectPage,
  getTotalCount,
  getUsersTC,
  setPageSelect,
} from "reduxStore";

import styles from "./Pagination.module.css";

export const Pagination = () => {
  const dispatch = useDispatch<AppDispatch>();

  const totalCount = useSelector(getTotalCount);
  const countItems = useSelector(getCountItems);
  const selectPage = useSelector(getSelectPage);

  const pagesCount = Math.ceil(totalCount / countItems);
  const pages: number[] = [];

  const onSelectPage = (pageNumber: number) => {
    dispatch(setPageSelect(pageNumber));
    dispatch(getUsersTC(pageNumber, countItems));
  };

  for (let i = 0; i < pagesCount; i++) {
    pages.push(i + 1);
  }

  const selectPageClassName = (page: number) => {
    return page === selectPage
      ? styles.selectPage.concat(" ", styles.pages)
      : styles.pages;
  };

  const pageSpan = (page: number) => {
    return (
      <span
        key={v4()}
        onClick={() => onSelectPage(page)}
        className={selectPageClassName(page)}
      >
        {page}
      </span>
    );
  };

  const paginationList = pages.map((page: number) => {
    if (page < 10 && selectPage < 5) {
      return pageSpan(page);
    } else if (page > selectPage - 5 && page < selectPage + 5) {
      return pageSpan(page);
    }
  });

  const showLeftButton = () => {
    return selectPage === 1 ? true : false;
  };
  const showRightButton = () => {
    return selectPage === pagesCount ? true : false;
  };

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.btn}
        onClick={() => onSelectPage(1)}
        disabled={showLeftButton()}
      >
        ❮❮
      </button>
      <div> {paginationList}</div>
      <button
        className={styles.btn}
        onClick={() => onSelectPage(pagesCount)}
        disabled={showRightButton()}
      >
        ❯❯
      </button>
    </div>
  );
};
