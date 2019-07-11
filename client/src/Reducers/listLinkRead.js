export default function(state = [], action) {
  switch (action.payload) {
    case "FETCH_OUTSOURCE":
      return action.payload;
    default:
      return state;
  }
}
