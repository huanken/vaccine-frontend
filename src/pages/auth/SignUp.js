import React from "react";

import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from "reactstrap";
import { Formik, FastField, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ReactstrapInput } from "reactstrap-formik";
import LoginApi from '../../api/LoginApi';
import { useState } from "react";
import { withRouter } from "react-router-dom";
import { toastr } from "react-redux-toastr";

const SignUp = (props) => {

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

  const [isOpenModal, setOpenModal] = useState(false);

  const handleCloseModel = () => {
    // open model
    setOpenModal(false);
    // redirect login page
    props.history.push("/auth/sign-in");
  }

  return (
    <>
      <div className="text-center mt-4">
        <h1 className="h2">Get started</h1>
        <p className="lead">
          Create account to experience the course at <b>VTI Academy</b>.
        </p>
      </div>

      <Formik
        initialValues={
          {
            fullname: '',
            username: '',
            password: '',
            confirmpassword: '',
            birthday: '',
            address: '',
            phone: '',
            email: '',
            citizenid: '',
            startDate: new Date(),
            errorForm: ''
          }
        }
        validationSchema={
          Yup.object({
            fullname: Yup.string()
              .max(50, 'Must be between 6 to 50 characters')
              .min(6, 'Must be between 6 to 50 characters')
              .required('Required'),

            username: Yup.string()
              .max(20, 'Must be between 5 to 20 characters')
              .min(5, 'Must be between 5 to 20 characters')
              .required('Required'),
            password: Yup.string()
              .required('Required')
              .max(50, 'Must be between 6 to 50 characters')
              .min(6, 'Must be between 6 to 50 characters'),
            confirmpassword: Yup.string()
              .when("password", {
                is: value => (value && value.length > 0 ? true : false),
                then: Yup.string().oneOf(
                  [Yup.ref("password")],
                  "Both password need to be the same"
                )
              })
              .required('Required'),
            email: Yup.string()
              .required('Required')
              .max(50, 'Must be between 6 to 50 characters')
              .min(6, 'Must be between 6 to 50 characters')
              .email('Invalid email address'),
            phone: Yup.string()
              .required()
              .matches(/^[0-9]+$/, "Must be only digits")
              .min(10, 'Must be exactly 10 digits')
              .max(10, 'Must be exactly 10 digits'),
            citizenid: Yup.string()
              .required()
              .matches(/^[0-9]+$/, "Must be only digits")
              .min(9, 'Must be from 9 to 20 digits')
              .max(20, 'Must be from 9 to 20  digits'),
            address: Yup.string()
              .required('Required')
              .max(50, 'Must be between 6 to 50 characters')
              .min(6, 'Must be between 6 to 50 characters'),
            birthday: Yup.date().max(
              Yup.ref('startDate'),
              "Your birthday must be in the past"
            ),
          })
        }
        onSubmit={
          async (values, { setFieldError }) => {
            try {
              console.log(values);
              let age = values.startDate.getFullYear() - new Date(values.birthday).getFullYear();
              if (age < 12) {
                throw "You must be older than 12 years to be vaccinated";
              }
              // call api
              await LoginApi.register(
                values.username, values.password, values.fullname, age, values.address, values.phone, values.email, values.citizenid);
              // open model 
              showSuccessNotification(
                "Register Account",
                "Register Successfully!");
              setOpenModal(true);
            } catch (error) {
              console.log(error);
              showWrongNotification(
                "Register Error!",
                error.data ? error.data.message : error
              );
            }
          }
        }
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ isSubmitting }) => (
          <Card>
            <CardBody>
              <div className="m-sm-4">
                <Form>
                  {/* Firstname */}
                  <FormGroup>
                    <FastField
                      label="Full Name"
                      bsSize="lg"
                      type="text"
                      name="fullname"
                      placeholder="Enter your full name"
                      component={ReactstrapInput}
                    />
                  </FormGroup>

                  {/* Lastname */}
                  <FormGroup>
                    <FastField
                      label="Username"
                      bsSize="lg"
                      type="text"
                      name="username"
                      placeholder="Enter your username"
                      component={ReactstrapInput}
                    />
                  </FormGroup>
                  {/* password */}
                  <FormGroup>
                    <FastField
                      label="Password"
                      bsSize="lg"
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      component={ReactstrapInput}
                    />
                  </FormGroup>

                  {/* confirm password */}
                  <FormGroup>
                    <FastField
                      label="Confirm Password"
                      bsSize="lg"
                      type="password"
                      name="confirmpassword"
                      placeholder="Enter confirm password"
                      component={ReactstrapInput}
                    />
                  </FormGroup>

                  <FastField
                    label="Address"
                    bsSize="lg"
                    type="text"
                    name="address"
                    placeholder="Enter Address"
                    component={ReactstrapInput}
                  />

                  <FastField
                    label="Birthdate"
                    bsSize="lg"
                    type="date"
                    format="yyyy-MM-dd HH:mm"
                    name="birthday"
                    component={ReactstrapInput}
                  />

                  {/* username */}
                  <FormGroup>
                    <FastField
                      label="Phone"
                      bsSize="lg"
                      type="text"
                      name="phone"
                      placeholder="Enter your phone number"
                      component={ReactstrapInput}
                    />
                  </FormGroup>

                  {/* email */}
                  <FormGroup>
                    <FastField
                      label="Email"
                      bsSize="lg"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      component={ReactstrapInput}
                    />
                  </FormGroup>

                  <FastField
                    label="CitizenID"
                    bsSize="lg"
                    type="number"
                    name="citizenid"
                    placeholder="Enter CitizenID"
                    component={ReactstrapInput}
                  />

                  <ErrorMessage name="errorForm" component={"div"} className="invalid-feedback" style={{ display: "block" }} />

                  {/* submit */}
                  <div className="text-center mt-3">
                    <Button type="submit" color="primary" size="lg" disabled={isSubmitting}>
                      Sign Up
                    </Button>
                  </div>
                  <div className="text-center mt-3">
                    <Button type="button" color="primary" size="lg" onClick={handleCloseModel} disabled={isSubmitting}>
                      Already have an account!
                    </Button>
                  </div>
                </Form>
              </div>
            </CardBody>
          </Card>
        )}
      </Formik>

      <Modal
        isOpen={isOpenModal}
      >
        {/* header */}
        <ModalHeader>

        </ModalHeader>

        {/* body */}
        <ModalBody className="m-3">
          <p>
            Register Success !!!
          </p>
          <p>
            Click to go to Sign in Page to login.
          </p>
        </ModalBody>

        {/* footer */}
        <ModalFooter>
          {/* resend */}
          <Button
            color="secondary"
            onClick={() => { setOpenModal(false) }}
            style={{ marginLeft: 10 }}
          >
            Close
          </Button>

          {/* login */}
          <Button
            color="primary"
            onClick={handleCloseModel}
            type="submit"
          >
            Login
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )

};

export default withRouter(SignUp);
