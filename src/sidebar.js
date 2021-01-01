import React from 'react';
import './sidebar.css';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import StarIcon from '@material-ui/icons/Star';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InboxIcon from '@material-ui/icons/Inbox';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import SidebarOption from './sidebarOption';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';

function Sidebar() {
    return (
        <div className="sidebar">
            <Button className="button__compose" startIcon={<AddIcon fontSize="large" />}>
                Compose
            </Button>
            <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true} />
            <SidebarOption Icon={StarIcon} title="Starred" number={54} />
            <SidebarOption Icon={LabelImportantIcon} title="Important" number={54} />
            <SidebarOption Icon={NearMeIcon} title="Sent" number={54} />
            <SidebarOption Icon={NoteIcon} title="Drafts" number={54} />
            <SidebarOption Icon={ExpandMoreIcon} title="More" number={54} />
            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                <IconButton>
                    <PersonIcon />
                </IconButton>
                <IconButton>
                   <DuoIcon /> 
                </IconButton>
                <IconButton>
                    <PhoneIcon />
                </IconButton>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
