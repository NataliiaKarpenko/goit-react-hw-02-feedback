import PropTypes from 'prop-types';
import { AppContainerStyled } from './AppContainer.styled';

export const AppContainer = ({ title, children }) => {
  return (
    <AppContainerStyled>
      <h1>{title}</h1>
      {children}
    </AppContainerStyled>
  );
};

AppContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
