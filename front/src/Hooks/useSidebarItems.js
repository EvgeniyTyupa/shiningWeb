import PersonIcon from '@mui/icons-material/Person';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

export const useSidebarItems = () => {
    let items = [
        {
            id: "dashboard",
            icon: <DashboardIcon/>,
            text: "Dashboard"
        },
        {
            id: "news",
            icon: <DocumentScannerIcon/>,
            text: "News"
        },
        {
            id: "music",
            icon: <MusicNoteIcon/>,
            text: "Music"
        },
        {
            id: "logout",
            icon: <LogoutIcon/>,
            text: "Logout"
        }
    ]
    return items
}