import { TableColumn, TableRow } from './Table.types';
import cls from './Table.module.scss';
import { Button } from '../Button/Button';
import ChevronIcon from '@shared/assets/icons/chevron-up-down.svg?react';

interface TableProps {
  columns: TableColumn[];
  rows: TableRow[];
  onSort?: () => void;
}

export const Table = ({ columns, rows, onSort }: TableProps) => {
  return (
    <div className={cls.table_wrapper}>
      <table className={cls.table}>
        <thead className={cls.table__header}>
          <tr>
            {columns.map((col) => (
              <th
                key={col.name}
                className={cls.table__header__items}
                style={{ width: col.width }}
              >
                <div className={cls.sort}>
                  {col.label}
                  {col.info}
                  {col.sortable && (
                    <Button variant="ghost" onClick={onSort}>
                      <ChevronIcon />
                    </Button>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              {columns.map((col) => (
                <td key={col.name} className={cls.items}>
                  {row[col.name]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
