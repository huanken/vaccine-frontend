import React from "react";
import { Col, Card, CardBody, Media, Row } from "reactstrap";

import { ShoppingCart, Activity, DollarSign, ShoppingBag } from "react-feather";

const Statistics = () => (
  <Row>
    <Col md="6" xl>
      <Card className="flex-fill">
        <CardBody className="py-4">
          <Media>
            <div className="d-inline-block mt-2 mr-3">
              <Activity className="feather-lg text-primary" />
            </div>
            <Media body>
              <h3 className="mb-2">1,543,159 (Vaccinations)</h3>
              <div className="mb-0">Total vaccine doses administered</div>
            </Media>
          </Media>
        </CardBody>
      </Card>
    </Col>
    <Col md="6" xl>
      <Card className="flex-fill">
        <CardBody className="py-4">
          <Media>
            <div className="d-inline-block mt-2 mr-3">
              <Activity className="feather-lg text-warning" />
            </div>
            <Media body>
              <h3 className="mb-2">103,683,045 (Vaccinations)</h3>
              <div className="mb-0">Total vaccine doses nationwide</div>
            </Media>
          </Media>
        </CardBody>
      </Card>
    </Col>
    <Col md="6" xl>
      <Card className="flex-fill">
        <CardBody className="py-4">
          <Media>
            <div className="d-inline-block mt-2 mr-3">
              <Activity className="feather-lg text-success" />
            </div>
            <Media body>
              <div><h3 className="mb-2">1.065.469(Today +10.223)</h3></div>
              <div className="mb-0">Number of infections</div>
            </Media>
          </Media>
        </CardBody>
      </Card>
    </Col>
    <Col md="6" xl>
      <Card className="flex-fill">
        <CardBody className="py-4">
          <Media>
            <div className="d-inline-block mt-2 mr-3">
              <Activity className="feather-lg text-danger" />
            </div>
            <Media body>
              <div><h3 className="mb-2">23.476(Today +10)</h3></div>
              <div>VN</div>
              <div className="mb-0">Number of dead case</div>
            </Media>
          </Media>
        </CardBody>
      </Card>
    </Col>
    <Col md="6" xl className="d-none d-xxl-flex">
      <Card className="flex-fill">
        <CardBody className="py-4">
          <Media>
            <div className="d-inline-block mt-2 mr-3">
              <DollarSign className="feather-lg text-info" />
            </div>
            <Media body>
              <h3 className="mb-2">$ 18.700</h3>
              <div className="mb-0">Total Revenue</div>
            </Media>
          </Media>
        </CardBody>
      </Card>
    </Col>
  </Row>
);

export default Statistics;
