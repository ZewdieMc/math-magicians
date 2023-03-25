import PropTypes from 'prop-types';

const Result = ({ result }) => {
  const { total, next, operation } = result;
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
  result: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Result;
