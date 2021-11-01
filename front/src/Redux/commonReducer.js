import { mailApi } from "../Api/api"

const SET_IS_FETCHING = 'SET_IS_FETCHING'
const SET_SERVER_ERROR = 'SET_SERVER_ERROR'
const SET_IS_MAIL_SENDED_SUCCESS = 'SET_IS_MAIL_SENDED_SUCCESS'
const SET_START_USER_URL = 'SET_START_USER_URL'

let initialState = {
    isFetching: false,
    isMailSended: false,
    serverError: null,
    startUserUrl: ""
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
        case SET_START_USER_URL: {
            return { ...state, startUserUrl: action.startUserUrl }
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
export const setStartUserUrl = (startUserUrl) => ({
    type: SET_START_USER_URL, startUserUrl
})

export const sendMail = (name, phone, startUserUrl) => async (dispatch) => {
    dispatch(setIsFetching(true))
    try{
        await mailApi.sendMail(name, phone)
        await mailApi.sendToGoogleTable(name, phone, startUserUrl)
        dispatch([setServerError(null), setIsMailSended(true), setIsFetching(false)])
    }catch(err){
        dispatch([setServerError("server error"), setIsMailSended(false), setIsFetching(false)])
    }
}

export default commonReducer