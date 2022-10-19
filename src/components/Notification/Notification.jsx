import css from './Notification.module.css';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <h2 className={css.notific}>{message}</h2>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
