import React from 'react';

const Button = ({clickEvent,buttonName}) => {
    return (
        <input type="button" onClick={clickEvent} value={buttonName.charAt(0).toUpperCase() + buttonName.slice(1)} />
    )
}
export default Button;