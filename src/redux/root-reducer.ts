import { CombinedState, combineReducers, Reducer } from 'redux';
import { PersistPartial } from 'redux-persist/es/persistReducer';
import configurationReducer, { IAppConfigState } from './configuration/reducer';
import privilegeReducer, { IPrivilegeState } from './privileges/reducer';
import userReducer, { IAppUserState } from './users/reducer';

const rootReducer: Reducer<
  CombinedState<{
    privileges: IPrivilegeState & PersistPartial;
    user: IAppUserState & PersistPartial;
    configuration: IAppConfigState & PersistPartial;
  }>
> = combineReducers({
  privileges: privilegeReducer,
  user: userReducer,
  configuration: configurationReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
