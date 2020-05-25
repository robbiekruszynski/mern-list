import { v4 as uuid } from "uuid";
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "../actions/types";

const initialState = {
  items: [
    { id: uuid(), name: "Eggs" },
    { id: uuid(), name: "Butter" },
    { id: uuid(), name: "Chives" },
    { id: uuid(), name: "Salt" },
    { id: uuid(), name: "Pepper" },
    { id: uuid(), name: "Cheese" },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
      };
    default:
      return state;
  }
}
