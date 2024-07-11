import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { Button } from '@ui/Button/Button';
import { Input } from '@ui/Input/Input';
import { setSearch } from '@entities/Filters';
import cls from './TableCard.module.scss';

export const TableHeader = ({
  setOpen,
}: {
  setOpen: (value: boolean) => void;
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className={cls.header}>
      <Input
        placeholder="Поиск"
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
      <Button className="button" onClick={() => setOpen(true)}>
        Создать Акцию
      </Button>
    </div>
  );
};
