import React from 'react';
import classes from './Appbar.module.css';
// import Navigationitems from '../NavigationItems/NavigationItems';
// import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const appBar=(props)=>(
    <header className={classes.Toolbar}>
        {/* <DrawerToggle clicked={props.DrawerToggleClicked} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <Navigationitems isAuthenticated={props.isAuth} />
        </nav> */}
    </header>
)

export default appBar;