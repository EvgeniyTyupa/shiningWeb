import { googleApi } from "../Api/googleApi"
import { setIsFetching } from "./commonReducer"

const SET_REVIEWS_DATA = 'SET_REVIEWS_DATA'

let initialState = {
    reviews: []
}

let googleReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_REVIEWS_DATA: {
            return { ...state, reviews: action.reviews }
        }
        default:
            return state
    }
}

export const setReviewsData = (reviews) => ({
    type: SET_REVIEWS_DATA, reviews
})

export const getReviews = () => async (dispatch) => {
    try{
        setIsFetching(true)
        let response = await googleApi.getReviews()
        console.log(response)
        dispatch([setReviewsData(response), setIsFetching(false)])
    }catch(err) {
        setIsFetching(false)
    }
}

export default googleReducer