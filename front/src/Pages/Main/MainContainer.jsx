import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { useHistory } from "react-router-dom"
import Preloader from "../../Components/Common/Preloader/Preloader"
import { getReviews } from "../../Redux/googleReducer"
import Main from "./Main"

const MainContainer = (props) => {
    const { isFetching, getReviews, isMailSended } = props

    const [currentTrack, setCurrentTrack] = useState(null)

    const history = useHistory()

    const viewAllNews = () => {
        history.push("/news")
    }

    const viewAllReleases = () => {
        history.push("/music")
    }

    // useEffect(() => {
    //     getReviews()
    // }, [])

    useEffect(() => {
        if(isMailSended) {
          history.push("/thankyou")
        }
    }, [isMailSended])

    return(
        <>
            {isFetching && <Preloader/>}
            <Main 
                viewAllNews={viewAllNews} 
                viewAllReleases={viewAllReleases}
                currentTrack={currentTrack}
                setCurrentTrack={setCurrentTrack}
            />
        </>
    )
}

let mapStateToProps = (state) => ({
    isFetching: state.common.isFetching,
    isMailSended: state.common.isMailSended
})

export default connect(mapStateToProps, {
    getReviews
})(MainContainer)