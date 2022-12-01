import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getCountItems,
  getSelectPage,
  getTotalCount,
} from '../../../redux/selectors/usersSelectors';
import { getUsersTC, setPageSelectAC } from '../../../redux/usersReducer';

interface IPagination {
  stylePage: string;
  stylePages: string;
}

export const Pagination: FC<IPagination> = (props) => {
  const dispatch = useDispatch();

  const totalCount = useSelector(getTotalCount);
  const countItems = useSelector(getCountItems);
  const selectPage = useSelector(getSelectPage);

  const pagesCount = Math.ceil(totalCount / countItems);
  const pages: number[] = [];

  const onSelectPage = (pageNumber: number) => {
    dispatch(setPageSelectAC(pageNumber));
    dispatch(getUsersTC(pageNumber, countItems));
  };

  for (let i = 0; i < pagesCount; i++) {
    pages.push(i + 1);
  }

  const paginationStart = pages.map((page: number) => {
    if (page < 10 && selectPage < 5) {
      return (
        <span
          onClick={() => onSelectPage(page)}
          className={
            selectPage === page
              ? props.stylePage + ' ' + props.stylePages
              : props.stylePages
          }
        >
          {page}
        </span>
      );
    } else if (page > selectPage - 5 && page < selectPage + 5) {
      return (
        <span
          onClick={() => onSelectPage(page)}
          className={
            selectPage === page
              ? props.stylePage + ' ' + props.stylePages
              : props.stylePages
          }
        >
          {page}
        </span>
      );
    }
  });

  const paginationEnd = pages.map((page: number) => {
    if (page === pages.length) {
      return (
        <span
          onClick={() => onSelectPage(page)}
          className={
            selectPage === page
              ? props.stylePage + ' ' + props.stylePages
              : props.stylePages
          }
        >
          {page}
        </span>
      );
    }
  });

  return (
    <div>
      {paginationStart}
      {'...'}
      {paginationEnd}
    </div>
  );
};
