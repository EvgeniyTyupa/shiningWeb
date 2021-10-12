import { useState } from 'react'
import { cx } from '../../Utils/classnames'
import classes from './Spy.module.css'

const Spy = (props) => {
    const { refs } = props

    const [currentRef, setCurrentRef] = useState(0)

    const handleScroll = (ref, index) => {
        setCurrentRef(index)
        ref.current.scrollIntoView()
    }

    return(
        <div className={classes.main}>
            {refs.map((item, index) => (
                <button onClick={() => handleScroll(item, index)}>
                    <div className={cx(classes.body, currentRef === index && classes.active)}/>
                    {currentRef === index && <span>{currentRef + 1}</span>}
                </button>
            ))}
        </div>
    )
}

export default Spy