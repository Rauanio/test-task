import {
  pageSelector,
  perPageSelector,
  setPage,
  setPerPage,
} from '@entities/Filters';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { perPageItems } from '@shared/lib/const/pagination';
import { useAppSelector } from '@shared/lib/hooks/uesAppSelector';
import { PaginationResponse } from '@shared/types/Filters';
import { Pagination } from '@ui/Pagination/Pagination';
import { Select, SelectItem } from '@ui/Select/Select';
import cls from './TableCard.module.scss';

interface TableFooterProps {
  pagination: PaginationResponse;
}

export const TableFooter = ({ pagination }: TableFooterProps) => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(pageSelector);
  const perPage = useAppSelector(perPageSelector);

  const onChangePage = (page: number) => {
    dispatch(setPage(page));
  };

  const onChangePerPage = (selected: SelectItem) => {
    dispatch(setPerPage(selected.value as number));
    onChangePage(1);
  };

  return (
    <div className={cls.footer}>
      Страница {pagination.page} из {pagination.totalPages}
      <div className={cls.pagination}>
        <Select
          defaultValue={String(perPage)}
          onChange={onChangePerPage}
          items={perPageItems}
        />
        <Pagination
          totalPages={pagination.totalPages}
          currentPage={page}
          onPageChange={onChangePage}
          onPrev={() => onChangePage(page - 1)}
          onNext={() => onChangePage(page + 1)}
        />
      </div>
    </div>
  );
};
