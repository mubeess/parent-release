import { RoleRestControllerService } from '@safsims/generated';
import { school_id } from '@safsims/utils/constants';
import { apiWrapper } from '@safsims/utils/http-client';
import { handleError } from '@safsims/utils/utils';
import { UmsRoleResponse } from 'generated/models/UmsRoleResponse';
import { useEffect, useState } from 'react';

interface IProps {
  id?: string;
}

const useUserRolesGet = ({ id }: IProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [roles, setRoles] = useState<UmsRoleResponse[]>([]);

  const fetchUserRoles = async (id: string) => {
    setLoading(true);
    try {
      const data = await apiWrapper(() =>
        RoleRestControllerService.getUserRolesUsingGet({
          userId: id,
          xTenantId: school_id,
        }),
      );
      setRoles(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      handleError(error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchUserRoles(id);
    }
  }, [id]);

  return {
    roles,
    loadingRoles: loading,
  };
};

export default useUserRolesGet;
