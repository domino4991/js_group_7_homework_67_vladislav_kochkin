import React from 'react';
import './CalculatorBox.css';
import Button from "../UI/Button/Button";

const CalculatorBox = props => {
    return (
        <div className="Calculator-box">
            <div className="Calculator-output">{props.output} {props.result}</div>
            {props.numbers.map(item => (
                <Button
                    key={item.str}
                    btnType="button"
                    label={item.num}
                    classes={`Button-${item.str}`}
                    clicked={e => props.clickBtn(e)}
                />
            ))}
            {props.func.map(item => <Button
                key={item.str}
                btnType="button"
                label={item.funcName}
                classes={`Button-${item.str}`}
                clicked={e => props.clickBtn(e)}
            />)}
        </div>
    );
};

export default CalculatorBox;