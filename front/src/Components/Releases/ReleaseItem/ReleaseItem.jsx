import classes from './ReleaseItem.module.css'
import play from '../../../Assets/icons/play.svg'
import pause from '../../../Assets/icons/pause.svg'
import { useEffect, useRef, useState } from 'react'
import { cx } from '../../../Utils/classnames'
import track from "../../../Assets/track.wav"
import MusicPlayer from '../../MusicPlayer/MusicPlayer'


const ReleaseItem = (props) => {
    const { item, index, setCurrentTrack, currentTrack } = props

    const [percentage, setPercentage] = useState(0)
    const [isPlay, setIsPlay] = useState(false)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)

    const audioRef = useRef()

    const onChange = (e) => {
        const audio = audioRef.current
        audio.currentTime = (audio.duration / 100) * e.target.value
        setPercentage(e.target.value)
    }

    const handlePlay = () => {
        setIsPlay(!isPlay)
    }

    const stopPlay = () => {
        setIsPlay(false)
        setCurrentTrack(null)
    }

    const getCurrDuration = (e) => {
        const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
        const time = e.currentTarget.currentTime

        setPercentage(+percent)
        setCurrentTime(time.toFixed(2))
    }

    const secondsToHms = (seconds) => {
        if (!seconds) return '00m 00s'

        let duration = seconds
        let hours = duration / 3600
        duration = duration % 3600

        let min = parseInt(duration / 60)
        duration = duration % 60

        let sec = parseInt(duration)

        if (sec < 10) {
            sec = `0${sec}`
        }
        if (min < 10) {
            min = `0${min}`
        }

        if (parseInt(hours, 10) > 0) {
            return `${parseInt(hours, 10)}h ${min}m ${sec}s`
        } else if (min == 0) {
            return `00:${sec}`
        } else {
            return `${min}:${sec}`
        }
    }

    useEffect(() => {
        if(currentTrack != index) {
            setIsPlay(false)
        }
    }, [currentTrack])

    useEffect(() => {
        const audio = audioRef.current
        audio.volume = 0.1

        if(isPlay){
            setCurrentTrack(index)
            audio.play()
        }else {
            audio.pause()
        }
    }, [isPlay])



    return(
        <div className={cx(classes.main, isPlay && classes.active)}>
            <div className={classes.image}>
                <img src={item.image} alt="title" className={classes.titleImage}/>
                {isPlay ? 
                    <img src={pause} alt="pause" onClick={stopPlay} className={classes.controls}/> 
                :   
                    <img src={play} alt="play" onClick={handlePlay} className={classes.controls}/>}
            </div>
            <div className={classes.info}>
                <h4>{item.name}</h4>
                <p>{item.artist}</p>
                <span>{item.genre} - {item.year_of_release}</span>
                {isPlay && 
                <div className={classes.player}>
                    <span>{secondsToHms(currentTime)} / {secondsToHms(duration)}</span>
                    <MusicPlayer percentage={percentage} onChange={onChange}/>
                </div>}
                <audio 
                    ref={audioRef} 
                    src={track} 
                    onLoadedData={(e) => {
                        setDuration(e.currentTarget.duration.toFixed(2))
                    }}
                    onTimeUpdate={getCurrDuration}
                ></audio>
            </div>
        </div>
    )
}

export default ReleaseItem