import { useTranslation } from "react-i18next"
import { connect } from "react-redux"
import { setIsMailSended } from "../../../Redux/commonReducer"
import BackgroundContainer from "../../UI/BackgroundContainer/BackgroundContainer"
import ModalLayout from "../../UI/ModalLayout/ModalLayout"
import classes from './MailSuccess.module.css'

const MailSuccess = (props) => {
    const { t } = useTranslation()

    const handleModal = () => {
        props.setIsMailSended(false)
    }

    return(
        <BackgroundContainer>
            <ModalLayout onClose={handleModal}>
                <div className={classes.main}>
                    <p>{t("mailSended")}</p>
                </div>
            </ModalLayout>
        </BackgroundContainer>
    )
}

export default connect(null, {
    setIsMailSended
})(MailSuccess)