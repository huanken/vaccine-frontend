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
import { getListLocationAction, updateSelectedRowsAction } from '../../redux/actions/locationAction';
import { selectListLocation, selectPage, selectSize, selectSortField, selectSortType, selectTotalElement, selectSelectedRows } from '../../redux/selectors/locationSelector';
import { Edit2 } from "react-feather";
import LocationApi from '../../api/LocationApi'
import { toastr } from "react-redux-toastr";
import { Formik, FastField, Form } from 'formik';
import * as Yup from 'yup';
import { ReactstrapInput } from "reactstrap-formik";

const Location = (props) => {
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

  const getListLocations = props.getListLocationAction;
  const size = props.size;
  useEffect(() => {
    getListLocations(1, size);
  }, [getListLocations, size]);

  const actionFormatter = (cell, row, rowIndex) => {
    return (
      <>
        <Edit2 className="align-middle mr-2" size={18}
          onClick={() => updateLocation(row.id)}
        />
        {" "}
        <Icon.Trash className="align-middle mr-2" size={18}
           onClick={() => deleteLocation(row.id)}
        />
      </>
    );
  };

  const handleTableChange = (type, { page, sizePerPage, sortField, sortOrder, searchText }) => {
    getListLocations(page, sizePerPage, sortField, sortOrder, searchText);
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

  // create
  const [isOpenModalCreate, setOpenModalCreate] = useState(false);
  // update
  const [updateLocationInfo, setUpdateLocationInfo] = useState({});
  const updateLocation = async (id) => {
    setOpenModalCreate(true);
    const data = await LocationApi.getById(id);
    console.log(updateLocationInfo);
    setUpdateLocationInfo(data.details.location);
  }
  // delete 
  const deleteLocation = async (id) => {
    let result = window.confirm("Do you want to delete this ?");
    if (result) {
      if (id === null || id === undefined) {
        showWrongNotification(
          "Delete Location",
          "Sorry, Cann't Delete"
        );
      } else {
        try {
          await LocationApi.deleteById(id);
             // show notification
          showSuccessNotification(
            "Delete Location",
            "Delete Location Successfully!");
          // reload group page
          refreshForm();
          } catch (error) {
            showWrongNotification(
              "Delete Location",
              error.data.message
            );
          }
      }
    }
    refreshForm();
  }
  const deleteLocations = async () => {
    let result = window.confirm("Do you want to delete all selected rows ?");
    if (result) {
      if (props.selectedRows === null || props.selectedRows === undefined || props.selectedRows.length === 0) {
        showWrongNotification(
          "Delete Location",
          "You have not selected the location!"
        );
      } else {
        await props.selectedRows.forEach(element => {
          LocationApi.deleteById(element);
          console.log("Xóa phần tử thứ " + element);
        });
        // show notification
        showSuccessNotification(
          "Delete Location",
          "Delete Location Successfully!");
        // reload vaccine page
        refreshForm();
      }
    }
    refreshForm();
  }

  const tableColumns = [
    {
      dataField: "id",
      text: "Id",
      sort: true
    },
    {
      dataField: "name",
      text: "Name",
      sort: true
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
      <h1 className="h3 mb-3">Location Management</h1>
      <Card>
        <CardBody>
          <ToolkitProvider
            keyField="id"
            data={props.locations}
            columns={tableColumns}
            search
          >
            {
              toolkitprops => (
                <>
                  <Row style={{ alignItems: "flex-end" }}>
                    <Col xs="9">
                      <CustomSearch {...toolkitprops.searchProps} />
                    </Col>
                    <Col xs="3" style={{ paddingBottom: 20 }}>
                      <div className="float-right pull-right">
                        {/* <Icon.Filter className="align-middle mr-3" color="black" size={25} /> */}
                        <Icon.RefreshCcw className="align-middle mr-3" color="black" size={25} onClick={refreshForm} />
                        <Icon.PlusCircle className="align-middle mr-3" color="black" size={25} onClick={() => setOpenModalCreate(true)} />
                        <Icon.Trash2 className="align-middle mr-3" color="black" size={25} onClick={deleteLocations}/>
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

      < Modal isOpen={isOpenModalCreate} >
        <Formik
          enableReinitialize
          initialValues={
            {
              name: updateLocationInfo ? updateLocationInfo.name : '',
            }
          }
          validationSchema={
            Yup.object({
              name: Yup.string()
                .required('Required')
                .max(50, 'Must be between 6 to 50 characters')
                .min(6, 'Must be between 6 to 50 characters')
            })
          }
          onSubmit={
            async values => {
              console.log(values);
              if (updateLocationInfo) {
                try {
                  await LocationApi.update(updateLocationInfo.id, values.name);
                  setOpenModalCreate(false);
                  // show notification
                  showSuccessNotification(
                    "Update Location",
                    "Update Location Successfully!");
                  // reload Location page
                  refreshForm();
                  setUpdateLocationInfo(null);
                } catch (error) {
                  showWrongNotification(
                    "Update Error",
                    error.data.message);
                  console.log(error);
                  setOpenModalCreate(false);
                }
              } else {
                try {
                  await LocationApi.create(values.name);
                  setOpenModalCreate(false);
                  // show notification
                  showSuccessNotification(
                    "Create Location",
                    "Create Location Successfully!");
                  // reload Location page
                  refreshForm();
                  setUpdateLocationInfo(null);
                } catch (error) {
                  showWrongNotification(
                    "Create Error",
                    error.data.message);
                  console.log(error);
                }
              }
            }
          }
        >
          {({ isSubmitting }) => (
            <Form>
              {/* header */}
              <ModalHeader>
                Create New Location
              </ModalHeader>
              {/* body */}
              <ModalBody>
                {/* Name */}
                <Row style={{ alignItems: "center" }}>
                  <Col xs="auto">
                    Location Name:
                  </Col>
                  <Col>
                    <FastField
                      bsSize="lg"
                      type="text"
                      name="name"
                      placeholder="Enter Location Name"
                      component={ReactstrapInput}
                    />
                  </Col>
                </Row>
              </ModalBody>
              {/* footer */}
              <ModalFooter>
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
                    setUpdateLocationInfo(null);
                    setOpenModalCreate(false);
                  }
                  }
                >
                  Close
                </Button>
              </ModalFooter>
            </Form>
          )}
        </Formik >
      </Modal>

    </Container >
  )
};

const mapGlobalStateToProps = state => {
  return {
    locations: selectListLocation(state),
    page: selectPage(state),
    size: selectSize(state),
    sortField: selectSortField(state),
    sortType: selectSortType(state),
    totalElement: selectTotalElement(state),
    selectedRows: selectSelectedRows(state),
  };
};

export default connect(mapGlobalStateToProps, { getListLocationAction, updateSelectedRowsAction })(Location);