import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  BasicSchoolInformationDto,
  BasicSchoolInformationResponse,
  TermDto,
} from '@safsims/generated';
import { persistReducer } from 'redux-persist';

import configActionTypes from './types';

export interface IAppConfigState {
  schoolInfo?: BasicSchoolInformationResponse;
  selectedSchool?: BasicSchoolInformationDto;
  currentTerm?: TermDto;
}

const INITIAL_STATE: IAppConfigState = {
  schoolInfo: undefined,
  selectedSchool: undefined,
};
interface actionParams {
  type: configActionTypes;
  payload: any;
}

function configurationReducer(
  state: IAppConfigState = INITIAL_STATE,
  { type, payload }: actionParams,
) {
  switch (type) {
    case configActionTypes.UPDATE_APP_CONFIG_STATE:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
}

const persistConfig = {
  key: 'configuration',
  storage: AsyncStorage,
  blacklist: ['error', 'isLoading', 'loading'],
};

export default persistReducer(persistConfig, configurationReducer);
