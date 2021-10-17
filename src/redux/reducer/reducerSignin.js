const initialState = {
    email: '',
    password: '',
    showData: true
}

const reducerSignin = (state = initialState, action) => {
    const {type, nameForm, value, valueShow} = action;

    if(type == 'SET_STATE'){
        return{
            ...state,
            [nameForm] : value
        }
    }

    if(type == 'SET_SHOW_DATA'){
        return{
            ...state,
            showData: valueShow
        }
    }

    return state;
}

export default reducerSignin;