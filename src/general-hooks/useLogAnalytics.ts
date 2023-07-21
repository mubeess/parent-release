import analytics from '@react-native-firebase/analytics';
import { useAppSelector } from '@safsims/redux/hooks/useAppSelector';
import { handleError } from '@safsims/utils/utils';

const useLogAnalytics = () => {
  const user = useAppSelector((state) => state.user.parent);
  const schoolInfo = useAppSelector((state) => state.configuration.schoolInfo);

  const logEvent = async (eventName: string) => {
    try {
      await analytics().logEvent(eventName || '', {
        username: user?.parent_id,
        organisation: schoolInfo?.basic_school_information_dto?.school_id,
        login_date: new Date().toISOString(),
      });
    } catch (error) {
      handleError(error);
    }
  };

  return {
    logEvent,
  };
};

export default useLogAnalytics;
