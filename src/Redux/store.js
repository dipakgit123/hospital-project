import { legacy_createStore,combineReducers,compose,applyMiddleware } from "redux";
import {reducer as productReducer} from "./reducer";
import { thunk } from "redux-thunk";

const root_reducer = combineReducers({
    product:productReducer,
})

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
export const store = legacy_createStore(root_reducer,composeEnhancers(applyMiddleware(thunk)));