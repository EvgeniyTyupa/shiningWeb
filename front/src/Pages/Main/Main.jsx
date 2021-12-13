import React, { useEffect, useRef, useState } from 'react'
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
import vinyl from '../../Assets/icons/vinyl.png'
import coma from '../../Assets/images/coma.svg'
import about1 from '../../Assets/images/about2.jpg'

import NewsItem from '../../Components/News/NewsItem/NewsItem'
import CustomButton from '../../Components/UI/Button/Button'
import ReleaseItem from '../../Components/Releases/ReleaseItem/ReleaseItem'
import ReviewItem from '../../Components/Reviews/ReviewItem/ReviewItem'
import Slider from 'react-slick'
import { usePartners } from '../../Hooks/usePartners'
import Spy from '../../Components/Spy/Spy'
import ScrollContainer from 'react-indiana-drag-scroll'
import Navbar from '../../Components/Navbar/Navbar'

import Styled from 'styled-components'
import { useMusic } from '../../Hooks/useMusic'
import { Button } from '@material-ui/core'
import { useReviews } from '../../Hooks/useReviews'

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

    const [currentGenre, setCurrentGenre] = useState(0)

    const handleGenre = (index) => {
        setCurrentGenre(index)
        setCurrentTrack(null)
    }

    const reviews = useReviews()

    const about = [about1, about1, about1, about1, about1]

    const music = useMusic()

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
                
                {/* <div className={classes.aboutSliderContainer}>
                    <Slider {...settings} className={classes.sliderAbout}>
                        {about.map(item => <img src={item} alt="studio_photo" key=""/>)}
                    </Slider>
                </div> */}
                <div className={classes.aboutBack}>
                    <AboutBack  image={about[0]}/>
                    <div className={classes.aboutTextContainer}>
                        <h2>{t("about.title")}</h2>
                        <p className={classes.aboutText}>
                            Олександр Ількаєв – досвідчений музичний продюсер, звукоінженер та засновник нашої студії Shining Music. Олександр має 15 років досвіду роботи в музичній індустрії. В 18 років він підписав свій перший контракт із лейблом у Сан-Пауло (Бразилії), а за ними контракти в Лос-Анджелесі (США) та Голд-Кості (Австралія). У 2015 році закінчив курс музичного продюсера та звукоінженера у Сан-Франциско (США). За своє життя він створив більше 1000 успішних робіт у різних стилях. Всі вони були зроблені для українських і закодронних артистів й лунають на радіостанціях по всьому світу. За свою кар’єру Олександр встиг попрацювати із Snapchat та створити на студії світову Тік Ток зірку DANIM на 10 млн підписників.
                            <br/><br/>
                            Саме такий досвід дає Олександру розуміння як швидко відчути, що шукає автор, що хоче почути слухач і як це довершено поєднати у майбутній хіт. Найважливіше – як митець, він сам розуміє на скільки важливо знайти й зберегти власний звук автора та збалансувати його із комерційним звучанням.
                        </p>
                    </div>
                </div>                
            </div>
            <div className={classes.doubleBlock} ref={itemsRef}>
                {/* <div className={cx(classes.doubleSide, classes.news)}>
                    <img src={news_lines} alt="lines" className={classes.newsLines}/>
                    <h2>{t("news.title")}</h2>
                    <div className={classes.itemsWrapper}>
                        {news.slice(0, 3).map(item => <NewsItem item={item} key={item._id}/>)}
                    </div>
                    <CustomButton text={t("actions.all")} className={classes.lookAll} action={viewAllNews}/>
                </div> */}
                <div className={cx(classes.doubleSide, classes.releases)}>
                    <img src={releases_lines} alt="lines" className={classes.releasesLines}/>
                    <h2>{t("releases.title")}</h2>
                    <div className={classes.genreButtons}>
                        {music.map((item, index) => (
                            <Button onClick={() => handleGenre(index)} className={currentGenre === index && classes.activeGenre}>{item.title}</Button>
                        ))}
                    </div>
                    <div className={classes.itemsWrapper}>
                        {music[currentGenre].music.map((item, index) => 
                            <div className={classes.itemContainer}>
                                <img src={vinyl} alt="vinyl" className={cx(classes.vinyl, currentTrack === index && classes.activeVinyl)}/>
                                <ReleaseItem item={item} key={item._id} index={index} setCurrentTrack={setCurrentTrack} currentTrack={currentTrack}/>
                            </div>)}
                    </div>
                    {/* <CustomButton text={t("actions.all")} className={classes.lookAll} action={viewAllReleases}/> */}
                </div>
            </div>
            <div className={classes.reviews} ref={commentsRef}>
                <h2>{t("reviews.title")}</h2>
                <img src={coma} alt="coma" className={classes.coma}/>
                <ScrollContainer className={classes.reviewsWrapper} hideScrollbars={false} horizontal vertical={false}>
                    {reviews.map(item => <ReviewItem item={item} key={item._id}/>)}
                </ScrollContainer>
                {/* <CustomButton text={t("actions.review")} className={classes.makeReviewBut}/> */}
                <CustomButton text="Записатись до студії" className={classes.makeReviewBut} action={() => homeRef.current.scrollIntoView()}/>
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

const AboutBack = Styled.div`
    background-image: ${({ image }) => `url(${image})`};
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    filter: blur(0px);
  -webkit-filter: blur(0px);
    width: 100%;
    height: 100vh;
    position: absolute;

    @media screen and (max-width: 1100px) {
        background-position: center;
    }
`

export default Main