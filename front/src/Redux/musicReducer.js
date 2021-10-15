import { musicApi } from "../Api/api"
import { setIsFetching } from "./commonReducer"

const SET_MUSIC_DATA = 'SET_MUSIC_DATA'

let initialState = {
    music: []
}

const musicReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_MUSIC_DATA: {
            return { ...state, music: action.music }
        }
        default:
            return state
    }
}

export const setMusicData = (music) => ({
    type: SET_MUSIC_DATA, music
})

export const addTrack = (data) => async(dispatch) => {
    dispatch(setIsFetching(true))
    try{
        await musicApi.create(data)
        dispatch(setIsFetching(false))
    }catch(err) {
        dispatch(setIsFetching(false))
    }
}

export default musicReducer