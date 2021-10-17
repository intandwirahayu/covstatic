const initialState = {
    username: '',
    email: '',
    password: '',
    showData: true
}

const reducerSignup = (state = initialState, action) => {
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

export default reducerSignup;