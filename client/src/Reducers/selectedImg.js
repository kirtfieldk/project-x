export default function(state = [], action) {
  switch (action.payload) {
    case "FETCH_IMAGE":
      return action.payload;
    default:
      return state;
  }
}

//   TODO complete
