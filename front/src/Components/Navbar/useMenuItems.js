import { useTranslation } from 'react-i18next'
import logo from '../../Assets/icons/logo.svg'

export const useMenuItems = () => {
    const { t } = useTranslation()

    const menuItems = [
        {
            path: "/",
            text: t("navbar.main")
        },
        {
            path: "/services",
            text: t("navbar.services")
        },
        {
            path: "/news",
            text: t("navbar.news")
        },
        {
            path: "/artists",
            text: t("navbar.artists")
        },
        {
            path: "/",
            img: logo
        },
        {
            path: "/label",
            text: t("navbar.label")
        },
        {
            path: "/about",
            text: t("navbar.about")
        },
        {
            path: "/contacts",
            text: t("navbar.contacts")
        },
    ]

    return menuItems
}