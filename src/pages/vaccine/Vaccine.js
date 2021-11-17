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
  Modal
} from "reactstrap";
import { connect } from "react-redux";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import filterFactory, { customFilter } from 'react-bootstrap-table2-filter';
import CustomSearch from './CustomSearch';
import * as Icon from "react-feather";
import { useState } from "react";
import { getListVaccineAction, updateSelectedRowsAction } from '../../redux/actions/vaccineActions';
import { selectListVaccine, selectPage, selectSize, selectSortField, selectSortType, selectTotalElement, selectSelectedRows } from '../../redux/selectors/vaccineSelector';
import { Formik, FastField, Form } from 'formik';
import * as Yup from 'yup';
import { ReactstrapInput } from "reactstrap-formik";
import VaccineApi from '../../api/VaccineApi';
import { toastr } from "react-redux-toastr";
import { Edit2 } from "react-feather";


const Vaccine = (props) => {

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

  const getListVaccines = props.getListVaccineAction;
  const size = props.size;

  useEffect(() => {
    getListVaccines(1, size);
  }, [getListVaccines, size]);

  // create
  const [isOpenModalCreate, setOpenModalCreate] = useState(false);

  // update
  const [updateVaccineInfo, setUpdateVaccineInfo] = useState(null);
  const updateVaccine = async (vaccineID) => {
    setOpenModalCreate(true);
    const data = await VaccineApi.getById(vaccineID);
    data.details.vaccine.expiryDate = data.details.vaccine.expiryDate.split(" ", 1);
    console.log(data);
    setUpdateVaccineInfo(data.details.vaccine);
  }

  const actionFormatter = (cell, row, rowIndex) => {
    return (
      <>
        <Edit2 className="align-middle mr-2" size={18}
          onClick={() => updateVaccine(row.id)}
        />
        {" "}
        <Icon.Trash className="align-middle mr-2" size={18}
          onClick={() => deleteVaccine(row.id)}
        />
      </>
    );
  };

  // delete 
  const deleteVaccine = async (id) => {
    let result = window.confirm("Do you want to delete this ?");
    if (result) {
      if (id === null || id === undefined) {
        showWrongNotification(
          "Delete Vaccine",
          "Sorry, Cann't Delete"
        );
      } else {
        try {
        await VaccineApi.deleteById(id);
           // show notification
        showSuccessNotification(
          "Delete Vaccine",
          "Delete Vaccine Successfully!");
        // reload group page
        refreshForm();
        } catch (error) {
          showWrongNotification(
            "Delete Vaccine",
            error.data.message
          );
        }
      }
    }
    refreshForm();
  }
  const deleteVaccines = async () => {
    let result = window.confirm("Do you want to delete all selected rows ?");
    if (result) {
      if (props.selectedRows === null || props.selectedRows === undefined || props.selectedRows.length === 0) {
        showWrongNotification(
          "Delete Vaccine",
          "You have not selected the vaccine!"
        );
      } else {
        await props.selectedRows.forEach(element => {
          VaccineApi.deleteById(element);
          console.log("Xóa phần tử thứ " + element);
        });
        // show notification
        showSuccessNotification(
          "Delete Vaccine",
          "Delete Vaccine Successfully!");
        // reload vaccine page
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

  const handleTableChange = (type, { page, sizePerPage, sortField, sortOrder, searchText }) => {
    getListVaccines(page, sizePerPage, sortField, sortOrder, searchText);
  }

  // Refresh form 
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

  const tableColumns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
      align: () => {
        return 'center';
      },
      headerStyle: () => {
        return {
          textAlign: 'center',
          width: '57px'
        };
      },
    },
    {
      dataField: "name",
      text: "Name",
      sort: true,
      headerStyle: () => {
        return {
          width: '135px'
        };  
      },
    },
    {
      dataField: "description",
      text: "Description",
      sort: true
    },
    {
      dataField: "price",
      text: "Price",
      sort: true,
      align: () => {
        return 'center';
      },
      headerStyle: () => {
        return {
          textAlign: 'center',
          width: '95px'
        };
      },
    },
    {
      dataField: "amount",
      text: "Amount",
      sort: true,
      align: () => {
        return 'center';
      },
      headerStyle: () => {
        return {
          textAlign: 'center',
          width: '95px'
        };
      },
    },
    {
      dataField: "manufacture",
      text: "Manufacture",
      sort: true,
      headerStyle: () => {
        return {
          width: '139px'
        };
      },
    },
    {
      dataField: "expiryDate",
      text: "ExpiryDate",
      sort: true,
      headerStyle: () => {
        return {
          width: '150px'
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

  return (
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Vaccine Management</h1>
      <Card>
        <CardBody>
          <ToolkitProvider
            keyField="id"
            data={props.vaccines}
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
                        <Icon.Trash2 className="align-middle mr-3" color="black" size={25} onClick={deleteVaccines} />
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

      <Modal isOpen={isOpenModalCreate} >
        <Formik
          enableReinitialize
          initialValues={
            {
              vaccineName: updateVaccineInfo ? updateVaccineInfo.name : '',
              description: updateVaccineInfo ? updateVaccineInfo.description : '',
              price: updateVaccineInfo ? updateVaccineInfo.price : '',
              amount: updateVaccineInfo ? updateVaccineInfo.amount : '',
              expiryDate: updateVaccineInfo ? updateVaccineInfo.expiryDate : '',
              manufacture: updateVaccineInfo ? updateVaccineInfo.manufacture : '',
              startDate: new Date(),
            }
          }
          validationSchema={
            Yup.object({
              vaccineName: Yup.string()
                .required('Required')
                .max(50, 'Must be between 5 to 50 characters')
                .min(5, 'Must be between 5 to 50 characters'),
              description: Yup.string()
                .required('Required')
                .max(255, 'Must be between 5 to 255')
                .min(5, 'Must be between 5 to 255'),
              price: Yup.number()
                .required('Required')
                .min(100, 'Must be higher than 100'),
              amount: Yup.number()
                .required('Required')
                .min(1, 'Must be higher than 1'),
              expiryDate: Yup.date().min(
                Yup.ref('startDate'),
                "Expiry Date must be in the future"
              ),
              manufacture: Yup.string()
                .required('Required')
                .max(50, 'Must be between 5 to 50')
                .min(5, 'Must be between 5 to 50'),
            })
          }
          onSubmit={
            async values => {
              console.log(values);
              if (updateVaccineInfo) {
                try {
                  // call api
                  console.log(updateVaccineInfo);
                  await VaccineApi.update(updateVaccineInfo.id, values.vaccineName, values.description, values.price, values.amount, values.expiryDate, values.manufacture);
                  setOpenModalCreate(false);
                  // // show notification
                  showSuccessNotification(
                    "Update Vaccine",
                    "Update Vaccine Successfully!");
                  // reload page
                  refreshForm();
                  setUpdateVaccineInfo(null);
                } catch (error) {
                  showWrongNotification(
                    "Update Error",
                    error.data.message);
                  console.log(error);
                  // props.history.push("/auth/500");
                }
              } else {
                try {
                  // call api
                  await VaccineApi.create(values.vaccineName, values.description, values.price, values.amount, values.expiryDate, values.manufacture);
                  setOpenModalCreate(false);
                  console.log(values);
                  // // show notification
                  showSuccessNotification(
                    "Create Vaccine",
                    "Create Vaccine Successfully!");
                  // reload page
                  setUpdateVaccineInfo(null);
                  refreshForm();

                } catch (error) {
                  showWrongNotification(
                    "Create Error",
                    error.data.message);
                  console.log(error);
                  setOpenModalCreate(false);
                  // props.history.push("/auth/500");
                }
              }
            }
          }
        >
          {({ isSubmitting }) => (
            <Form>
              {/* header */}
              <ModalHeader>
                Create New Vaccine
              </ModalHeader>
              {/* body */}
              <ModalBody>
                <Row>
                  <Col xs="3">
                    <Row style={{paddingLeft: '20px', paddingTop: '30px', height: '100px' }}>
                      Vaccine Name:
                    </Row>
                    <Row  style={{paddingLeft: '20px', height: '80px' }}>
                      Description:
                    </Row>
                    <Row style={{paddingLeft: '20px', height: '70px' }}>
                      Price:
                    </Row>
                    <Row style={{paddingLeft: '20px', height: '80px' }}>
                      Amount:
                    </Row>
                    <Row style={{paddingLeft: '20px', height: '70px' }}>
                      Expiry Date:
                    </Row>
                    <Row style={{paddingLeft: '20px', height: '70px' }}>
                      Manufacture:
                    </Row>
                  </Col>
                  <Col xs="9">
                    <FastField
                      bsSize="lg"
                      type="text"
                      name="vaccineName"
                      placeholder="Enter Vaccine Name"
                      component={ReactstrapInput}
                    />
                    <FastField
                      bsSize="lg"
                      type="text"
                      name="description"
                      placeholder="Enter Description"
                      component={ReactstrapInput}
                    />
                    <FastField
                      bsSize="lg"
                      type="number"
                      name="price"
                      placeholder="Enter Price"
                      component={ReactstrapInput}
                    />
                    <FastField
                      bsSize="lg"
                      type="number"
                      name="amount"
                      placeholder="Enter Amount"
                      component={ReactstrapInput}
                    />
                    <FastField
                      bsSize="lg"
                      type="date"
                      format="yyyy-MM-dd HH:mm"
                      name="expiryDate"
                      component={ReactstrapInput}
                    />
                    <FastField
                      bsSize="lg"
                      type="text"
                      name="manufacture"
                      placeholder="Enter Manufacture"
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
                    setUpdateVaccineInfo(null);
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

    </Container >
  )
};

const mapGlobalStateToProps = state => {
  return {
    vaccines: selectListVaccine(state),
    page: selectPage(state),
    size: selectSize(state),
    sortField: selectSortField(state),
    sortType: selectSortType(state),
    totalElement: selectTotalElement(state),
    selectedRows: selectSelectedRows(state),
  };
};

export default connect(mapGlobalStateToProps, { getListVaccineAction, updateSelectedRowsAction })(Vaccine);