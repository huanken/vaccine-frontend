
import * as types from "../constants";

const initialState = {
    injections: [],
    // paging
  page: 1,
  size: 5,
  totalElement: 0,

  // sorting
  sortField: "id",
  sortType: "asc",

  // search
  search: undefined,
  selectedRows: [],
};

export default function Reducer(state = initialState, actions) {
    switch (actions.type) {
        case types.GET_LIST_INJECTIONS:
            return {
                ...state,
                injections: actions.payload.injections,
                // paging
                page: actions.payload.page,
                totalElement: actions.payload.totalElement,
                // sorting
                sortField: actions.payload.sortField,
                sortType: actions.payload.sortType,

                search: actions.payload.search,
                isLoading: false
            };
        case types.GET_LIST_INJECTION_SELECTED_ROWS:
                return {
                  ...state,
                  selectedRows: actions.payload,
                };
        default:
            return state;
    }
}