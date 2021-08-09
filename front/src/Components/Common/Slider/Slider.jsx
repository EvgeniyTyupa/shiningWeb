
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ServiceItem from '../../Services/ServiceItem/ServiceItem';
import classes from './Slider.module.css'

const Slider = (props) => {
    const { items } = props

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return(
        <Carousel responsive={responsive} showDots infinite centerMode >
            {items.map(item => {
                return(
                    <ServiceItem service={item} key={item._id} className={classes.slide}/>
                )
            })}
        </Carousel>
    )
}

export default Slider