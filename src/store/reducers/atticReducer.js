import attic from "../../data/attic";

const defaultState = {
  attic: attic,
};

const atticReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default atticReducer;
