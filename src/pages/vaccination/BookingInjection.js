import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import "../../assets/css/components/BookingInjection.css";
import FormForRelative from "../vaccination/FormRegisterForRelative"

const BookingInjection = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <div tabs className="tabs">
        <button id = "nav-tabs1"
                className={classnames({ active: activeTab === '1' })}
                onClick={() => { toggle('1'); }}
                >
                    Đăng kí cho bản thân
        </button>
        <button id = "nav-tabs2"
                className={classnames({ active: activeTab === '2' })}
                onClick={() => { toggle('2'); }}
                >
                    Đăng kí cho người thân
        </button>
      </div>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
         {/* aa */}
        </TabPane>
        <TabPane tabId="2">
          {/* <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row> */}
          <FormForRelative/>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default BookingInjection;