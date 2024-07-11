import { ReactNode } from 'react';

export interface TableColumn {
  name: string;
  label: ReactNode;
  width?: number;
  sortable?: boolean;
  info?: ReactNode;
}

export interface TableRow extends Record<TableColumn['name'], ReactNode> {
  id?: number;
}
