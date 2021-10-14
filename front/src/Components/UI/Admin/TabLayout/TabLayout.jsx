import classes from './TabLayout.module.css'

const TabLayout = (props) => {
    const { header, children } = props
    return(
        <div className={classes.main}>
            <div className={classes.header}>
                <h2>{header}</h2>
            </div>
            <div className={classes.content}>
                {children}
            </div>
        </div>
    )
}

export default TabLayout