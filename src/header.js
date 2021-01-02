import React from 'react';
import './header.css'
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useSelector } from 'react-redux';
import { selectUser, logout } from './features/userSlice';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';

function Header() {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout())
        })
    }

    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src="./gmail.png" />
            </div>
            <div className="header__middle">
                <SearchIcon className="search__icon" />
                <input type="text" placeholder="Search Mail" />
                <ArrowDropDownIcon className="drop__down" />
            </div>
            <div className="header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar onClick={signOut} src={user?.photoUrl} />
            </div>
        </div>
    )
}

export default Header;
