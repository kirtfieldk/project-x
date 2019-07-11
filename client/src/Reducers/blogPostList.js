export default function(state = [], action) {
  switch (action.type) {
    case "FETCH_BLOGPOST":
      return action.payload;
    default:
      return state;
  }
}
