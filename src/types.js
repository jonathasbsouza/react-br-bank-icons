import PropTypes from 'prop-types';

export const propTypes = {
    bankName: PropTypes.string,
    bankId: PropTypes.number,
    size: PropTypes.number,
};

export const defaultProps = {
    bankName: 'fallback',
    bankId: -1,
    size: 24,
};

