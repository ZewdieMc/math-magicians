import PropTypes from 'prop-types';

const Result = ({ state }) => {
  const { total, next, operation } = state;
  return (
    <div className="result">
      <p>
        { total }
        {operation}
        {next}
      </p>
    </div>
  );
};

Result.propTypes = {
  state: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Result;
