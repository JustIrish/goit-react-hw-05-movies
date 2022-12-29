import PropTypes from 'prop-types';
import { HiArrowLeft } from 'react-icons/hi';
import { BackLinkStyled } from './BackLink.styled';

export const BackLink = ({ to, children }) => {
  return (
    <BackLinkStyled to={to}>
      <HiArrowLeft size="16" />
      {children}
    </BackLinkStyled>
  );
};

BackLink.propTypes = {
  to: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};
