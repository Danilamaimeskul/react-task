import userReducer from "./userReducer";
// import projectsReducer from "./projectsReducer";

import { combineReducers } from "redux";
import atticReducer from "./atticReducer";
import footerReducer from "./footerReducer";
import prefooterReducer from "./prefooterReducer";
import headerMenuReducer from "./headerMenuReducer";

const rootReducer = combineReducers({
  user: userReducer,
  // projects: projectsReducer,
  attic: atticReducer,
  footer: footerReducer,
  prefooter: prefooterReducer,
  headerMenu: headerMenuReducer,
});

export default rootReducer;
