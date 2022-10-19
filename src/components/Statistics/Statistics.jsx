import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = props => {
  const statsValues = Object.keys(props);
  return (
    <ul className={css.statList}>
      {statsValues.map(stat => (
        <li key={stat}>
          <p className={css.text}>
            {stat === 'positiveFeedback'
              ? 'positive feedback  : '
              : `${stat.toLowerCase()}: `}
            <span>{props[stat]}</span>
          </p>
        </li>
      ))}
    </ul>
  );
};

Statistics.propTypes = {
  props: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
  }),
};
