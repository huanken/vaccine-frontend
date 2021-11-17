import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button,
  Modal,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { getListUserAction, updateSelectedRowsAction } from '../../redux/actions/userActions';
import { connect } from "react-redux";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from 'react-bootstrap-table2-paginator';
import { selectListUser, selectPage, selectSize, selectSortField, selectSortType, selectTotalElement, selectSelectedRows } from '../../redux/selectors/userSelector';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import filterFactory, { customFilter } from 'react-bootstrap-table2-filter';
import CustomSearch from './CustomSearch';
import * as Icon from "react-feather";
import { useState } from "react";
import { toastr } from "react-redux-toastr";
import { Edit2 } from "react-feather";
import { Formik, FastField, Form, Field } from 'formik';
import UserApi from '../../api/UserApi'
import * as Yup from 'yup';
import { ReactstrapInput } from "reactstrap-formik";

const User = (props) => {

  const getListUsers = props.getListUserAction;
  const size = props.size;

  const showSuccessNotification = (title, message) => {
    const options = {
      timeOut: 2500,
      showCloseButton: false,
      progressBar: false,
      position: "top-right"
    };

    // show notification
    toastr.success(title, message, options);
  }

  const showWrongNotification = (title, message) => {
    const options = {
      timeOut: 2500,
      showCloseButton: false,
      progressBar: false,
      position: "top-right"
    };

    // show notification
    toastr.error(title, message, options);
  }

  useEffect(() => {
    getListUsers(1, size);
  }, [getListUsers, size]);

  // create
  const [isOpenModalCreate, setOpenModalCreate] = useState(false);

  // update
  const [updateUserInfo, setUpdateUserInfo] = useState({});
  const [isOpenModalUpdate, setOpenModalUpdate] = useState(false);

  const updateUser = async (userID) => {
    setOpenModalUpdate(true);
    const data = await UserApi.getById(userID);
    setUpdateUserInfo(data.details.user);
  }

  const actionFormatter = (cell, row, rowIndex) => {
    return (
      <>
        <Edit2 className="align-middle mr-2" size={18}
          onClick={() => updateUser(row.id)}
        />
        {" "}
        <Icon.Trash className="align-middle mr-2" size={18}
          onClick={() => deleteUser(row.id)}
        />
      </>
    );
  };
  // delete 
  const deleteUser = async (id) => {
    let result = window.confirm("Do you want to delete this ?");
    if (result) {
      if (id === null || id === undefined) {
        showWrongNotification(
          "Delete User",
          "Sorry, Cann't Delete"
        );
      } else {
        try {
          await UserApi.deleteById(id);
          // show notification
          showSuccessNotification(
            "Delete User",
            "Delete User Successfully!");
          // reload group page
          refreshForm();
        } catch (error) {
          showWrongNotification(
            "Delete User",
            error.data.message
          );
        }
      }
    }
    refreshForm();
  }
  const deleteUsers = async () => {
    let result = window.confirm("Do you want to delete all selected rows ?");
    if (result) {
      if (props.selectedRows === null || props.selectedRows === undefined || props.selectedRows.length === 0) {
        showWrongNotification(
          "Delete User",
          "You have not selected the user!"
        );
      } else {
        await props.selectedRows.forEach(element => {
          UserApi.deleteById(element);
          console.log("Xóa phần tử thứ " + element);
        });
        // show notification
        showSuccessNotification(
          "Delete User",
          "Delete User Successfully!");
        // reload User page
        refreshForm();
      }
    }
    refreshForm();
  }

  const handleOnSelect = (row, isSelect) => {
    let selected = props.selectedRows;
    if (isSelect) {
      selected = [...selected, row.id]
    } else {
      selected = selected.filter(x => x !== row.id)
    }
    console.log(selected);
    props.updateSelectedRowsAction(selected)
  }
  const handleOnSelectAll = (isSelect, rows) => {
    const ids = rows.map(r => r.id);
    let selected = [];
    if (isSelect) {
      selected = ids;
    }
    props.updateSelectedRowsAction(selected);
  }

  const tableColumns = [
    {
      dataField: "id",
      text: "Id",
      sort: true,
      align: () => {
        return 'center';
      },
      headerStyle: () => {
        return {
          textAlign: 'center',
          width: '55px'
        };
      },
    },
    {
      dataField: "username",
      text: "UserName",
      sort: true,
      headerStyle: () => {
        return {
          width: '120px'
        };
      },
    },
    {
      dataField: "fullname",
      text: "FullName",
      sort: true,
      headerStyle: () => {
        return {
          width: '140px'
        };
      },
    },
    {
      dataField: "age",
      text: "Age",
      sort: true,
      align: () => {
        return 'center';
      },
      headerStyle: () => {
        return {
          textAlign: 'center',
          width: '75px'
        };
      },
    },
    {
      dataField: "address",
      text: "Address",
      sort: true
    },
    {
      dataField: "phone",
      text: "Phone",
      sort: true,
      headerStyle: () => {
        return {
          textAlign: 'center',
          width: '120px'
        };
      },
    },
    {
      dataField: "email",
      text: "Email",
      sort: true,
      headerStyle: () => {
        return {
          textAlign: 'center',
          width: '220px'
        };
      },
    },
    {
      dataField: "actions",
      text: "Actions",
      align: () => {
        return 'center';
      },
      headerStyle: () => {
        return { textAlign: 'center', width: '90px' };
      },
      formatter: actionFormatter
    }
  ];

  const handleTableChange = (type, { page, sizePerPage, sortField, sortOrder, searchText }) => {
    getListUsers(page, sizePerPage, sortField, sortOrder, searchText);
  }


  const refreshForm = () => {
    handleTableChange(
      null,
      {
        page: 1,
        sizePerPage: size,
        sortField: "id",
        sortOrder: "asc",
        searchText: "",
      }
    );
    props.updateSelectedRowsAction([]);
  }

  return (
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">User Management</h1>
      <Card>
        <CardBody>
          <ToolkitProvider
            keyField="id"
            data={props.users}
            columns={tableColumns}
            search
          >
            {
              toolkitprops => (
                <>
                  {/* Search */}
                  <Row style={{ alignItems: "flex-end" }}>
                    <Col xs="9">
                      <CustomSearch {...toolkitprops.searchProps} />
                    </Col>
                    <Col xs="3" style={{ paddingBottom: 20 }}>
                      <div className="float-right pull-right">
                        {/* <Icon.Filter className="align-middle mr-3" color="black" size={25} /> */}
                        <Icon.RefreshCcw className="align-middle mr-3" color="black" size={25} onClick={refreshForm} />
                        <Icon.PlusCircle className="align-middle mr-3" color="black" size={25} onClick={() => setOpenModalCreate(true)} />
                        <Icon.Trash2 className="align-middle mr-3" color="black" size={25} onClick={deleteUsers} />
                      </div>
                    </Col>
                  </Row>
                  <BootstrapTable
                    {...toolkitprops.baseProps}
                    bootstrap4
                    striped
                    hover
                    bordered
                    remote
                    sort={{
                      dataField: props.sortField,
                      order: props.sortType
                    }}
                    pagination={paginationFactory({
                      page: props.page,
                      totalSize: props.totalElement,
                      sizePerPage: props.size,

                      nextPageText: '>',
                      prePageText: '<',
                      withFirstAndLast: true,
                      alwaysShowAllBtns: true,

                      hideSizePerPage: true,

                    })}
                    selectRow={{
                      mode: 'checkbox',
                      clickToSelect: true,
                      selected: props.selectedRows,
                      onSelect: handleOnSelect,
                      onSelectAll: handleOnSelectAll
                    }}
                    onTableChange={handleTableChange}
                  />
                </>
              )
            }
          </ToolkitProvider>
        </CardBody>
      </Card>

      <Modal isOpen={isOpenModalCreate} style={{ maxWidth: '1050px', width: '100%' }}>
        <Formik
          enableReinitialize
          initialValues={
            {
              username: '',
              password: '',
              fullname: '',
              age: '',
              address: '',
              phone: '',
              email: '',
              citizenId: '',
              prioritize: '',
            }
          }
          validationSchema={
            Yup.object({
              username: Yup.string()
                .required('Required')
                .max(50, 'Must be between 6 to 50 characters')
                .min(6, 'Must be between 6 to 50 characters'),
              password: Yup.string()
                .required('Required')
                .max(50, 'Must be between 6 to 50 characters')
                .min(6, 'Must be between 6 to 50 characters'),
              fullname: Yup.string()
                .required('Required')
                .max(50, 'Must be between 6 to 50 characters')
                .min(6, 'Must be between 6 to 50 characters'),
              age: Yup.number()
                .required('Required')
                .min(12, 'Must be higher than 12'),
              phone: Yup.string()
                .required()
                .matches(/^[0-9]+$/, "Must be only digits")
                .min(10, 'Must be exactly 10 digits')
                .max(10, 'Must be exactly 10 digits'),
              citizenId: Yup.string()
                .required()
                .matches(/^[0-9]+$/, "Must be only digits")
                .min(9, 'Must be from 9 to 20 digits')
                .max(20, 'Must be from 9 to 20  digits'),
              email: Yup.string()
                .required('Required')
                .max(50, 'Must be between 6 to 50 characters')
                .min(6, 'Must be between 6 to 50 characters')
                .email('Invalid email address'),
              address: Yup.string()
                .required('Required')
                .max(50, 'Must be between 6 to 50 characters')
                .min(6, 'Must be between 6 to 50 characters'),
              prioritize: Yup.number()
                .required('Required')
                .max(2, 'Must be between 0 to 2')
                .min(0, 'Must be between 0 to 2')
            })
          }
          onSubmit={
            async values => {
              console.log(values);
              try {
                // call api
                await UserApi.create(/*updateUserInfo.id,*/ values.username, values.password, values.typeAccount, values.fullname, values.age, values.address, values.phone, values.email, values.citizenId, values.prioritize);
                setOpenModalCreate(false);
                console.log(values);
                // // show notification
                showSuccessNotification(
                  "Create User",
                  "Create User Successfully!");
                // reload page
                refreshForm();

              } catch (error) {
                showWrongNotification(
                  "Create Error",
                  error.data.message);
                console.log(error);
                // setOpenModalCreate(false);
                // event.preventDefault();
              }
              // }
            }
          }
        >
          {({ isSubmitting }) => (
            <Form size="lg" >
              {/* header */}
              <ModalHeader>
                Create New User
              </ModalHeader>
              {/* body */}
              <ModalBody >
                <Row style={{ height: '7px' }}>
                  <Col md="6" style={{ paddingLeft: '20px' }}>
                    Username:
                  </Col>
                  <Col md="6" style={{ paddingLeft: '20px' }}>
                    Fullname:
                  </Col>
                </Row>
                <Row >
                  <Col md="6" style={{ paddingLeft: '20px' }}>
                    <FastField
                      bsSize="lg"
                      type="text"
                      name="username"
                      placeholder="Enter Username"
                      component={ReactstrapInput}
                    />
                  </Col>
                  <Col md="6" style={{ paddingLeft: '20px' }}>
                    <FastField
                      bsSize="lg"
                      type="text"
                      name="fullname"
                      placeholder="Enter Fullname"
                      component={ReactstrapInput}
                    />
                  </Col>
                </Row>
                <Row style={{ height: '7px' }}>
                  <Col md="6" style={{ paddingLeft: '20px' }}>
                    Password:
                  </Col>
                  <Col md="6" style={{ paddingLeft: '20px' }}>
                    TypeAccount:
                  </Col>
                </Row>
                <Row >
                  <Col md="6" style={{ paddingLeft: '20px' }}>
                    <FastField
                      bsSize="lg"
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      component={ReactstrapInput}
                    />
                  </Col>
                  <Col md="6" style={{ paddingLeft: '20px' }}>
                    <FastField as="select" bsSize="lg" type="select" name="typeAccount" component={ReactstrapInput}>
                      <option value="ROLE_USER">User</option>
                      <option value="ROLE_MOD">Mod</option>
                      <option value="ROLE_ADMIN">Admin</option>
                    </FastField>
                  </Col>
                </Row>
                <Row style={{ height: '7px' }}>
                  <Col md="6" style={{ paddingLeft: '20px' }}>
                    Age:
                  </Col>
                  <Col md="6" style={{ paddingLeft: '20px' }}>
                    Address:
                  </Col>
                </Row>
                <Row >
                  <Col md="6" style={{ paddingLeft: '20px' }}>
                    <FastField
                      bsSize="lg"
                      type="number"
                      name="age"
                      placeholder="Enter Age"
                      component={ReactstrapInput}
                    />
                  </Col>
                  <Col md="6" style={{ paddingLeft: '20px' }}>
                    <FastField
                      bsSize="lg"
                      type="text"
                      name="address"
                      placeholder="Enter Address"
                      component={ReactstrapInput}
                    />
                  </Col>
                </Row>
                <Row style={{ height: '7px' }}>
                  <Col md="6" style={{ paddingLeft: '20px' }}>
                    Phone:
                  </Col>
                  <Col md="6" style={{ paddingLeft: '20px' }}>
                    Email:
                  </Col>
                </Row>
                <Row >
                  <Col md="6" style={{ paddingLeft: '20px' }}>
                    <FastField
                      bsSize="lg"
                      type="text"
                      name="phone"
                      placeholder="Enter Phone Number"
                      component={ReactstrapInput}
                    />
                  </Col>
                  <Col md="6" style={{ paddingLeft: '20px' }}>
                    <FastField
                      bsSize="lg"
                      type="text"
                      name="email"
                      placeholder="Enter Email"
                      component={ReactstrapInput}
                    />
                  </Col>
                </Row>
                <Row style={{ height: '7px' }}>
                  <Col md="6" style={{ paddingLeft: '20px' }}>
                    CitizenID:
                  </Col>
                  <Col md="6" style={{ paddingLeft: '20px' }}>
                    Prioritize:
                  </Col>
                </Row>
                <Row >
                  <Col md="6" style={{ paddingLeft: '20px' }}>
                    <FastField
                      bsSize="lg"
                      type="text"
                      name="citizenId"
                      placeholder="Enter CitizenID"
                      component={ReactstrapInput}
                    />
                  </Col>
                  <Col md="6" style={{ paddingLeft: '20px' }}>
                    <FastField
                      bsSize="lg"
                      type="number"
                      name="prioritize"
                      placeholder="Enter Prioritize"
                      component={ReactstrapInput}
                    />
                  </Col>
                </Row>
              </ModalBody >
              {/* footer */}
              < ModalFooter >
                {/* resend */}
                < Button
                  type="submit"
                  color="primary"
                  disabled={isSubmitting}
                >
                  Save
                </ Button>
                {" "}
                {/* login */}
                <Button
                  color="primary"
                  onClick={() => {
                    setUpdateUserInfo(null);
                    setOpenModalCreate(false);
                  }
                  }
                >
                  Close
                </Button>
              </ModalFooter >
            </Form >
          )}
        </Formik >
      </Modal >

      <Modal isOpen={isOpenModalUpdate} >
        <Formik
          enableReinitialize
          initialValues={
            {
              fullname: updateUserInfo ? updateUserInfo.fullname : '',
              age: updateUserInfo ? updateUserInfo.age : '',
              address: updateUserInfo ? updateUserInfo.address : '',
              phone: updateUserInfo ? updateUserInfo.phone : '',
              citizenId: updateUserInfo ? updateUserInfo.citizenId : '',
            }
          }
          validationSchema={
            Yup.object({
              fullname: Yup.string()
                .required('Required')
                .max(50, 'Must be between 6 to 50 characters')
                .min(6, 'Must be between 6 to 50 characters'),
              age: Yup.number()
                .required('Required')
                .min(12, 'Must be higher than 12'),
              address: Yup.string()
                .required('Required')
                .max(50, 'Must be between 6 to 50 characters')
                .min(6, 'Must be between 6 to 50 characters'),
              phone: Yup.string()
                .required()
                .matches(/^[0-9]+$/, "Must be only digits")
                .min(10, 'Must be exactly 10 digits')
                .max(10, 'Must be exactly 10 digits'),
              citizenId: Yup.string()
                .required()
                .matches(/^[0-9]+$/, "Must be only digits")
                .min(9, 'Must be from 9 to 20 digits')
                .max(20, 'Must be from 9 to 20  digits'),
            })
          }
          onSubmit={
            async values => {
              console.log(values);
              try {
                // call api
                await UserApi.update(updateUserInfo.id, values.username, values.password, values.fullname, values.age, values.address, values.phone, values.email, values.citizenId);
                setOpenModalUpdate(false);
                console.log(values);
                // // show notification
                showSuccessNotification(
                  "Update User",
                  "Update User Successfully!");
                // reload page
                refreshForm();

              } catch (error) {
                showWrongNotification(
                  "Update Error",
                  error.data.message);
                console.log(error);
                setOpenModalUpdate(false);
              }

            }
          }
        >
          {({ isSubmitting }) => (
            <Form>
              {/* header */}
              <ModalHeader>
                Update User
              </ModalHeader>
              {/* body */}
              <ModalBody>
                <Row>
                  <Col xs="3">
                    <Row style={{ paddingLeft: '20px', paddingTop: '30px', height: '100px' }}>
                      Fullname:
                    </Row>
                    <Row style={{ paddingLeft: '20px', height: '82px' }}>
                      Age:
                    </Row>
                    <Row style={{ paddingLeft: '20px', height: '70px' }}>
                      Address:
                    </Row>
                    <Row style={{ paddingLeft: '20px', height: '70px' }}>
                      Phone:
                    </Row>
                    <Row style={{ paddingLeft: '20px', height: '70px' }}>
                      CitizenID:
                    </Row>
                  </Col>
                  <Col xs="9">
                    <FastField
                      bsSize="lg"
                      type="text"
                      name="fullname"
                      placeholder="Enter Fullname"
                      component={ReactstrapInput}
                    />
                    <FastField
                      bsSize="lg"
                      type="number"
                      name="age"
                      placeholder="Enter Age"
                      component={ReactstrapInput}
                    />
                    <FastField
                      bsSize="lg"
                      type="text"
                      name="address"
                      placeholder="Enter Address"
                      component={ReactstrapInput}
                    />
                    <FastField
                      bsSize="lg"
                      type="text"
                      name="phone"
                      placeholder="Enter Phone Number"
                      component={ReactstrapInput}
                    />

                    <FastField
                      bsSize="lg"
                      type="number"
                      name="citizenId"
                      placeholder="Enter CitizenID"
                      component={ReactstrapInput}
                    />
                  </Col>
                </Row>
              </ModalBody >
              {/* footer */}
              < ModalFooter >
                {/* resend */}
                <Button
                  type="submit"
                  color="primary"
                  disabled={isSubmitting}
                >
                  Save
                </Button>
                {" "}
                {/* login */}
                <Button
                  color="primary"
                  onClick={() => {
                    setUpdateUserInfo(null);
                    setOpenModalUpdate(false);
                  }
                  }
                >
                  Close
                </Button>
              </ModalFooter >
            </Form >
          )}
        </Formik >
      </Modal >
    </Container >
  )
};

const mapGlobalStateToProps = state => {
  return {
    users: selectListUser(state),
    page: selectPage(state),
    size: selectSize(state),
    sortField: selectSortField(state),
    sortType: selectSortType(state),
    totalElement: selectTotalElement(state),
    selectedRows: selectSelectedRows(state),
  };
};

export default connect(mapGlobalStateToProps, { getListUserAction, updateSelectedRowsAction })(User);
