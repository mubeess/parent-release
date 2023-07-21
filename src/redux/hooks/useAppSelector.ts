import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { AppState } from '../root-reducer';

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
