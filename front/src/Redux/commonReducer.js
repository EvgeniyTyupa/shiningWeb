import { mailApi } from "../Api/api"

const SET_IS_FETCHING = 'SET_IS_FETCHING'
const SET_SERVER_ERROR = 'SET_SERVER_ERROR'

let initialState = {
    isFetching: false,
    serverError: null
}

const commonReducer = (state = initialState, action ) => {
    switch(action.type){
        case SET_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case SET_SERVER_ERROR: {
            return { ...state, serverError: action.serverError }
        }
        default: 
            return state
    }
}

export const setIsFetching = (isFetching) => ({
    type: SET_IS_FETCHING, isFetching
})
export const setServerError = (serverError) => ({
    type: SET_SERVER_ERROR, serverError
})

export const sendMail = (name, phone) => async (dispatch) => {
    dispatch(setIsFetching(true))
    try{
        await mailApi.sendMail(name, phone)
        dispatch([setServerError(null), setIsFetching(false)])
    }catch(err){
        dispatch([setServerError("server error"), setIsFetching(false)])
    }
}

export default commonReducer