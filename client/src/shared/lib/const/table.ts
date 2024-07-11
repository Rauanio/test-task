import { TableColumn } from '@shared/ui/Table/Table.types';

export const tableColumns: TableColumn[] = [
  {
    name: 'name',
    label: 'Название рассылки',
  },
  {
    name: 'createdAt',
    label: 'Дата рассылки',
    sortable: true,
  },
  {
    name: 'gift_quantity',
    label: 'Кол-во отправленных подарков',
  },
  {
    name: 'delete',
    label: 'Отмена рассылки',
  },
  {
    name: 'edit',
    label: 'Редактировать рассылку',
  },
];
