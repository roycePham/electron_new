import React from 'react';
import { AppBar, UserMenu, MenuItemLink } from 'react-admin';

const CustomAppBar = (props) => (
    <AppBar {...props}>
        <img src="/path/to/logo.png" alt="Logo" />
        <UserMenu {...props}>
            <MenuItemLink to="/profile" primaryText="Profile" />
            <MenuItemLink to="/logout" primaryText="Logout" />
        </UserMenu>
    </AppBar>
);

export default CustomAppBar;