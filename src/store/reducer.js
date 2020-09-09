const initialState = {
    strValue: '',
    sumOfNums: '',
    equallyDisable: true
};

const reducer = (state = initialState, action) => {
    if(action.type === 'ADD_VALUE') return {...state, strValue: state.strValue + action.value};
    if(action.type === 'SUM_NUMS') {
        if(action.value) {
            return {...state, sumOfNums: ' = ' + action.value};
        }
    }
    if(action.type === 'CLEAR') return {strValue: '', sumOfNums: '', equallyDisable: true};
    if(action.type === 'EQUALLY_DISABLE') return {...state, equallyDisable: false};
    return state;
}

export default reducer;