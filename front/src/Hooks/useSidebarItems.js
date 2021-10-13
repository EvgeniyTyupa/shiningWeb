import PersonIcon from '@mui/icons-material/Person';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';

export const useSidebarItems = () => {
    let items = [
        {
            id: "dashboard",
            icon: DashboardIcon,
            text: "Dashboard"
        },
        {
            id: "logout",
            icon: LogoutIcon,
            text: "Logout"
        },
        {
            id: "login",
            icon: PersonIcon,
            text: "Login" 
        }
    ]
    return items
}