import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import multi from 'redux-multi';
import thunkMiddlware from 'redux-thunk';
import adminReducer from "./adminReducer";
import commonReducer from "./commonReducer";
import googleReducer from "./googleReducer";
import musicReducer from "./musicReducer";

let reducers = combineReducers({
    common: commonReducer,
    admin: adminReducer,
    music: musicReducer,
    google: googleReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddlware, multi)));

window.store = store;

export default store;