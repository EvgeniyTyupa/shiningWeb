import { authApi } from "../Api/api"
import { setIsFetching, setServerError } from "./commonReducer"

const SET_ADMIN_DATA = 'SET_ADMIN_DATA'
const SET_IS_AUTH = 'SET_IS_AUTH'
const SET_IS_START_DATA = 'SET_IS_START_DATA'

let initialState = {
    admin: null,
    isAuth: false,
    isStartData: false
}

const adminReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_ADMIN_DATA: {
            return { ...state, admin: action.admin }
        }
        case SET_IS_AUTH: {
            return { ...state, isAuth: action.isAuth }
        }
        case SET_IS_START_DATA: {
            return { ...state, isStartData: action.isStartData }
        }
        default: 
            return state
    }
}

export const setAdminData = (admin) => ({
    type: SET_ADMIN_DATA, admin
})
export const setIsAuth = (isAuth) => ({
    type: SET_IS_AUTH, isAuth
})
export const setIsStartData = (isStartData) => ({
    type: SET_IS_START_DATA, isStartData
})

export const register = (username, password) => async (dispatch) => {
    dispatch(setIsFetching(true))
    try{
        let response = await authApi.register(username, password)
        dispatch([setServerError(null), setAdminData(response), setIsFetching(false)])
    }catch(err) {
        dispatch([setServerError(err.message), setIsFetching(false)])
    }
}

export const login = (username, password) => async (dispatch) => {
    dispatch(setIsFetching(true))
    try{
        let response = await authApi.login(username, password)
        localStorage.usertoken = response.token
        dispatch([setServerError(null), setIsAuth(true), setIsFetching(false)])
    }catch(err) {
        dispatch([setServerError(err.message), setIsAuth(false), setIsFetching(false)])
    }
}

export const me = () => async (dispatch) => {
    dispatch(setIsFetching(true))
    try{
        let response = await authApi.authMe()
        dispatch([setAdminData(response), setIsAuth(true), setIsStartData(true), setIsFetching(false)])
    }catch(err) {
        dispatch([setServerError(err.message), setIsFetching(false)])
    }
}

export const logout = () => {
    localStorage.removeItem("usertoken")
}

export default adminReducer