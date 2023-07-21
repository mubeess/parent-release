import { IAppConfigState } from './reducer';
import configActionTypes from './types';

export const updateAppConfigState = (payload: IAppConfigState) => ({
  type: configActionTypes.UPDATE_APP_CONFIG_STATE,
  payload,
});
