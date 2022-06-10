import PropTypes from 'prop-types';

const types = {
  setDisplayVal: PropTypes.func.isRequired,
  setHistory: PropTypes.func.isRequired,
  history: PropTypes.arrayOf(PropTypes.string),
  theme: PropTypes.shape({
    bodyText: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
  }).isRequired,
};
export default types;
