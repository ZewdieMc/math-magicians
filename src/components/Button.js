import PropTypes from 'prop-types';

const Button = ({ children, click, className }) => (
  <button type="button" className={className} onClick={() => click(children)}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};
export default Button;
