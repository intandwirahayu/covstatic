const initialState = {
    email: '',
    password: ''
}

const reducerProfil = (state = initialState, action) => {
    const {type, nameForm, value} = action;

    if(type == 'SET_STATE'){
        return{
            ...state,
            [nameForm] : value
        }
    }

    return state;
}

export default reducerProfil;