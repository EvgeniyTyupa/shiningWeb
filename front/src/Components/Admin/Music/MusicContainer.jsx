import { connect } from "react-redux"
import Music from "./Music"

const MusicContainer = (props) => {
    return(
        <Music/>
    )
}

let mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {})(MusicContainer)