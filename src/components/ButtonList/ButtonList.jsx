import PropTypes from 'prop-types';
import css from './ButtonList.module.css';

export const ButtonList = ({ options, onButtonFeedback }) => {
  return (
    <ul className={css.buttonList}>
      {options.map(text => (
        <li key={text}>
          <button
            className={css.button}
            type="button"
            onClick={() => onButtonFeedback(text)}
          >
            {text}
          </button>
        </li>
      ))}
    </ul>
  );
};

ButtonList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
