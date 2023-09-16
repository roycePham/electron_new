import React from 'react';
import { Layout } from 'react-admin';
import CustomMenu from './CustomMenu';

const CustomLayout = (props) => (
    <Layout {...props}>
        <MenuItemLink to="/posts" primaryText="Posts" />
        <MenuItemLink to="/comments" primaryText="Comments" />
        <MenuItemLink to="/users" primaryText="Users" />
        <MenuItemLink to="/categories" primaryText="Categories" />
        {/* <CustomMenu {...props} />
        <div>
            {props.children}
        </div> */}
    </Layout>
);

export default CustomLayout;