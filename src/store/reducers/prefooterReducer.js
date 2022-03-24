import prefooter from "../../data/prefooter";

const defaultState = {
  prefooter: prefooter,
};

const prefooterReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default prefooterReducer;
