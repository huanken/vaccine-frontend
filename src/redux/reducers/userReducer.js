import * as types from "../constants";

const initialState = {
  users: [],

  // paging
  page: 1,
  size: 5,
  totalElement: 0,

  // sorting
  sortField: "id",
  sortType: "asc",

  // search
  search: undefined,
  // selected rows
  selectedRows: [],
};

export default function reducer(state = initialState, actions) {
  switch (actions.type) {
    case types.GET_LIST_USER:
      return {
        ...state,
        users: actions.payload.users,
        // paging
        page: actions.payload.page,
        totalElement: actions.payload.totalElement,
        // sorting
        sortField: actions.payload.sortField,
        sortType: actions.payload.sortType,
        // search
        search: actions.payload.search,

      };
      case types.GET_LIST_USER_SELECTED_ROWS:
      return {
        ...state,
        selectedRows: actions.payload,
      };
    default:
      return state;
  }
}