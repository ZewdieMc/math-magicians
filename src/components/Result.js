import PropTypes from 'prop-types';

const Result = ({ result }) => (
  <div className="result">
    <p>{ result }</p>
  </div>
);

Result.defaultProps = { result: '0' };
Result.propTypes = { result: PropTypes.string };
export default Result;
