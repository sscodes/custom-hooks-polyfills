export const INITIAL_STATE = {
  a: false,
  b: true,
};

export const DemoReducer = (state, action) => {
  switch (action.type) {
    case 'Case 1':
      return {
        ...state,
        a: false,
        b: true,
      };
    case 'Case 2':
      return {
        ...state,
        a: true,
        b: false,
      };
    default:
      return null;
  }
};
