import { useEffect, useRef, useState } from 'react'
import classes from './MusicPlayer.module.css'

const MusicPlayer = (props) => {
    const { percentage = 0, onChange } = props

    const [position, setPosition] = useState(0)
    const [margiLeft, setMarginLeft] = useState(0)
    const [progressBarWidth, setProgressBarWidth] = useState(0)

    const rangeRef = useRef()
    const thumbRef = useRef()

    useEffect(() => {
        const rangeWidth = rangeRef.current.getBoundingClientRect().width
        const thumbWidth = thumbRef.current.getBoundingClientRect().width
        const centerThumb = (thumbWidth / 100) * percentage * -1
        const currentProgressBar = thumbWidth + (rangeWidth / 100) * percentage - (thumbWidth / 100) * percentage

        setPosition(percentage)
        setMarginLeft(centerThumb)
        setProgressBarWidth(currentProgressBar)
    }, [percentage])

    return(
        <div className={classes.main}>
            <div className={classes.progressBar} style={{ width: `${progressBarWidth}px` }}></div>
            <div className={classes.thumb} ref={thumbRef} style={{ left: `${position}%`, marginLeft: `${margiLeft}px` }}></div>
            <input type="range" step="0.01" ref={rangeRef} className={classes.range} onChange={onChange} value={position}/>
        </div>
    )
}

export default MusicPlayer