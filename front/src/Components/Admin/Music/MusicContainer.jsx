import { connect } from "react-redux"
import { addTrack } from "../../../Redux/musicReducer"
import Music from "./Music"

const MusicContainer = (props) => {
    const { music } = props
    
    return(
        <Music 
            music={music}
            AddComponent/>
    )
}

let mapStateToProps = (state) => ({
    music: state.music.music
})

export default connect(mapStateToProps, {
    addTrack
})(MusicContainer)