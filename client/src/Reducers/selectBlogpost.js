export default function(state = [], action) {
  switch (action.payload) {
    case "SELECTED_BLOGPOST":
      return action.payload;
    default:
      return state;
  }
}

//   TODO complete
