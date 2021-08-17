import classes from './ReleaseItem.module.css'

const ReleaseItem = (props) => {
    const { item } = props

    return(
        <div className={classes.main}>
            {/* <img src={item.image}/> */}
            <div className={classes.info}>

            </div>
        </div>
    )
}

export default ReleaseItem