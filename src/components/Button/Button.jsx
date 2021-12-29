import React from "react";
import PropTypes from 'prop-types';

const Button = ({loadMoreFn}) => {
    return(
        <button onClick={loadMoreFn} className="Button" type="button">
            Load More
        </button>
    );
};

Button.propTypes = {
    loadMoreFn: PropTypes.func.isRequired,
};

export default Button;