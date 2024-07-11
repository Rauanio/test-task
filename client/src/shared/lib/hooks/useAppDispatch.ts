import { AppDispatch } from '@app/storeProvider/config/store';
import { useDispatch } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();
