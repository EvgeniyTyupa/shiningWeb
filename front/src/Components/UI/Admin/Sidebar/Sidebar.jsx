import { useSidebarItems } from '../../../../Hooks/useSidebarItems'
import classes from './Sidebar.module.css'
import Avatar from '../Avatar/Avatar'
import Styled from 'styled-components'
import { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button, IconButton } from '@mui/material'

const Sidebar = (props) => {
    const items = useSidebarItems()

    const { username, logout, setCurrentTab, currentTab } = props

    const [isCollapse, setIsCollapse] = useState(false)

    const handleCollapse = () => {
        setIsCollapse(!isCollapse)
    }

    const handleClick = (id, index) => {
        if(id == "logout"){
            logout()
        }else {
            setCurrentTab(index)
        }
    }

    return(
        <Main className={classes.main} width={isCollapse ? 5 : 13} isCollapse={isCollapse}>
            <div className={classes.header}>
                <Avatar username={username}/>
            </div>
            <div className={classes.itemsWrapper}>
                {items.map((item, index) => (
                    <Button onClick={() => handleClick(item.id, index)} key={item.id} className={currentTab === index && classes.activeTab}>
                        {item.icon}
                        {!isCollapse && <span>{item.text}</span>}
                    </Button>
                ))}
                {isCollapse ? 
                    <Button onClick={handleCollapse} className={classes.collapseBut}>
                        <ArrowForwardIosIcon/>
                    </Button>
                    :
                    <Button onClick={handleCollapse} className={classes.collapseBut}>
                        <ArrowBackIosIcon/>
                        {!isCollapse && <span>Collapse</span>}
                    </Button>
                }
            </div>
        </Main>
    )
}

const Main = Styled.div`
    width: ${({ width = 100 }) => `${width}%`};
    transition-duration: .3s;

    button {
        justify-content: ${({ isCollapse }) => isCollapse ? "center" : "flex-start"};
    }
`

export default Sidebar