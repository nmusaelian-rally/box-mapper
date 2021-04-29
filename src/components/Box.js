import PropTypes from 'prop-types';

const Box = (props) => {
    const { top, left, color, className } = props;
    const style = { top, left, backgroundColor: color };
    return (
        <div
            className={`block ${className}`}
                style={style}
                onClick={props.onClick}
                onMouseOut={props.onMouseOut}
            >
                {props.children}
            </div>
        );
    
}

export default Box;

Box.propTypes = {
    children: PropTypes.any,
    onClick: PropTypes.func,
    onMouseOut: PropTypes.func,
    top: PropTypes.string,
    left: PropTypes.string,
    color: PropTypes.string,
    className: PropTypes.string,
};