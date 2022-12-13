import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsersTC } from '../../../store/reducers/thunkCreators/usersThunkCreator';
import { setPageSelect } from '../../../store/reducers/usersSlice';
import {
  getCountItems,
  getSelectPage,
  getTotalCount,
} from '../../../store/selectors/usersSelectors';
import { v4 } from 'uuid';

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
    dispatch(setPageSelect(pageNumber));
    dispatch(getUsersTC(pageNumber, countItems));
  };

  for (let i = 0; i < pagesCount; i++) {
    pages.push(i + 1);
  }

  const paginationStart = pages.map((page: number) => {
    if (page < 10 && selectPage < 5) {
      return (
        <span
          key={v4()}
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
          key={v4()}
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
          key={v4()}
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
