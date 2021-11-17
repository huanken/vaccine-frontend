import * as types from "../constants";
import InjectionApi from '../../api/InjectionApi';

const listInjectionsAction = (injections, page, totalElement, sortField, sortType, search) => {
    return {
        type: types.GET_LIST_INJECTIONS,
        payload: {
            injections,
            page,
            totalElement,
            sortField,
            sortType,
            search,
        }
    };
}

export const getListInjectionsAction = (page, size, sortField, sortType, search) => {
    return async dispatch => {
        try {
            const json = await InjectionApi.getAll(page, size, sortField, sortType, search);
            const injections = json.details.injections;
            const totalElement = json.details.injections.totalElement;
            dispatch(listInjectionsAction(injections,page, totalElement));
        } catch (error) {
            console.log(error);
        }
    }
}

export const updateSelectedRowsAction = (selectedRows) => {
    return {
      type: types.GET_LIST_INJECTION_SELECTED_ROWS,
      payload: selectedRows
    };
  }