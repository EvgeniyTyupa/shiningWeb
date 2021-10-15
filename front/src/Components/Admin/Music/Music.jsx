import MusicAddForm from '../../Forms/Admin/Music/MusicAddForm'
import TabLayout from '../../UI/Admin/TabLayout/TabLayout'
import classes from './Music.module.css'

const Music = (props) => {
    const { music } = props
    return(
        <TabLayout header="Music" AddComponent={MusicAddForm}>
            
        </TabLayout>
    )
}

export default Music