import PropTypes from 'prop-types';

export const propTypes = {
    bankName: PropTypes.string,
    bankId: PropTypes.number,
    size: PropTypes.number,
    color: PropTypes.string,
    borderRadius: PropTypes.number,
};

export const defaultProps = {
    size: 24,
    borderRadius: 2,
};

