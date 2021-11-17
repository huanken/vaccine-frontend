import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Col,
  Container,
  Row,
  Button,
} from "reactstrap";
import { Formik, FastField, Form } from 'formik';
import * as Yup from 'yup';
import RelativeApi from '../../api/RelativeApi';
import { ReactstrapInput } from "reactstrap-formik";
import { toastr } from "react-redux-toastr";
import { connect } from 'react-redux';
import { useState } from "react";
import { Redirect } from 'react-router-dom';

const FormForRelative = (props) => {
  const showSuccessNotification = (title, message) => {
    const options = {
      timeOut: 5000,
      showCloseButton: false,
      progressBar: false,
      position: "top-right"
    };

    // show notification
    toastr.success(title, message, options);
  }

  const showWrongNotification = (title, message) => {
    const options = {
      timeOut: 5000,
      showCloseButton: false,
      progressBar: false,
      position: "top-right"
    };

    // show notification
    toastr.error(title, message, options);
  }

  const [infoRegister, setInfoRegister] = useState({
    fullname: '',
    age: '',
    address: '',
    citizenId: '',
    date: '',
  });

  return (
    <Container fluid className="p-0">
      <br />
      <br />
      <h1 className="h3 mb-3">Đăng ký cho người thân</h1>
      <Card>
        <CardHeader tyle={{ paddingBottom: "3px" }}>
          <br />
          <h4 className="card-subtitle text-muted">
            Lưu ý:
          </h4>
          <ul style={{ marginLeft: "15px", marginTop: "15px" }}>
            <li> <h6>
              Việc đăng ký thông tin hoàn toàn bảo mật và phục vụ cho chiến dịch tiêm chủng Vắc xin COVID - 19
            </h6> </li>
            <li> <h6>
              Xin vui lòng kiểm tra kỹ các thông tin bắt buộc
            </h6> </li>
            <li> <h6>
              Bằng việc nhấn nút "Confirm", bạn hoàn toàn hiểu và đồng ý chịu trách nhiệm với các thông tin đã cung cấp.
            </h6> </li>
          </ul>
        </CardHeader >
        <CardBody style={{ paddingTop: "0px" }}>
          <Formik
            enableReinitialize
            initialValues={
              {
                fullname: infoRegister.fullname,
                age: infoRegister.age,
                address: infoRegister.address,
                citizenId: infoRegister.citizenId,
                date: infoRegister.date,
                startDate: new Date(),
              }
            }
            validationSchema={
              Yup.object({
                fullname: Yup.string()
                  .required('Required')
                  .max(50, 'Must be between 5 to 50 characters')
                  .min(5, 'Must be between 5 to 50 characters'),
                address: Yup.string()
                  .required('Required')
                  .max(255, 'Must be between 5 to 255')
                  .min(5, 'Must be between 5 to 255'),
                age: Yup.number()
                  .required('Required')
                  .min(12, 'Must be higher than 12'),
                citizenId: Yup.string()
                  .required()
                  .matches(/^[0-9]+$/, "Must be only digits")
                  .min(9, 'Must be from 9 to 20 digits')
                  .max(20, 'Must be from 9 to 20  digits'),
                date: Yup.date().min(
                  Yup.ref('startDate'),
                  "Expiry Date must be in the future"
                ),
              })
            }
            onSubmit={
              async values => {
                setInfoRegister(values);
                try {
                  await RelativeApi.register(values.fullname, values.age, values.address, values.citizenId, values.date);
                  // show notification
                  showSuccessNotification(
                    "Register For Injection",
                    "Register For Injection Successfully!");
                  // reload group page
                  // refreshForm();
                  // props.history.push("/injection");
                  setInfoRegister({
                    fullname: '',
                    age: '',
                    address: '',
                    citizenId: '',
                    date: '',
                  })
                } catch (error) {
                  console.log(error);
                  showWrongNotification(
                    "Register For Injection Fail!",
                    error.data.message
                  );
                  // if(error.status === 401 || error.status === 403){
                  //   console.log(error.data.status);
                  //   props.history.push("/auth/sign-in")
                  // }
                }
              }
            }
          >
            {({ isSubmitting }) => (
              <Form>
                <>
                  <Row>
                    <Col md={{ size: "10", offset: 1 }}>
                      <FastField
                        label="Fullname"
                        bsSize="lg"
                        type="text"
                        name="fullname"
                        placeholder="Enter Fullname"
                        component={ReactstrapInput}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={{ size: "10", offset: 1 }}>
                      <FastField
                        label="Age"
                        bsSize="lg"
                        type="number"
                        name="age"
                        placeholder="Enter Age"
                        component={ReactstrapInput}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={{ size: "10", offset: 1 }}>
                      <FastField
                        label="Address"
                        bsSize="lg"
                        type="text"
                        name="address"
                        placeholder="Enter Address"
                        component={ReactstrapInput}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={{ size: "10", offset: 1 }}>
                      <FastField
                        label="CitizenID"
                        bsSize="lg"
                        type="number"
                        name="citizenId"
                        placeholder="Enter CitizenID"
                        component={ReactstrapInput}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={{ size: "10", offset: 1 }}>
                      <FastField
                        label="Desired date to be injected"
                        bsSize="lg"
                        type="date"
                        name="date"
                        component={ReactstrapInput}
                      />
                    </Col>
                  </Row>

                  <Row style={{ marginTop: "20px" }}>
                    <Col md="12" align="center">
                      < Button
                        className="align-middle mr-5"
                        color="outline-danger"
                        size="lg"
                        type="button"
                        onClick={() => setInfoRegister({
                          fullname: '',
                          age: '',
                          address: '',
                          citizenId: '',
                          date: '',
                        })}
                      >
                        Cancel
                      </ Button>
                      < Button
                        className="align-middle mr-5"
                        color="outline-dark"
                        size="lg"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Confirm
                      </ Button>
                    </Col>
                  </Row>
                </>
              </Form >
            )}
          </Formik>
        </CardBody >
      </Card>
    </Container >
  )
};

const mapGlobalStateToProps = state => {
  return {

  };
};

export default connect(mapGlobalStateToProps, null)(FormForRelative);
