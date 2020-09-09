const initialState = {
    strValue: '',
    sumOfNums: ''
};

const reducer = (state = initialState, action) => {
    if(action.type === 'ADD_VALUE') return {...state, strValue: state.strValue + action.value};
    if(action.type === 'SUM_NUMS') return {...state, sumOfNums: ' = ' + action.value};
    if(action.type === 'CLEAR') return {...state, strValue: '', sumOfNums: ''};
    return state;
}

export default reducer;