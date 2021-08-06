import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import multi from 'redux-multi';
import thunkMiddlware from 'redux-thunk';
// import djsReducer from "./djsReducer";
// import commonReducer from './commonReducer';
// import youtubeReducer from "./youtubeReducer";
// import userReducer from "./userReducer";
// import ticketReducer from "./ticketReducer";

let reducers = combineReducers({
    // djs: djsReducer,
    // common: commonReducer,
    // youtube: youtubeReducer,
    // user: userReducer,
    // ticket: ticketReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddlware, multi)));

window.store = store;

export default store;