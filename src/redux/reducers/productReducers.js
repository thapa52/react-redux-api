import { ActionTypes } from "../constants/action-types";

const initialState = [
  {
    id: 1,
    title: "thapa",
    category: "category",
  },
];

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;

    default:
      return state;
  }
};
