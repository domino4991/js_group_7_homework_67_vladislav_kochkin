const initialState = {
    strValue: '',
    calcResult: null
};

const reducer = (state = initialState, action) => {
    if(action.type === 'ADD_VALUE') return {...state, strValue: state.strValue + ' ' + action.value};
    return state;
}

export default reducer;