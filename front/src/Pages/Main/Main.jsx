import React, { useEffect, useRef } from 'react'
import classes from './Main.module.css'
import micropone from '../../Assets/images/micro.svg'
import slogan from '../../Assets/images/slogan.svg'

import Aos from 'aos'
import 'aos/dist/aos.css'
import OrderForm from '../../Components/Forms/OrderForm/OrderForm'
import { useTranslation } from 'react-i18next'
import { useMerities } from './useMerities'
import service_img_tmp from '../../Assets/images/servises_card_bg.jpg'
import SliderComponent from '../../Components/Common/Slider/SliderComponent'
import { cx } from '../../Utils/classnames'

import news_lines from '../../Assets/images/news_lines.svg'
import releases_lines from '../../Assets/images/release_lines.svg'
import vinyl from '../../Assets/icons/vinyl.svg'
import coma from '../../Assets/images/coma.svg'
import about1 from '../../Assets/images/about1.jpg'

import NewsItem from '../../Components/News/NewsItem/NewsItem'
import CustomButton from '../../Components/UI/Button/Button'
import ReleaseItem from '../../Components/Releases/ReleaseItem/ReleaseItem'
import ReviewItem from '../../Components/Reviews/ReviewItem/ReviewItem'
import Slider from 'react-slick'
import { usePartners } from '../../Hooks/usePartners'
import Spy from '../../Components/Spy/Spy'
import ScrollContainer from 'react-indiana-drag-scroll'
import Navbar from '../../Components/Navbar/Navbar'

const Main = (props) => {
    const { viewAllNews, viewAllReleases, currentTrack, setCurrentTrack } = props

    const { t } = useTranslation()

    const merities = useMerities()

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    const homeRef = useRef()
    const itemsRef = useRef()
    const commentsRef = useRef()
    const aboutRef = useRef()
    const mapRef = useRef()

    let refArray = [homeRef, aboutRef, itemsRef, commentsRef, mapRef]

    const news = [
        { _id: "cvf", date: "19.08.21", image: service_img_tmp, text: "Пространство нашей мастерской можно использовать для ваших фотосессий" },
        { _id: "cvfasd", date: "17.08.21", image: service_img_tmp, text: "Пространство нашей мастерской можно использовать для ваших фотосессий" },
        { _id: "cvhgghff", date: "15.08.21", image: service_img_tmp, text: "Пространство нашей мастерской можно использовать для ваших фотосессий" },
        { _id: "cvghjf", date: "13.08.21", image: service_img_tmp, text: "Пространство нашей мастерской можно использовать для ваших фотосессий" },
        { _id: "cvhjghf", date: "12.08.21", image: service_img_tmp, text: "Пространство нашей мастерской можно использовать для ваших фотосессий" },
        { _id: "cmbvf", date: "11.08.21", image: service_img_tmp, text: "Пространство нашей мастерской можно использовать для ваших фотосессий" },
        { _id: "cvnmbf", date: "10.08.21", image: service_img_tmp, text: "Пространство нашей мастерской можно использовать для ваших фотосессий" },
    ]

    const music = [ 
        { 
            _id: "vcb",
            image: "https://img.discogs.com/vnuRG-UXE_-ul8u5d0LQmjfl9bY=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-944161-1175705091.jpeg.jpg",
            name: "Sehnsuht",
            artist: "Rammstein",
            genre: "Rock",
            year_of_release: 1997
        },
        { 
            _id: "vdfscb",
            image: "https://img.discogs.com/vnuRG-UXE_-ul8u5d0LQmjfl9bY=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-944161-1175705091.jpeg.jpg",
            name: "Sehnsuht",
            artist: "Rammstein",
            genre: "Rock",
            year_of_release: 1997
        },
        { 
            _id: "vfghfcb",
            image: "https://img.discogs.com/vnuRG-UXE_-ul8u5d0LQmjfl9bY=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-944161-1175705091.jpeg.jpg",
            name: "Sehnsuht",
            artist: "Rammstein",
            genre: "Rock",
            year_of_release: 1997
        },
        { 
            _id: "vc3453b",
            image: "https://img.discogs.com/vnuRG-UXE_-ul8u5d0LQmjfl9bY=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-944161-1175705091.jpeg.jpg",
            name: "Sehnsuht",
            artist: "Rammstein",
            genre: "Rock",
            year_of_release: 1997
        }
    ]

    const services = [
        { _id: "123", title: "запись", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", img: service_img_tmp },
        { _id: "124", title: "запись", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", img: service_img_tmp },
        { _id: "125", title: "запись", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", img: service_img_tmp },
        { _id: "126", title: "запись", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", img: service_img_tmp },
        { _id: "127", title: "запись", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", img: service_img_tmp },
    ]

    const reviews = [
        { _id: "gdfghfhg", text: "Очень хорошая студия, и директор симпатичный))", user_photo: "https://img.discogs.com/YPPgYIJx-vlmLNW1ZMdSnVtkrzU=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-79949-1486060997-2610.jpeg.jpg", user_name: "Фредди Меркьюри" },
        { _id: "gdffghhg", text: "Очень хорошая студия, и директор симпатичный))", user_photo: "https://img.discogs.com/YPPgYIJx-vlmLNW1ZMdSnVtkrzU=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-79949-1486060997-2610.jpeg.jpg", user_name: "Фредди Меркьюри" },
        { _id: "gdfdfghg", text: "Очень хорошая студия, и директор симпатичный))", user_photo: "https://img.discogs.com/YPPgYIJx-vlmLNW1ZMdSnVtkrzU=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-79949-1486060997-2610.jpeg.jpg", user_name: "Фредди Меркьюри" },
        { _id: "gdfhfghg", text: "Очень хорошая студия, и директор симпатичный))", user_photo: "https://img.discogs.com/YPPgYIJx-vlmLNW1ZMdSnVtkrzU=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-79949-1486060997-2610.jpeg.jpg", user_name: "Фредди Меркьюри" },
        { _id: "gdfashg", text: "Очень хорошая студия, и директор симпатичный))", user_photo: "https://img.discogs.com/YPPgYIJx-vlmLNW1ZMdSnVtkrzU=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-79949-1486060997-2610.jpeg.jpg", user_name: "Фредди Меркьюри" },
        { _id: "gdfsdfhg", text: "Очень хорошая студия, и директор симпатичный))", user_photo: "https://img.discogs.com/YPPgYIJx-vlmLNW1ZMdSnVtkrzU=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-79949-1486060997-2610.jpeg.jpg", user_name: "Фредди Меркьюри" },
        { _id: "gdfhagg", text: "Очень хорошая студия, и директор симпатичный))", user_photo: "https://img.discogs.com/YPPgYIJx-vlmLNW1ZMdSnVtkrzU=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-79949-1486060997-2610.jpeg.jpg", user_name: "Фредди Меркьюри" },
        { _id: "gdfasdfhg", text: "Очень хорошая студия, и директор симпатичный))", user_photo: "https://img.discogs.com/YPPgYIJx-vlmLNW1ZMdSnVtkrzU=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-79949-1486060997-2610.jpeg.jpg", user_name: "Фредди Меркьюри" },
    ]

    const about = [about1, about1, about1, about1, about1]

    const partners = usePartners()

    const settings = {
        dots: true,
        autoplay: true,
        centerMode: true,
        autoplaySpeed: 10000,
        arrow: true,
        slidesToShow: 3,
    }

    return(
        <div className={classes.main}>
            <Navbar refArray={refArray}/>
            <Spy refs={refArray} className={classes.spy}/>
            <div className={classes.home} ref={homeRef}>
                <img src={micropone} data-aos="fade-right" data-aos-duration="1500" data-aos-delay="900" alt="micro" className={classes.micro}/>
                <img src={slogan} data-aos="fade-down" data-aos-duration="1500" data-aos-delay="300" alt="slogan" className={classes.slogan}/>
                <div className={classes.orderContainer} data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1500">
                    <OrderForm/>
                </div>
            </div>
            {/* <div className={classes.we} ref={previlegiesRef}>
                <div className={classes.weTitleContainer}>
                    <h2>{t("home.we.title")}</h2>
                    <p>{t("home.we.studio")} <strong>Shining Music</strong> - {t("home.we.one")}</p>
                    <p>{t("home.we.two")}</p>
                </div>
                <div className={classes.merities}>
                    {merities.map((item, index) => (
                        <div className={classes.meritie}>
                            <div className={classes.meritieBack}/>
                            <label>{index + 1}</label>
                            <img src = {item.icon} alt = "metrie"/>
                            <span>{item.text}</span>
                        </div>
                    ))}
                </div>
            </div> */}
            {/* <div className={classes.services} ref={servicesRef}>
                <div className={classes.servicesContainer}>
                    <SliderComponent items={services}/>
                </div>
            </div> */}
            
            <div className={classes.about} ref={aboutRef}>
                <h2>{t("about.title")}</h2>
                <div className={classes.aboutSliderContainer}>
                    <Slider {...settings} className={classes.sliderAbout}>
                        {about.map(item => <img src={item} alt="studio_photo" key=""/>)}
                    </Slider>
                </div>
                <p className={classes.aboutText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed urna massa. Maecenas vel risus sagittis, placerat dolor vitae, interdum nibh. Aenean vestibulum eleifend sapien, quis rhoncus nulla euismod ac. Sed vel ipsum in mauris viverra placerat. Morbi tempus bibendum tortor, vel rutrum felis elementum id. Sed a nulla consequat, posuere justo vitae, rhoncus nisl. Curabitur rutrum pulvinar diam in venenatis.
                    <br/><br/>
                    Sed eget diam in dolor elementum molestie pharetra rhoncus nisl. Morbi sagittis venenatis purus non laoreet. Praesent interdum ipsum vel eros facilisis, sed gravida est faucibus. Maecenas porttitor mauris eget enim interdum, at vulputate augue ullamcorper. Morbi rutrum magna neque, a sollicitudin neque efficitur id. Phasellus eget magna vel ligula dignissim sollicitudin a vitae leo. Phasellus imperdiet enim vitae est pharetra, non elementum dui vulputate. Quisque vehicula enim sit amet elit ornare, a interdum ipsum consectetur. Integer viverra auctor ultrices. Cras odio orci, ullamcorper sed fringilla egestas, malesuada a mauris. Vivamus ut congue tellus. In posuere varius orci pretium posuere. Etiam sit amet lectus sed leo cursus mollis et vitae turpis. Etiam lorem ligula, volutpat euismod ante at, venenatis varius nulla. Maecenas blandit, elit ac interdum facilisis, metus ante lacinia nunc, at vehicula nibh erat in augue. Proin tempus enim quis risus imperdiet, pharetra euismod leo mollis.
                </p>
            </div>
            <div className={classes.doubleBlock} ref={itemsRef}>
                <div className={cx(classes.doubleSide, classes.news)}>
                    <img src={news_lines} alt="lines" className={classes.newsLines}/>
                    <h2>{t("news.title")}</h2>
                    <div className={classes.itemsWrapper}>
                        {news.slice(0, 3).map(item => <NewsItem item={item} key={item._id}/>)}
                    </div>
                    <CustomButton text={t("actions.all")} className={classes.lookAll} action={viewAllNews}/>
                </div>
                <div className={cx(classes.doubleSide, classes.releases)}>
                    <img src={releases_lines} alt="lines" className={classes.releasesLines}/>
                    <h2>{t("releases.title")}</h2>
                    <div className={classes.itemsWrapper}>
                        {music.slice(0, 3).map((item, index) => 
                            <div className={classes.itemContainer}>
                                <img src={vinyl} alt="vinyl" className={cx(classes.vinyl, currentTrack === index && classes.activeVinyl)}/>
                                <ReleaseItem item={item} key={item._id} index={index} setCurrentTrack={setCurrentTrack} currentTrack={currentTrack}/>
                            </div>)}
                    </div>
                    <CustomButton text={t("actions.all")} className={classes.lookAll} action={viewAllReleases}/>
                </div>
            </div>
            <div className={classes.reviews} ref={commentsRef}>
                <h2>{t("reviews.title")}</h2>
                <img src={coma} alt="coma" className={classes.coma}/>
                <ScrollContainer className={classes.reviewsWrapper} hideScrollbars={false} horizontal vertical={false}>
                    {reviews.map(item => <ReviewItem item={item} key={item._id}/>)}
                </ScrollContainer>
                <CustomButton text={t("actions.review")} className={classes.makeReviewBut}/>
            </div>
            {/* <div className={classes.order} ref={orderRef}>
                <h3>{t("order.title")}</h3>
                <div className={classes.orderContainer} data-aos="fade-up" data-aos-duration="1500">
                    <OrderForm/>
                </div>
            </div> */}
            {/* <div className={classes.partners} ref={clientsRef}>
                <h2>{t("partners.title")}</h2>
                <div className={classes.partnersSliderContainer}>
                    <Slider {...settings} dots={false}>
                        {partners.map(item => <img src={item.img} key={item.id} alt="partner" className={classes.partner}/>)}
                    </Slider>
                </div>
            </div> */}
            <div className={classes.map} ref={mapRef}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10705.115485554334!2d35.05555530661709!3d47.87292777408983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc640f5e5b36c3%3A0x637afc1845c25c28!2z0KHRgtGD0LTRltGPINC30LLRg9C60L7Qt9Cw0L_QuNGB0YMgU2hpbmluZyBNdXNpYw!5e0!3m2!1sru!2sua!4v1631712606516!5m2!1sru!2sua" allowFullScreen="" loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default Main