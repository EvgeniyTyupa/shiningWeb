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
            href: "https://instagram.com/shmspace"
        },
        {
            icon: <FbIcon/>,
            href: "https://www.facebook.com/1224200440930088/"
        },
        {
            icon: <YoutubeIcon/>,
            href: "https://youtube.com/channel/UC3brfLLy3QrecftcrCmSEww"
        },
        {
            icon: <SpotifyIcon/>,
            href: "https://open.spotify.com/user/6scbbinf86zxwax6ehr7t6zkf?si=MSBsrpGzRamqOSGIK75I2A&utm_source=copy-link&dl_branch=1"
        },
        {
            icon: <SoundcloudIcon/>,
            href: "https://soundcloud.com/shmspace"
        },
        {
            icon: <TikTokIcon/>,
            href: "https://vm.tiktok.com/ZM8NEpWCy/"
        }
    ]

    return menuItems
}