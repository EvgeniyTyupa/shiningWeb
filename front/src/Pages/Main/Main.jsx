import React, { useEffect } from 'react'
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
import NewsItem from '../../Components/News/NewsItem/NewsItem'
import CustomButton from '../../Components/UI/Button/Button'
import ReleaseItem from '../../Components/Releases/ReleaseItem/ReleaseItem'

const Main = (props) => {
    const { t } = useTranslation()

    const merities = useMerities()

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);


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
        { _id: "vcb" }
    ]

    const services = [
        { _id: "123", title: "запись", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", img: service_img_tmp },
        { _id: "124", title: "запись", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", img: service_img_tmp },
        { _id: "125", title: "запись", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", img: service_img_tmp },
        { _id: "126", title: "запись", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", img: service_img_tmp },
        { _id: "127", title: "запись", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", img: service_img_tmp },
    ]

    return(
        <div className={classes.main}>
            <div className={classes.home}>
                <img src={micropone} data-aos="fade-right" data-aos-duration="1500" data-aos-delay="900" alt="micro" className={classes.micro}/>
                <img src={slogan} data-aos="fade-down" data-aos-duration="1500" data-aos-delay="300" alt="slogan" className={classes.slogan}/>
                <div className={classes.orderContainer} data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1500">
                    <OrderForm/>
                </div>
            </div>
            <div className={classes.we}>
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
            </div>
            <div className={classes.services}>
                <div className={classes.servicesContainer}>
                    <SliderComponent items={services}/>
                </div>
            </div>
            <div className={classes.doubleBlock}>
                <div className={cx(classes.doubleSide, classes.news)}>
                    <img src={news_lines} alt="lines" className={classes.newsLines}/>
                    <h2>{t("news.title")}</h2>
                    <div className={classes.itemsWrapper}>
                        {news.slice(0, 3).map(item => <NewsItem item={item}/>)}
                    </div>
                    <CustomButton text={t("actions.all")} className={classes.lookAll}/>
                </div>
                <div className={cx(classes.doubleSide, classes.releases)}>
                    <img src={releases_lines} alt="lines" className={classes.releasesLines}/>
                    <h2>{t("releases.title")}</h2>
                    <div className={classes.itemsWrapper}>
                        {music.slice(0, 3).map(item => <ReleaseItem/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main