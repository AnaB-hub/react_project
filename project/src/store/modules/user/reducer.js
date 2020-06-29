import produce from "immer";

export default function user(state = [], action) {
  switch (action.type) {
    case "ADD_USER_TO_LOCAL_STORAGE":
      return produce(state, (draft) => {
        draft.push(action.user);
      });
    default:
      return state;
  }
}
