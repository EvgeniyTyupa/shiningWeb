import Slider from "react-slick";
import ServiceItem from '../../Services/ServiceItem/ServiceItem';
import classes from './Slider.module.css'

const SliderComponent = (props) => {
    const { items } = props

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        adaptiveHeight: true,
        arrows: true,
        dots: true,
        // dotsClass: classes.dots
    };

    return(
        <Slider {...settings}>
           {items.map(item => {
                return(
                    <ServiceItem service={item} key={item._id} className={classes.slide}/>
                )
            })}
        </Slider>
    )
}

export default SliderComponent