import { CHECKOUT_BOOKING } from "store/type";

const initialState = null;

export default function (state = initialState, action) {
  switch (action.type) {
    case CHECKOUT_BOOKING:
      return action.payload;
    default:
      return state;
  }
}
