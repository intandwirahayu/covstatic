// import { combineReducers } from "redux";

const initialState = {
    dataDunia: {},
    positif: 0,
    sembuh: 0,
    meninggal: 0,
    positifGlobal: 0,
    sembuhGlobal: 0,
    meninggalGlobal: 0
}

const reduceBeranda = (state = initialState, action) => {
    const {type, data, nameItem, valueItem} = action;

    if(type == 'SET_ITEM'){
        return {
            ...state,
            [nameItem] : valueItem 
        }
    }

    if(type == 'SET_STATE_WORLD'){
        return {
            ...state,
            dataDunia: data
        }
    }

    return state;
}

export default reduceBeranda;