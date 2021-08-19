import classes from './ReleaseItem.module.css'
import play from '../../../Assets/icons/play.svg'
import pause from '../../../Assets/icons/pause.svg'
import { useState } from 'react'
import { cx } from '../../../Utils/classnames'
import ReactAudioPlayer from 'react-audio-player';
import track from "../../../Assets/track.wav"

const ReleaseItem = (props) => {
    const { item } = props

    const [isPlay, setIsPlay] = useState(false)

    const handlePlay = () => {
        setIsPlay(!isPlay)
    }

    return(
        <div className={cx(classes.main, isPlay && classes.active)}>
            <div className={classes.image}>
                <img src={item.image} alt="title" className={classes.titleImage}/>
                {isPlay ? 
                    <img src={pause} alt="pause" onClick={handlePlay} className={classes.controls}/> 
                :   
                    <img src={play} alt="play" onClick={handlePlay} className={classes.controls}/>}
            </div>
            <div className={classes.info}>
                <h4>{item.name}</h4>
                <p>{item.artist}</p>
                <span>{item.genre} - {item.year_of_release}</span>
                {/* <ReactAudioPlayer controls src={track} play={isPlay}/> */}
            </div>
        </div>
    )
}

export default ReleaseItem