import { mailApi } from "../Api/api"

const SET_IS_FETCHING = 'SET_IS_FETCHING'
const SET_SERVER_ERROR = 'SET_SERVER_ERROR'
const SET_IS_MAIL_SENDED_SUCCESS = 'SET_IS_MAIL_SENDED_SUCCESS'

let initialState = {
    isFetching: false,
    isMailSended: false,
    serverError: null
}

const commonReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case SET_SERVER_ERROR: {
            return { ...state, serverError: action.serverError }
        }
        case SET_IS_MAIL_SENDED_SUCCESS: {
            return { ...state, isMailSended: action.isMailSended }
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
export const setIsMailSended = (isMailSended) => ({
    type: SET_IS_MAIL_SENDED_SUCCESS, isMailSended
})

export const sendMail = (name, phone) => async (dispatch) => {
    dispatch(setIsFetching(true))
    try{
        await mailApi.sendMail(name, phone)
        dispatch([setServerError(null), setIsMailSended(true), setIsFetching(false)])
    }catch(err){
        dispatch([setServerError("server error"), setIsMailSended(false), setIsFetching(false)])
    }
}

export default commonReducer