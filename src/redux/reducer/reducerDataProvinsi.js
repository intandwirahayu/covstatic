const initialState = {
    dataProvinsi : [],
}

const reducerProvinsi = (state = initialState, action) => {
    const {type, keyItem, valueItem} = action;

    if(type == 'SET_SINGLE_STATE'){
        return {
            ...state,
            [keyItem] : [valueItem]
        }
    }

    return state
}

export default reducerProvinsi;