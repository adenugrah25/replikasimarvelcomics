export const contentReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_CONTENT":
      return action.payload;
    case "DETAIL_CONTENT":
      return action.payload;
    default:
      return state;
  }
};
