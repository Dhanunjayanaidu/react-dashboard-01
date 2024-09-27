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
      <Container fluid className="pb-5 pt-3 d-none">
        <Row>
          <Col>
            {/* <h2 className="mt-4 pt-1">Dashboard page</h2>
            <p className="mb-3">
              Here is the practice react js dashboard from Dhanunjay
            </p> */}

            <p>
              <Link to="/">Home</Link>
              <Link to="home">Dashboard</Link>
              <Link to="comments">Comments</Link>
              <Link to="posts">Posts</Link>
              <Link to="albums">Albums</Link>
              <Link to="photos">Photos</Link>
              <Link to="todos">ToDos</Link>
              <Link to="users">Users</Link>
            </p>

            <h5>Dashboard Header content</h5>
            <h6>sidebar content for Dashboard</h6>
            <Outlet />
          </Col>
        </Row>
      </Container>

      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="menuSet" />

          <Menu
            className="py-3"
            defaultSelectedKeys={["1"]}
            // defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="dark"
            // inlineCollapsed={collapsed}
            items={items}
            // onClick={(info) => {
            //   console.log(info.key);
            // }}
            onClick={({ key }) => {
              if (key === "/") {
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
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {/* <p>
              <Link to="/">Home</Link>
              <Link to="home">Dashboard</Link>
              <Link to="comments">Comments</Link>
              <Link to="posts">Posts</Link>
              <Link to="albums">Albums</Link>
              <Link to="photos">Photos</Link>
              <Link to="todos">ToDos</Link>
              <Link to="users">Users</Link>
            </p>

            <h5>Dashboard Header content</h5>
            <h6>sidebar content for Dashboard</h6> */}
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default Dashboard;
