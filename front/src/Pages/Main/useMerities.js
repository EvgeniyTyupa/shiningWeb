import disk from '../../Assets/icons/disk.svg'
import diplom from '../../Assets/icons/diplom.svg'
import people from '../../Assets/icons/people.svg'
import waves from '../../Assets/icons/waves.svg'
import mixer from '../../Assets/icons/mixer.svg'
import { useTranslation } from 'react-i18next'

export const useMerities = () => {
    const { t } = useTranslation()

    const merities = [
        {
            icon: disk,
            text: t("home.merities.one")
        },
        {
            icon: diplom,
            text: t("home.merities.two")
        },
        {
            icon: people,
            text: t("home.merities.three")
        },
        {
            icon: waves,
            text: t("home.merities.four")
        },
        {
            icon: mixer,
            text: t("home.merities.five")
        }
    ]

    return merities
}