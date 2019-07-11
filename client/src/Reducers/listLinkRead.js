export default function(state = [], action) {
  switch (action.payload) {
    case "FETCH_BLOGPOST":
      return action.payload;
    default:
      return state;
  }
}
