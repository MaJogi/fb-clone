import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import ChatIcon from '@mui/icons-material/Chat'
import PeopleIcon from '@mui/icons-material/People'
import StorefrontIcon from '@mui/icons-material/Storefront'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMore'

function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow
        /*src={user.photoURL}*/ /*title={user.displayName}*/
        src='https://media-exp1.licdn.com/dms/image/C4E03AQHK95wKsz3GDQ/profile-displayphoto-shrink_200_200/0/1596897924830?e=1659571200&v=beta&t=rqxR_KtU0CAQySHYIlwjhe5qJCFldzFegFySVbiwZAw'
        title='Johnny Bravo'
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title='COVID-19 Information Center'
      />
      <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
      <SidebarRow Icon={PeopleIcon} title='Friends' />
      <SidebarRow Icon={ChatIcon} title='Messenger' />
      <SidebarRow Icon={StorefrontIcon} title='Marketplace' />
      <SidebarRow Icon={VideoLibraryIcon} title='Videos' />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title='Marketplace' />
    </div>
  )
}

export default Sidebar
