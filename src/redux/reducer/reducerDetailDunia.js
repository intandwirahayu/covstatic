const initialState = {
    countPositif: '',
    countHealed: '',
    countDead: '',
    country: '',
    city: '',
    location: '',
    continent: '',
    abbreviation: '',
    population: '',
    life_expectancy: '',
    allField: {}
}

const reducerDetailDunia = (state = initialState, action) => {
    const {type, keyItem, valueItem} = action;

    if(type == 'SET_SINGLE_STATE'){
        return {
            ...state,
            [keyItem]: valueItem
        }
    }

    return state;
}

export default reducerDetailDunia;