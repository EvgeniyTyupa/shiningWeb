import { connect } from "react-redux"
import { useHistory } from "react-router-dom"
import Preloader from "../../Components/Common/Preloader/Preloader"
import Main from "./Main"

const MainContainer = (props) => {
    const { isFetching } = props

    const history = useHistory()

    const viewAllNews = () => {
        history.push("/news")
    }

    const viewAllReleases = () => {
        history.push("/music")
    }

    return(
        <>
            {isFetching && <Preloader/>}
            <Main 
                viewAllNews={viewAllNews} 
                viewAllReleases={viewAllReleases}
            />
        </>
    )
}

let mapStateToProps = (state) => ({
    isFetching: state.common.isFetching
})

export default connect(mapStateToProps, {})(MainContainer)