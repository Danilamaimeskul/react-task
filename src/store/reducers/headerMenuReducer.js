import headerMenu from "../../data/headerMenu";

const defaultState = {
  headerMenu: headerMenu,
};

const headerMenuReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default headerMenuReducer;
