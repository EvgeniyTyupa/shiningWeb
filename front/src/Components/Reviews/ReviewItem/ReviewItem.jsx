import classes from './ReviewItem.module.css'
import coma_small from '../../../Assets/icons/coma_small.svg'

const ReviewItem = (props) => {
    const { item } = props

    return(
        <div className={classes.main}>
            <img src={coma_small} alt="coma" className={classes.coma}/>
            <p className={classes.text}>{item.text}</p>
            <div className={classes.user}>
                <img src={item.user_photo} alt="user"/>
                <p>{item.user_name}</p>
            </div>
        </div>
    )
}

export default ReviewItem