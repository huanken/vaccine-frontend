import React from "react";
import { Layout } from "antd";

import { Navbar, Nav, Form, Input, Row, Col } from "reactstrap";
import { Search } from "react-feather";
import { Container } from "reactstrap";

import intro from "../../assets/img/photos/logoNav.png";
import Appointments from "../dashboards/Default/Appointments";
import BarChart from "../dashboards/Default/BarChart";
import Calendar from "../dashboards/Default/Calendar";
import Feed from "../dashboards/Default/Feed";
import Header2 from "../dashboards/Default/Header";
import LineChart from "../dashboards/Default/LineChart";
import PieChart from "../dashboards/Default/PieChart";
import Projects from "../dashboards/Default/Projects";
import Statistics from "../dashboards/Default/Statistics";

const Landing = () => {
  const { Header, Footer, Content } = Layout;

  return (
    <React.Fragment>
      <Header>
        <Navbar color="Gray" light expand>
          <a className="sidebar-brand" href="/">
            <span className="align-middle">
              <b>
                <h3>Vaccine Management</h3>
              </b>
            </span>
          </a>

          <Form inline>
            <Input
              type="text"
              placeholder="Search something..."
              aria-label="Search"
              className="form-control-no-border mr-sm-1"
            />
            <Search type="button" className="align-middle mr-1" size={18} ></Search>
          </Form>

          <Row>
            <Col xs="12">
              <a className="sidebar-brand" href="/" style={{ color: "#000" }}>
                Home
              </a>
            </Col>
          </Row>

          <Row>
            <Col xs="12">
              <a className="sidebar-brand" href="/" style={{ color: "#000" }}>
                About us
              </a>
            </Col>
          </Row>

          <Row>
            <Col xs="12">
              <a className="sidebar-brand" href="/" style={{ color: "#000" }}>
                News
              </a>
            </Col>
          </Row>

          <Row>
            <Col xs="12">
              <a className="sidebar-brand" href="/" style={{ color: "#000" }}>
                {/*  */}
              </a>
            </Col>
          </Row>

          <Nav className="ml-auto">
            <a className="sidebar-brand" href="/auth/sign-in" style={{ color: "#000" }}>
              Sign in/Register
            </a>
          </Nav>
        </Navbar>
      </Header>

      <br /><br />
      <Header2 />
      {/*  */}
      <Container fluid className="p-0"  >

        <Row style={{padding: '15px'}} >
        <Col lg="12">
        <Statistics />
        </Col>
        </Row>

        <Row style={{padding: '20px',paddingTop:'0px'}} >
          <Col lg="8" className="d-flex">
            <LineChart />
          </Col>
          <Col lg="4" className="d-flex">
            <Calendar />
          </Col>
        </Row>

        <Row style={{padding: '20px',paddingTop:'0px'}}>
          <Col lg="6" xl="4" className="d-flex">
            <Feed />
          </Col>
          <Col lg="6" xl="4" className="d-flex">
            <PieChart />
          </Col>
          <Col lg="6" xl="4" className="d-flex">
            <Appointments />
          </Col>
        </Row>

      </Container>
      {/*  */}



      <Footer style={{ textAlign: "center" }}>
        © 2021 Vaccination. All Rights Reserved.
      </Footer>
    </React.Fragment>
  );
};

export default Landing;