import { useEffect, useRef, useState } from "react"
import { useHistory } from "react-router-dom"
import { useEventListener } from "../../Hooks/useEventListener"
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
        <Main 
            viewAllNews={viewAllNews} 
            viewAllReleases={viewAllReleases}
        />
    )
}

export default MainContainer