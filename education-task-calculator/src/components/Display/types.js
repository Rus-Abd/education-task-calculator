import PropTypes from 'prop-types';

const types = {
  displayVal: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  theme: PropTypes.shape({
    border: PropTypes.string.isRequired,
  }).isRequired,
};
export default types;
