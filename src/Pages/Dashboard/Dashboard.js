import React, { useState } from "react";
import { Button, Layout, Menu, theme } from "antd";
// import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";
// import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DatabaseOutlined,
  GiftOutlined,
  MailOutlined,
  AppstoreOutlined,
  HomeOutlined,
  InboxOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem(
    "MAIN",
    "grp1",
    null,
    [getItem("Dashboard", "home", <HomeOutlined />)],
    "group"
  ),
  getItem(
    "WIDGETS",
    "grp2",
    null,
    [getItem("Widgets", "/home", <AppstoreOutlined />)],
    "group"
  ),
  getItem(
    "ELEMENTS",
    "grp3",
    null,
    [
      getItem("Comments", "sub2", <DatabaseOutlined />, [
        getItem("Comments Page", "comments"),
        getItem("Option 6", "/option-six"),
        getItem("Submenu", "sub3", null, [
          getItem("Option 7", "7"),
          getItem("Option 8", "8"),
        ]),
      ]),
      getItem("Posts Set", "sub4", <InboxOutlined />, [
        getItem("Posts Page 1", "posts"),
        getItem("Posts Page 2", "10"),
        getItem("Posts Page 4", "11"),
        getItem("Posts Page 4", "12"),
      ]),
    ],
    "group"
  ),
  getItem("Albums Set", "sub1", <MailOutlined />, [
    getItem(
      "Item 1",
      "g1",
      null,
      [getItem("Albums Page 1", "albums"), getItem("Albums Page 2", "2")],
      "group"
    ),
    getItem(
      "Item 2",
      "g2",
      null,
      [getItem("Option 3", "3"), getItem("Option 4", "4")],
      "group"
    ),
  ]),

  {
    type: "divider",
  },

  getItem(
    "PAGES",
    "grp5",
    null,
    [
      getItem("Photos Page", "photos", <GiftOutlined />),
      getItem("Todos", "todos", <GiftOutlined />),
    ],
    "group"
  ),

  getItem(
    "Profile",
    "grp5",
    null,
    [
      getItem("Users Page", "users", <GiftOutlined />),
      getItem("Maps", "maps", <GiftOutlined />),
    ],
    "group"
  ),
];
function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const navigate = useNavigate();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className='menuSet' />

          <Menu
            className='py-3'
            defaultSelectedKeys={['1']}
            // defaultOpenKeys={["sub1"]}
            mode='inline'
            theme='dark'
            // inlineCollapsed={collapsed}
            items={items}
            // onClick={(info) => {
            //   console.log(info.key);
            // }}
            onClick={({ key }) => {
              if (key === '/') {
              } else {
                navigate(key);
              }
            }}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type='text'
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            className='m-4 p-4 shadow-sm'
            style={{
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default Dashboard;
