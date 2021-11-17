import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row
} from "reactstrap";
import { connect } from "react-redux";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
import filterFactory, { customFilter } from 'react-bootstrap-table2-filter';
import CustomSearch from './CustomSearch';
import * as Icon from "react-feather";
import { useState } from "react";
import { getListInjectionsAction , updateSelectedRowsAction} from '../../redux/actions/injectionActions';
import { selectListInjection, selectPage, selectSize, selectSortField, selectSortType, selectTotalElement,selectSelectedRows } from '../../redux/selectors/injectionSelector';
import InjectionApi from '../../api/InjectionApi';
import { Edit2 } from "react-feather";
import { toastr } from "react-redux-toastr";
const Injection = (props) => {

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

  const getListInjection = props.getListInjectionsAction;
  const size = props.size
  useEffect(() => {
    getListInjection(1 ,size);
  }, [getListInjection, size]);

  const tableColumns = [
    {
      dataField: "id",
      text: "Id",
      sort: true
    },
    {
      dataField: "user.username",
      text: "User Name",
      sort: true
    },
    {
      dataField: "vaccine.name",
      text: "Name Vaccine",
      sort: true
    },
    {
      dataField: "location",
      text: "Location",
      sort: true
    },
    {
      dataField: "dateInjection",
      text: "Date Of Injection",
      sort: true
    },
    {
      dataField: "status",
      text: "Status",
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

  // create
  const [isOpenModalCreate, setOpenModalCreate] = useState(false);

  // update
  const [updateInjectionInfo, setUpdateInjectionInfo] = useState(null);
  const updateInjection = async (injectionID) => {
    setOpenModalCreate(true);
    const data = await InjectionApi.getById(injectionID);
    data.details.injection.expiryDate = data.details.injection.expiryDate.split(" ", 1);
    console.log(data);
    setUpdateInjectionInfo(data.details.injection);
  }

  const actionFormatter = (cell, row, rowIndex) => {
    return (
      <>
        <Edit2 className="align-middle mr-2" size={18}
          onClick={() => updateInjection(row.id)}
        />
        {" "}
        <Icon.Trash className="align-middle mr-2" size={18}
          onClick={() => deleteInjection(row.id)}
        />
      </>
    );
  };

  // delete 
  const deleteInjection = async (id) => {
    let result = window.confirm("Do you want to delete this ?");
    if (result) {
      if (id === null || id === undefined) {
        showWrongNotification(
          "Delete Injection",
          "Sorry, Cann't Delete"
        );
      } else {
        try {
        await InjectionApi.deleteById(id);
           // show notification
        showSuccessNotification(
          "Delete Injection",
          "Delete Injection Successfully!");
        // reload group page
        refreshForm();
        refreshForm();
        refreshForm();
        } catch (error) {
          showWrongNotification(
            "Delete Injection",
            error.data.message
          );
        }
      }
    }
    refreshForm();
  }
  const deleteInjections = async () => {
    let result = window.confirm("Do you want to delete all selected rows ?");
    if (result) {
      if (props.selectedRows === null || props.selectedRows === undefined || props.selectedRows.length === 0) {
        showWrongNotification(
          "Delete Injection",
          "You have not selected the Injection!"
        );
      } else {
        await props.selectedRows.forEach(element => {
          InjectionApi.deleteById(element);
          console.log("Xóa phần tử thứ " + element);
        });
        // show notification
        showSuccessNotification(
          "Delete Injection",
          "Delete Injection Successfully!");
        // reload Injection page
        refreshForm();
        refreshForm();
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

  const handleTableChange = (type,{ page, sizePerPage, sortField, sortOrder, searchText }) => {
    getListInjection(page, sizePerPage, sortField, sortOrder, searchText);
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


  return (
    <Container fluid className="p-0">
            <h1 className="h3 mb-3">Injection Management</h1>
            <Card>
        <CardBody>
          <ToolkitProvider
            keyField="id"
            data={props.injections}
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
                        <Icon.Trash2 className="align-middle mr-3" color="black" size={25} onClick={deleteInjections} />
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
        </Container >
  )
};

const mapGlobalStateToProps = state => {
  return {
    injections: selectListInjection(state),
    page: selectPage(state),
    size: selectSize(state),
    sortField: selectSortField(state),
    sortType: selectSortType(state),
    totalElement: selectTotalElement(state),
    selectedRows: selectSelectedRows(state),
  };
 
};

export default connect(mapGlobalStateToProps, { getListInjectionsAction, updateSelectedRowsAction })(Injection);