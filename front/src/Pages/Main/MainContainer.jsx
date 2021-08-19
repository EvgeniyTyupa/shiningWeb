import { useHistory } from "react-router-dom"
import Main from "./Main"

const MainContainer = (props) => {
    const history = useHistory()

    const viewAllNews = () => {
        history.push("/news")
    }

    const viewAllReleases = () => {
        history.push("/music")
    }

    return(
        <Main viewAllNews={viewAllNews} viewAllReleases={viewAllReleases}/>
    )
}

export default MainContainer