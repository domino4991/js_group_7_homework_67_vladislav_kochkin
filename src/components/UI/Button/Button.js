import React from 'react';
import './Button.css';

const Button = props => (
    <button
        type={props.btnType}
        className={props.classes ? `${props.classes} Button` : 'Button'}
        onClick={props.clicked}
        disabled={props.disabled ? props.disabled : false}
    >
        {props.label}
    </button>
);

export default Button;