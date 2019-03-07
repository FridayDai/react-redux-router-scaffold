import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Menu, Icon } from 'antd';
import { sidebarData } from './SidebarData';

const { SubMenu, Item } = Menu;

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'selectedKeys': []
        };
    }

    render() {
        const SideTree = sidebarData.map(item => (
            <SubMenu
                key={item.key}
                title={(
                    <span>
                        <Icon type={item.title.icon} />
                        <span>{item.title.text}</span>
                    </span>
                )}
            >
                {item.children
                && item.children.map(menuItem => (
                    <Item
                        key={menuItem.key}
                        onClick={() => {
                            this.setState({ 'selectedKeys': [menuItem.key] });
                        }}
                    >
                        <Link to={menuItem.path}>{menuItem.text}</Link>
                    </Item>
                ))}
            </SubMenu>
        ));
        return (
            <Menu
                theme='light'
                subMenuOpenDelay={0.3}
                // openKeys={openKeys}
                selectedKeys={this.state.selectedKeys}
                mode='inline'
            >
                {SideTree}
            </Menu>
        );
    }
}
