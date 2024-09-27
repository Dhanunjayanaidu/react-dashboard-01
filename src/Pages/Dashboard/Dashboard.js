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
    [getItem("Dashboard", "/dashboard", <HomeOutlined />)],
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
      getItem("Components", "sub2", <DatabaseOutlined />, [
        getItem("Option 5", "/option-five"),
        getItem("Option 6", "/option-six"),
        getItem("Submenu", "sub3", null, [
          getItem("Option 7", "7"),
          getItem("Option 8", "8"),
        ]),
      ]),
      getItem("Elements", "sub4", <InboxOutlined />, [
        getItem("Option 9", "9"),
        getItem("Option 10", "10"),
        getItem("Option 11", "11"),
        getItem("Option 12", "12"),
      ]),
    ],
    "group"
  ),
  getItem("Navigation One", "sub1", <MailOutlined />, [
    getItem(
      "Item 1",
      "g1",
      null,
      [getItem("Option 1", "1"), getItem("Option 2", "2")],
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
    [getItem("Pages", "13", <GiftOutlined />), getItem("Option 14", "14")],
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
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default Dashboard;
