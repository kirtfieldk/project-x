export default function(state = [], action) {
  switch (action.type) {
    case "FETCH_BLOPOST":
      return action.payload;
    default:
      return state;
  }
}
