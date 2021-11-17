import * as types from "../constants";
import VaccineApi from '../../api/VaccineApi';

const listVaccineAction = (vaccines, page, totalElement, sortField,sortType,  search) => {
  return {
    type: types.GET_LIST_VACCINES,
    payload: {
      vaccines,
      page,
      totalElement,
      sortField,
      sortType,
      search, 
    }
  };
}

export const getListVaccineAction = (page, size,sortField, sortType, search,) => {
  return async dispatch => {
    try {
      const json = await VaccineApi.getAll(page, size,sortField, sortType, search);
      const vaccines = json.details.vaccines;
      const totalElement = json.details.totalElements;
      dispatch(listVaccineAction(vaccines, page, totalElement));
    } catch (error) {
      console.log(error);
    }
  }
}

export const updateSelectedRowsAction = (selectedRows) => {
  return {
    type: types.GET_LIST_VACCINE_SELECTED_ROWS,
    payload: selectedRows
  };
}