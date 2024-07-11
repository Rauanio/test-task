import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { tableColumns } from '@shared/lib/const/table';
import { useAppSelector } from '@shared/lib/hooks/uesAppSelector';
import { formatDate } from '@shared/lib/utils/formatDate';
import { declension } from '@shared/lib/utils/declension';
import { useFilters } from '@shared/lib/hooks/useFilters';
import { Table } from '@ui/Table/Table';
import { Button } from '@ui/Button/Button';
import { TableRow } from '@ui/Table/Table.types';
import { campaignSelector } from '../model/selectors/CampaignSelectors';
import { fetchCampaings } from '../model/thunks/fetchCampaigns';
import { deleteCampaings } from '../model/thunks/deleteCampaign';
import { TableFooter } from './TableFooter';
import { setPage, setSort, sortSelector } from '@entities/Filters';
import { UpdateCampaignModal } from '@features/updateCampaign';
import cls from './TableCard.module.scss';

export const TableCard = () => {
  const dispatch = useDispatch();
  const campaigns = useAppSelector(campaignSelector);
  const [openModal, setOpenModal] = useState(false);
  const [campaignId, setCampaignId] = useState(0);
  const sort = useAppSelector(sortSelector);
  const filters = useFilters();

  useEffect(() => {
    dispatch(fetchCampaings(filters));
  }, [dispatch, filters]);

  useEffect(() => {
    if (campaigns?.data.length === 0) {
      dispatch(setPage(1));
    }
  }, [dispatch, campaigns?.data.length]);

  const rows: TableRow[] =
    campaigns?.data?.map((item) => {
      return {
        ...item,
        gift_quantity: (
          <div>
            {item.gift_quantity}{' '}
            {declension(item.gift_quantity, ['штука', 'штуки', 'штук'])}
          </div>
        ),
        createdAt: formatDate(item.createdAt as string),
        delete: (
          <div className={cls.btn}>
            <Button
              variant="destructive"
              onClick={() => dispatch(deleteCampaings(item.id as number))}
            >
              Удалить
            </Button>
          </div>
        ),
        edit: (
          <div className={cls.btn}>
            <Button
              variant="outline"
              onClick={() => {
                setOpenModal(!openModal);
                setCampaignId(item.id as number);
              }}
            >
              Редактировать
            </Button>
          </div>
        ),
      };
    }) || [];

  const onSortDate = () => {
    const sortDirection = sort === 'asc' ? 'desc' : 'asc';
    dispatch(setSort(sortDirection));
  };

  if (!campaigns?.data) return <div>Данные отсутствуют</div>;

  return (
    <div className={cls.card}>
      {campaigns?.data?.length > 0 ? (
        <Table onSort={onSortDate} columns={tableColumns} rows={rows} />
      ) : (
        <div className={cls.empty}>Таблица пуста</div>
      )}
      {campaigns.data.length > 0 && (
        <TableFooter pagination={campaigns.pagination} />
      )}
      <UpdateCampaignModal
        campaignId={campaignId}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </div>
  );
};
