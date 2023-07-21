import { useWindowDimensions } from 'react-native';

interface IProps {
  base?: any;
  md?: any;
  lg?: any;
  xl?: any;
  xxl?: any;
}

const breakpoints = {
  base: 480,
  md: 768,
  lg: 992,
  xl: 1280,
  xxl: 1536,
};

const useBreakpointValue = (props: IProps) => {
  const { base, md, lg, xl, xxl } = props;
  const size = useWindowDimensions();
  const width = size.width || 0;
  let value;
  if (typeof base !== 'undefined') {
    value = base;
  }
  if (typeof md !== 'undefined' && width >= breakpoints.md) {
    value = md;
  }
  if (typeof lg !== 'undefined' && width >= breakpoints.lg) {
    value = lg;
  }
  if (typeof xl !== 'undefined' && width >= breakpoints.xl) {
    value = xl;
  }
  if (typeof xxl !== 'undefined' && width >= breakpoints.xxl) {
    value = xxl;
  }
  return value;
};

export default useBreakpointValue;
