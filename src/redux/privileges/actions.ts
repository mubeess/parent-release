import { IPrivilegeState } from './reducer';
import privilegeActionTypes from './types';

export const confirmUserPrivileges = (type) => ({
  type,
});

export const verifyUserPrivileges = (roles) => {
  roles.map((item) => {
    item.role.privileges.map((privilege) => {
      const word = String(privilege.name)
        .replace(/:/g, '_')
        .replace(/-/g, '')
        .concat('_TRUE')
        .toUpperCase();
      confirmUserPrivileges(word);
    });
  });
};

export const setSuperAdmin = (payload) => ({
  type: privilegeActionTypes.SUPER_ADMIN,
  payload,
});

export const clearPrivileges = () => ({
  type: privilegeActionTypes.CLEAR_ALL_PRIVILEGES,
});

export const updateAppPrivilegeState = (payload: IPrivilegeState) => ({
  type: privilegeActionTypes.UPDATE_APP_PRIVILEGE_STATE,
  payload,
});
