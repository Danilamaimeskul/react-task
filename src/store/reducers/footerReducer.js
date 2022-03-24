import footer from "../../data/footer";

const defaultState = {
  footer: footer,
};

const footerReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default footerReducer;
