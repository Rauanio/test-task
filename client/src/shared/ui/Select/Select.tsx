import { Fragment, ReactNode } from 'react';
import { Listbox } from '@headlessui/react';
import cls from './Select.module.scss';
import ChevronDown from '@shared/assets/icons/chevron-down.svg?react';
import clsx from 'clsx';

export interface SelectItem {
  value: string | number;
  content: ReactNode;
}

export interface SelectProps {
  items: SelectItem[];
  value?: SelectItem | null;
  defaultValue?: string;
  onChange: (item: SelectItem) => void;
}

export const Select = (props: SelectProps) => {
  const { value, defaultValue, items, onChange } = props;

  return (
    <Listbox as="div" className={cls.select} value={value} onChange={onChange}>
      {({ open }) => (
        <>
          <Listbox.Button className={cls.button}>
            {value?.content || defaultValue}
            <ChevronDown />
          </Listbox.Button>
          {open && (
            <Listbox.Options className={cls.options}>
              {items?.map((item) => (
                <Listbox.Option key={item.value} value={item} as={Fragment}>
                  {({ active }) => (
                    <li className={clsx(cls.option, { [cls.active]: active })}>
                      {item.content}
                    </li>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          )}
        </>
      )}
    </Listbox>
  );
};
