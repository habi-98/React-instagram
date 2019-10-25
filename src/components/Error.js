import React, {Fragment} from 'react';
import img from '../images/error.png';

const ErrorMessage = () => {
    return (
        <Fragment>
            <img src={img} alt="error"/>
        </Fragment>
    )
};

export default ErrorMessage