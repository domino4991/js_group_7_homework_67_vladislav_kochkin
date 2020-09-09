import React from 'react';
import './Calculator.css';
import CalculatorBox from "../../components/CalculatorBox/CalculatorBox";
import {useDispatch, useSelector} from "react-redux";
import Button from "../../components/UI/Button/Button";

const Calculator = () => {
    const numbers = [
        {num: 0, str: 'zero'},
        {num: 1, str: 'one'},
        {num: 2, str: 'two'},
        {num: 3, str: 'three'},
        {num: 4, str: 'four'},
        {num: 5, str: 'five'},
        {num: 6, str: 'six'},
        {num: 7, str: 'seven'},
        {num: 8, str: 'eight'},
        {num: 9, str: 'nine'}
        ];
    const func = [
        {funcName: '+', str: 'plus'},
        {funcName: '-', str: 'minus'},
        {funcName: '*', str: 'multiply'},
        {funcName: '/', str: 'split'},
        ];

    const strValue = useSelector(state => state.strValue);
    const sumOfNums = useSelector(state => state.sumOfNums);
    const dispatch = useDispatch();

    const onClickButtons = e => {
        const value = e.currentTarget.textContent;
        dispatch({type: 'ADD_VALUE', value});
    };

    return (
        <div className="Calculator">
            <h1>Calculator</h1>
            <CalculatorBox
                numbers={numbers}
                func={func}
                clickBtn={onClickButtons}
                output={strValue}
                result={sumOfNums}
            >
                <Button
                    btnType="button"
                    label="="
                    classes={`Button-equally`}
                    clicked={() => dispatch({type: 'SUM_NUMS', value: eval(strValue)})}
                />
                <Button
                    btnType="button"
                    label="C"
                    classes={`Button-clear`}
                    clicked={() => dispatch({type: 'CLEAR'})}
                />
            </CalculatorBox>
        </div>
    );
};

export default Calculator;