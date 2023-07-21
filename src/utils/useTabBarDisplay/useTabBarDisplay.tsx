import { useDispatch } from 'react-redux';
import { updateAppUserState } from '../../redux/users/actions';

const hideBottomTabRoutes = ['ChildInvoice', 'ResultDetails', 'AllChildrenPayment', 'Profile'];

const useTabBarDisplay = () => {
  const dispatch = useDispatch();

  const checkTabBar = (e) => {
    const length = e?.data?.state?.routes?.length;
    const route = e?.data?.state?.routes?.[length - 1];
    if (route) {
      const shouldHide = hideBottomTabRoutes.includes(route.name || '');
      if (shouldHide) {
        dispatch(
          updateAppUserState({
            tabBarStyle: {
              display: 'none',
            },
          }),
        );
      } else {
        dispatch(
          updateAppUserState({
            tabBarStyle: {
              display: 'flex',
            },
          }),
        );
      }
    }
  };

  return {
    checkTabBar,
  };
};

export default useTabBarDisplay;
