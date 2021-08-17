import { useHistory } from 'react-router-dom'
import classes from './NewsItem.module.css'

const NewsItem = (props) => {
    const { item } = props

    const history = useHistory()

    const move = () => {
        history.push(`/news/${item._id}`)
    }

    return(
        <div className={classes.main} onClick={move}>
            <img src={item.image} alt="image"/>
            <div className={classes.info}>
                <div className={classes.title}>
                    <div className={classes.line}/>
                    <h3># {item.date}</h3>
                </div>
                <p>{item.text}</p>
            </div>
        </div>
    )
}

export default NewsItem