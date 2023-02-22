import PropTypes from 'prop-types';
import { NotificationMessageStyled } from './NotificationMessage.styled';

export const NotificationMessage = ({ message }) => {
  return <NotificationMessageStyled>{message}</NotificationMessageStyled>;
};

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
