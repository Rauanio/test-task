import { memo } from 'react';
import { Button } from '../Button/Button';
import { PageButton } from './PageButton';
import ArrowRight from '@shared/assets/icons/arrow-small-right.svg?react';
import ArrowLeft from '@shared/assets/icons/arrow-small-left.svg?react';
import cls from './Pagination.module.scss';

interface PaginationProps {
  onNext: () => void;
  onPrev: () => void;
  onPageChange: (pg: number) => void;
  currentPage: number;
  totalPages: number;
}

export const Pagination = memo(
  ({
    currentPage,
    onNext,
    onPageChange,
    onPrev,
    totalPages,
  }: PaginationProps) => {
    const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);

    if (totalPages < 2) {
      return null;
    }

    return (
      <div className={cls.wrapper}>
        <Button disabled={currentPage === 1} onClick={onPrev} variant="outline">
          <ArrowLeft />
        </Button>
        <div className={cls.pageBtn}>
          {pagesArray.map((pageNum) => (
            <PageButton
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              isActive={pageNum === currentPage}
            >
              {pageNum}
            </PageButton>
          ))}
        </div>
        <Button
          disabled={currentPage === totalPages}
          onClick={onNext}
          variant="outline"
        >
          <ArrowRight />
        </Button>
      </div>
    );
  }
);
