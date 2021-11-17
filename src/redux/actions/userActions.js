import * as types from "../constants";
import UserApi from '../../api/UserApi';

const listUserAction = (users, page, totalElement, sortField,sortType,  search) => {
  return {
    type: types.GET_LIST_USER,
    payload: {
      users,
      page,
      totalElement,
      sortField,
      sortType,
      search, 
    }
  };
}

export const getListUserAction = (page, size,sortField, sortType, search, ) => {
  return async dispatch => {
    try {
      const json = await UserApi.getAll(page, size,sortField, sortType, search);
      const users = json.details.users;
      const totalElement = json.details.totalElements;
      dispatch(listUserAction(users, page, totalElement));
    } catch (error) {
      console.log(error);
    }
  }
}
export const updateSelectedRowsAction = (selectedRows) => {
  return {
    type: types.GET_LIST_USER_SELECTED_ROWS,
    payload: selectedRows
  };
}