import * as types from "../constants";
import LocationApi from '../../api/LocationApi';

const listLocationAction = (locations, page, totalElement, sortField,sortType,  search) => {
  return {
    type: types.GET_LIST_LOCATIONS,
    payload: {
      locations,
      page,
      totalElement,
      sortField,
      sortType,
      search, 
    }
  };
}

export const getListLocationAction = (page, size,sortField, sortType, search,) => {
  return async dispatch => {
    try {
      const json = await LocationApi.getAll(page, size,sortField, sortType, search,);
      const locations = json.details.locations;
      const totalElement = json.details.totalElements;
      dispatch(listLocationAction(locations, page, totalElement));
    } catch (error) {
      console.log(error);
    }
  }
}

export const updateSelectedRowsAction = (selectedRows) => {
  return {
    type: types.GET_LIST_LOCATION_SELECTED_ROWS,
    payload: selectedRows
  };
}