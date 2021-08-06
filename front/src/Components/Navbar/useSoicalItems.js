import FbIcon from "../Icons/FacebookIcon"
import InstaIcon from "../Icons/InstaIcon"
import SoundcloudIcon from "../Icons/SoundcloudIcon"
import SpotifyIcon from "../Icons/SpotifyIcon"
import TikTokIcon from "../Icons/TikTokIcon"
import YoutubeIcon from "../Icons/YoutubeIcon"

export const useSocialItems = () => {
    const menuItems = [
        {
            icon: <InstaIcon/>,
            href: "google.com"
        },
        {
            icon: <FbIcon/>,
            href: "google.com"
        },
        {
            icon: <YoutubeIcon/>,
            href: "google.com"
        },
        {
            icon: <SpotifyIcon/>,
            href: "google.com"
        },
        {
            icon: <SoundcloudIcon/>,
            href: "google.com"
        },
        {
            icon: <TikTokIcon/>,
            href: "google.com"
        }
    ]

    return menuItems
}