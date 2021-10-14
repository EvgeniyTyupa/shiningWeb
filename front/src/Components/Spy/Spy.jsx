import { useEffect, useLayoutEffect, useState } from 'react'
import { cx } from '../../Utils/classnames'
import classes from './Spy.module.css'

const Spy = (props) => {
    const { refs, className } = props

    const [size, setSize] = useState(window.scrollY)

    const [currentRef, setCurrentRef] = useState(0)

    useLayoutEffect(() => {
        function updateSize(){
            setSize(window.scrollY)    
        }
        window.addEventListener('scroll', updateSize)
        return () => window.removeEventListener('scroll', updateSize)
    }, [])


    const handleScroll = (ref, index) => {
        setTimeout(() => setCurrentRef(index), 500) 
        ref.current.scrollIntoView()
    }

    useEffect(() => {
        refs.forEach((item, index) => {
            let headerOffset = 800 * index
            let elementPosition = item.current.getBoundingClientRect().top
            let offsetPosition = elementPosition + headerOffset
            if(offsetPosition <= size){
                setCurrentRef(index)
            }
        });
    }, [size])

    return(
        <div className={cx(classes.main, className)}>
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