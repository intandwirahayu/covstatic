import { combineReducers } from "redux";
import reducerSignin from "./reducerSignin";
import reducerSignup from './reducerSignup';
import reduceBeranda from "./reducerBeranda";
import reducerDetailDunia from "./reducerDetailDunia";
import reducerProvinsi from "./reducerDataProvinsi";
import reducerProfil from "./reducerProfil";

const reducer = combineReducers({
    reducerSignin,
    reducerSignup,
    reduceBeranda,
    reducerDetailDunia,
    reducerProvinsi,
    reducerProfil
});

export default reducer;