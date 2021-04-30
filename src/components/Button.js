import PropTypes from 'prop-types';

export const Button = ({
    children, 
    type, 
    onClick,
    className
}) => {
    return (
        <button className={`btn ${className}`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.any,
    onClick: PropTypes.func,
    label: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string,
};