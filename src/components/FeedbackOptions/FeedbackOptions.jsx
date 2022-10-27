import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.buttonList}>
      {options.map(text => (
        <li key={text}>
          <button
            className={css.button}
            type="button"
            name={text}
            onClick={() => onLeaveFeedback(text)}
          >
            {text}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
