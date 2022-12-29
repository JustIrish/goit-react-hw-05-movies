import { ThreeDots } from 'react-loader-spinner';
import { SpinnerWrapper } from './Loader.styled';

export const Loader = () => (
  <SpinnerWrapper>
    <ThreeDots
      height="70"
      width="70"
      radius="7"
      color="#656870"
      ariaLabel="three-dots-loading"
      visible={true}
    />
  </SpinnerWrapper>
);
