import { combineReducers } from "redux";

import sidebar from "./sidebarReducers";
import layout from "./layoutReducer";
import theme from "./themeReducer";
import userLoginInfo from "./userLoginInfoReducer";
import user from "./userReducer";
import vaccine from "./vaccineReducer";
import injection from "./injectionReducer";
import location from "./locationReducer";
import { reducer as toastr } from "react-redux-toastr";

export default combineReducers({
  sidebar,
  layout,
  theme,
  toastr,
  userLoginInfo,
  user,
  vaccine,
  injection,
  location
});