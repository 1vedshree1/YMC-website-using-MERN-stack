import React from 'react';
import { Menu } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
    <a href="/home"><h1>Home</h1></a>
    </Menu.Item>

    <Menu.Item>
    <a href="/"><h1>Products</h1></a>
    </Menu.Item>
  

    <SubMenu title={<span>Activities</span>}>
      <MenuItemGroup title="">
        <Menu.Item key="setting:1"><a href="/education">Educational</a></Menu.Item>
        <Menu.Item key="setting:2"><a href="/health">Health</a></Menu.Item>
        <Menu.Item key="setting:3"><a href="/disaster">Disaster Relief</a></Menu.Item>
        <Menu.Item key="setting:4"><a href="/livelihood">Livelihood</a></Menu.Item>

      </MenuItemGroup>
      
    </SubMenu>

    <Menu.Item>
    <a href="/contact"><h1>Contact Us</h1></a>
    </Menu.Item>

    
  </Menu>
  )
}

export default LeftMenu