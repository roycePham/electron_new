import React from 'react';
import { Menu, MenuItemLink } from 'react-admin';

const CustomMenu = (props) => (
    <Menu {...props}>
        <MenuItemLink to="/posts" primaryText="Posts" />
        <MenuItemLink to="/comments" primaryText="Comments" />
        {/* Thêm các mục menu khác tùy ý */}
    </Menu>
);

export default CustomMenu;